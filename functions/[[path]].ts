// Cloudflare Pages Functions
// このファイルはTypeScriptで書かれており、自動的にトランスパイルされます

interface Env {
  ASSETS: Fetcher;
}

export async function onRequest(context: EventContext<Env, any, any>): Promise<Response> {
  const { request, env } = context;
  const url = new URL(request.url);

  // 静的アセット(CSS, JS, 画像など)はそのまま返す
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.xml') ||
    url.pathname.endsWith('.txt') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname === '/sitemap.xml' ||
    url.pathname === '/robots.txt' ||
    url.pathname === '/favicon.png'
  ) {
    return env.ASSETS.fetch(request);
  }

  // /about ページの処理
  if (url.pathname === '/about' || url.pathname === '/about.html') {
    try {
      const aboutResponse = await env.ASSETS.fetch(
        new Request(new URL('/about.html', url.origin))
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

  // APIリクエストの処理
  if (url.pathname.startsWith('/api/')) {
    return handleApiRequest(request);
  }

  try {
    // index.htmlを取得
    const response = await env.ASSETS.fetch(
      new Request(new URL('/', url.origin))
    );
    
    if (!response.ok) {
      return new Response('Not Found', { 
        status: 404,
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    let html = await response.text();

    // メタタグを動的に設定
    const metaTags = generateMetaTags(url.pathname);
    html = html.replace(
      /<head>/i,
      `<head>${metaTags}`
    );

    // Structured Dataを追加
    const structuredData = generateStructuredData(url);
    html = html.replace(
      /<\/head>/i,
      `${structuredData}</head>`
    );

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
