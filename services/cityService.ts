
import { City } from '../types';
import { CITIES } from '../constants';
import { shuffleArray } from '../utils/helpers';

export function getRandomCity(
  excludeSameAsLastQuestion?: City, 
  excludeCurrentAttempts: City[] = []
): City | null {
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
    // This means all cities in CITIES are in the exclusion sets.
    // Signal that no city could be selected according to exclusion criteria.
    return null; 
  }
  
  const randomIndex = Math.floor(Math.random() * availableCities.length);
  return availableCities[randomIndex];
}

export function getCityOptions(correctCity: City, count: number): City[] {
  const otherCities = CITIES.filter(c => c.name !== correctCity.name || c.country !== correctCity.country);
  const shuffledOtherCities = shuffleArray(otherCities);
  const options = [correctCity, ...shuffledOtherCities.slice(0, count - 1)];
  return shuffleArray(options);
}
