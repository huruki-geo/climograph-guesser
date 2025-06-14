
import { ChartDataPoint, MonthlyClimateData } from '../types';
import { MONTH_NAMES_SHORT } from '../constants';

export function formatClimateDataForChart(climateData: MonthlyClimateData): ChartDataPoint[] {
  return MONTH_NAMES_SHORT.map((month, index) => {
    const tempValue = climateData.temperature[index];
    const precipValue = climateData.precipitation[index];

    return {
      month,
      // Default to 0 if tempValue or precipValue is null or undefined, then format.
      temperature: parseFloat((tempValue ?? 0).toFixed(1)),
      precipitation: parseFloat((precipValue ?? 0).toFixed(1)),
    };
  });
}

function norm(arr: number[]): number {
  if (!arr || arr.length === 0) return 0;
  // Filter out null/undefined before calculation if they could exist, or ensure they are numbers.
  // For this specific use case in computeClimateSimilarity, arrays are expected to be numbers.
  return Math.sqrt(arr.reduce((sumSq, val) => sumSq + (val || 0) * (val || 0), 0));
}

function subtract(arrA: number[], arrB: number[]): number[] {
  if (!arrA || !arrB || arrA.length !== arrB.length) return [];
  return arrA.map((valA, i) => (valA || 0) - (arrB[i] || 0));
}

export function computeClimateSimilarity(dataA: MonthlyClimateData, dataB: MonthlyClimateData): number {
  if (!dataA || !dataB || 
      !Array.isArray(dataA.temperature) || !Array.isArray(dataA.precipitation) || 
      !Array.isArray(dataB.temperature) || !Array.isArray(dataB.precipitation) ||
      dataA.temperature.length !== 12 || dataA.precipitation.length !== 12 ||
      dataB.temperature.length !== 12 || dataB.precipitation.length !== 12) {
    console.warn("Invalid data for climate similarity computation:", { dataA, dataB });
    return 0; // Invalid data
  }

  // Ensure arrays contain numbers, default null/undefined to 0 for calculation
  const ta = dataA.temperature.map(t => t ?? 0);
  const pa = dataA.precipitation.map(p => p ?? 0);
  const tb = dataB.temperature.map(t => t ?? 0);
  const pb = dataB.precipitation.map(p => p ?? 0);

  const tempDiffNorm = norm(subtract(ta, tb));
  const tempANorm = norm(ta);
  let tempScore = tempANorm > 1e-6 ? 1 - tempDiffNorm / tempANorm : (tempDiffNorm < 1e-6 ? 1 : 0);
  tempScore = Math.max(0, tempScore); // Ensure score is not negative

  const precDiffNorm = norm(subtract(pa, pb));
  const precANorm = norm(pa);
  let precScore = precANorm > 1e-6 ? 1 - precDiffNorm / precANorm : (precDiffNorm < 1e-6 ? 1 : 0);
  precScore = Math.max(0, precScore); // Ensure score is not negative
  
  // If one of the datasets has all zero precipitation, and the other also has all zero, similarity is high.
  // If one is all zero and other is not, similarity is low.
  if (precANorm < 1e-6 && norm(pb) < 1e-6) {
    precScore = 1;
  } else if ((precANorm < 1e-6 || norm(pb) < 1e-6) && !(precANorm < 1e-6 && norm(pb) < 1e-6)) {
     // one is zero, the other is not significantly zero.
     if(precDiffNorm > 1e-6) precScore = 0; // if difference is not zero
  }

  const averageScore = (tempScore + precScore) / 2;
  return parseFloat((averageScore * 100).toFixed(2));
}

export function shuffleArray<T,>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
