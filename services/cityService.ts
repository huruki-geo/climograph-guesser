
import { City } from '../types';
import { shuffleArray } from '../utils/helpers';

// データをメモリにキャッシュするための変数
let citiesCache: City[] | null = null;

// 内部ヘルパー: データを必要になった瞬間にロードする
const loadCities = async (): Promise<City[]> => {
  if (citiesCache) {
    return citiesCache;
  }
  
  // 重いデータファイル (cityData.ts) を動的にインポート
  // constants.ts ではなく、専用のデータファイルから読み込みます
  const module = await import('./cityData'); 
  citiesCache = module.CITIES;
  return citiesCache;
};

export async function getRandomCity(
  excludeSameAsLastQuestion?: City, 
  excludeCurrentAttempts: City[] = []
): Promise<City | null> { // 返り値が Promise になります
  
  // ★ここでデータを待機
  const CITIES = await loadCities();

  if (CITIES.length === 0) return null;

  const citiesToExcludeByNameAndCountry = new Set<string>();
  if (excludeSameAsLastQuestion) {
    citiesToExcludeByNameAndCountry.add(`${excludeSameAsLastQuestion.name}_${excludeSameAsLastQuestion.country}`);
  }
  excludeCurrentAttempts.forEach(city => {
    citiesToExcludeByNameAndCountry.add(`${city.name}_${city.country}`);
  });

  let availableCities = CITIES;
  if (citiesToExcludeByNameAndCountry.size > 0) {
    availableCities = CITIES.filter(c => 
      !citiesToExcludeByNameAndCountry.has(`${c.name}_${c.country}`)
    );
  }
  
  if (availableCities.length === 0) {
    return null; 
  }
  
  const randomIndex = Math.floor(Math.random() * availableCities.length);
  return availableCities[randomIndex];
}

export async function getCityOptions(correctCity: City, count: number): Promise<City[]> { // 返り値が Promise になります
  
  // ★ここでデータを待機
  const CITIES = await loadCities();

  const otherCities = CITIES.filter(c => c.name !== correctCity.name || c.country !== correctCity.country);
  // shuffleArray は同期関数のままで大丈夫です
  const shuffledOtherCities = shuffleArray(otherCities);
  const options = [correctCity, ...shuffledOtherCities.slice(0, count - 1)];
  return shuffleArray(options);
}
