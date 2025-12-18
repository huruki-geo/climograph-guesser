// Cloudflare Pages Functions
// このファイルはTypeScriptで書かれており、自動的にトランスパイルされます

interface Env {
  ASSETS: Fetcher;
}

export async function onRequest(context: EventContext<Env, any, any>): Promise<Response> {
  const { request, env } = context;
  const url = new URL(request.url);

  // 【重要】無限ループ防止策
  // 内部的な fetch (env.ASSETS.fetch) からの再入力を検知して直接アセットを返す
  if (request.headers.has('x-internal-fetch')) {
    return env.ASSETS.fetch(request);
  }

  // 1. 静的アセット(CSS, JS, 画像など)の直接返却
  // 拡張子を持っている、または特定のディレクトリにある場合は、関数を通さずアセットを返す
  const isStaticAsset = 
    url.pathname.includes('.') || // 拡張子がある場合
    url.pathname.startsWith('/assets/') ||
    ['/sitemap.xml', '/robots.txt', '/favicon.png'].includes(url.pathname);

  if (isStaticAsset) {
    // 内部 fetch であることを示すヘッダーを付与
    return env.ASSETS.fetch(new Request(request, {
      headers: { ...Object.fromEntries(request.headers), 'x-internal-fetch': '1' }
    }));
  }

  // 2. APIリクエストの処理 (アセット取得より先に判定)
  if (url.pathname.startsWith('/api/')) {
    return handleApiRequest(request);
  }

  // 3. /about ページの処理 (HTMLの置換が不要な場合)
  if (url.pathname === '/about' || url.pathname === '/about.html') {
    try {
      const aboutResponse = await env.ASSETS.fetch(
        new Request(new URL('/about.html', url.origin), {
          headers: { 'x-internal-fetch': '1' }
        })
      );
      
      if (aboutResponse.ok) {
        return new Response(aboutResponse.body, {
          status: aboutResponse.status,
          headers: {
            ...Object.fromEntries(aboutResponse.headers),
            'Content-Type': 'text/html;charset=UTF-8',
            "cache-control": "public, max-age=4800, s-maxage=86400",
          },
        });
      }
    } catch (e) {
      console.error('Error serving about page:', e);
    }
  }

  // 4. メインのSSR処理 (index.html を取得してメタタグを注入)
  try {
    // index.htmlを取得（無限ループ回避のためヘッダーを付与）
    const response = await env.ASSETS.fetch(
      new Request(new URL('/index.html', url.origin), {
        headers: { 'x-internal-fetch': '1' }
      })
    );
    
    if (!response.ok) {
      return new Response('Not Found', { 
        status: 404,
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    let html = await response.text();

    // メタタグと構造化データの注入
    const metaTags = generateMetaTags(url.pathname);
    const structuredData = generateStructuredData(url);
    
    html = html
      .replace(/<head>/i, `<head>${metaTags}`)
      .replace(/<\/head>/i, `${structuredData}</head>`);

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        "cache-control": "public, max-age=4800, s-maxage=86400",
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    });
  } catch (error) {
    console.error('SSR Error:', error);
    return new Response('Internal Server Error', { 
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// ... generateMetaTags, generateStructuredData, handleApiRequest は変更なし ...
// メタタグ生成関数
function generateMetaTags(pathname: string): string {
  const baseUrl = 'https://climo.statplay.site';
  
  const defaultMeta = {
    title: 'Climograph Guesser | Geography quiz to protect the world\'s climate',
    description: 'A geography quiz where you are shown a random rain and temperature chart from around the world.',
    ogImage: `${baseUrl}/ogp.png`,
  };

  const meta = pathname === '/about' ? {
    title: 'About Climograph Guesser - Climate Data Quiz Game',
    description: 'Learn about Climograph Guesser, an engaging climate data game where you guess cities based on their climographs.',
    ogImage: `${baseUrl}/ogp.png`,
  } : defaultMeta;

  return `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:image" content="${meta.ogImage}">
    <meta property="og:url" content="${baseUrl}${pathname}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${meta.title}">
    <meta name="twitter:description" content="${meta.description}">
    <meta name="twitter:image" content="${meta.ogImage}">
    <link rel="canonical" href="${baseUrl}${pathname}">
  `;
}

// Structured Data生成関数
function generateStructuredData(url: URL): string {
  const baseUrl = 'https://climo.statplay.site';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}${url.pathname}#webpage`,
        "name": "Climograph Guesser | Geography quiz to protect the world's climate",
        "description": "A free, quantitative geography quiz that uses monthly climate data to challenge users.",
        "url": `${baseUrl}${url.pathname}`,
        "inLanguage": "en"
      },
      {
        "@type": "Quiz",
        "@id": `${baseUrl}${url.pathname}#quiz`,
        "name": "Climograph Guesser",
        "description": "A geography quiz where users guess the world region based on its climograph",
        "educationalLevel": "Secondary School or Higher Education"
      }
    ]
  };
  
  return `
    <script type="application/ld+json">
    ${JSON.stringify(structuredData, null, 2)}
    </script>
  `;
}

// APIリクエストハンドラー
async function handleApiRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  
  // 気候データAPIプロキシ
  if (url.pathname === '/api/climate') {
    const lat = url.searchParams.get('lat');
    const lon = url.searchParams.get('lon');
    
    if (!lat || !lon) {
      return new Response(JSON.stringify({ error: 'Missing parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const climateUrl = new URL('https://archive-api.open-meteo.com/v1/archive');
      const currentYear = new Date().getFullYear();
      const targetYear = currentYear - 1;
      
      climateUrl.searchParams.set('latitude', lat);
      climateUrl.searchParams.set('longitude', lon);
      climateUrl.searchParams.set('start_date', `${targetYear}-01-01`);
      climateUrl.searchParams.set('end_date', `${targetYear}-12-31`);
      climateUrl.searchParams.set('daily', 'temperature_2m_mean,precipitation_sum');
      climateUrl.searchParams.set('temperature_unit', 'celsius');
      climateUrl.searchParams.set('precipitation_unit', 'mm');
      climateUrl.searchParams.set('timezone', 'GMT');

      const response = await fetch(climateUrl.toString());
      
      if (!response.ok) {
        throw new Error(`Open-Meteo API error: ${response.status}`);
      }
      
      const data = await response.json();

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          "cache-control": "public, max-age=4800, s-maxage=86400",
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      console.error('Climate API Error:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to fetch climate data',
          message: error instanceof Error ? error.message : 'Unknown error'
        }), 
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' , "cache-control": "public, max-age=4800, s-maxage=86400"},
        }
      );
    }
  }

  return new Response('Not Found', { 
    status: 404,
    headers: { 'Content-Type': 'text/plain', "cache-control": "public, max-age=4800, s-maxage=86400" }
    
  });
}
