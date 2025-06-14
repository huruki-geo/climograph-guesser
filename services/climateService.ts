import { MonthlyClimateData } from '../types';
import { OPEN_METEO_ARCHIVE_API_URL } from '../constants';

export async function fetchClimateData(latitude: number, longitude: number): Promise<MonthlyClimateData | null> {
  const currentYear = new Date().getFullYear();
  const targetYear = currentYear - 1; // Fetch data for the last full year

  const startDate = `${targetYear}-01-01`;
  const endDate = `${targetYear}-12-31`;

  const params = new URLSearchParams({
    latitude: latitude.toFixed(4), // Increased precision as per API docs
    longitude: longitude.toFixed(4), // Increased precision
    start_date: startDate,
    end_date: endDate,
    daily: 'temperature_2m_mean,precipitation_sum',
    temperature_unit: 'celsius',
    precipitation_unit: 'mm',
    timezone: 'GMT', // Use GMT for consistent daily aggregation
  });

  try {
    const response = await fetch(`${OPEN_METEO_ARCHIVE_API_URL}?${params.toString()}`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to fetch daily climate data for lat:${latitude}, lon:${longitude}. Year: ${targetYear}. Status: ${response.status}, Body: ${errorText}`);
      return null;
    }
    const data = await response.json();
    
    if (!data.daily || 
        !Array.isArray(data.daily.time) || 
        !Array.isArray(data.daily.temperature_2m_mean) || 
        !Array.isArray(data.daily.precipitation_sum) ||
        data.daily.time.length === 0) {
      console.warn(
        `API Response for lat:${latitude}, lon:${longitude} (Year: ${targetYear}) is missing expected daily data arrays or arrays are empty. Data:`, 
        JSON.stringify(data, null, 2)
      );
      return null;
    }

    const dailyTimes = data.daily.time as string[];
    const dailyTemperatures = data.daily.temperature_2m_mean as (number | null)[];
    const dailyPrecipitations = data.daily.precipitation_sum as (number | null)[];

    if (dailyTimes.length !== dailyTemperatures.length || dailyTimes.length !== dailyPrecipitations.length) {
        console.warn(
            `API Response for lat:${latitude}, lon:${longitude} (Year: ${targetYear}) has mismatched lengths for daily data arrays. Data:`,
            JSON.stringify(data, null, 2)
        );
        return null;
    }

    const monthlyTempSums: number[] = Array(12).fill(0);
    const monthlyTempCounts: number[] = Array(12).fill(0);
    const monthlyPrecipSums: number[] = Array(12).fill(0);

    for (let i = 0; i < dailyTimes.length; i++) {
      const dateStr = dailyTimes[i];
      // Dates are YYYY-MM-DD. We are using GMT for date parsing.
      const monthIndex = new Date(dateStr + 'T00:00:00Z').getUTCMonth(); // 0-11

      const temp = dailyTemperatures[i];
      if (temp !== null && typeof temp === 'number' && !isNaN(temp)) {
        monthlyTempSums[monthIndex] += temp;
        monthlyTempCounts[monthIndex]++;
      }

      const precip = dailyPrecipitations[i];
      if (precip !== null && typeof precip === 'number' && !isNaN(precip)) {
        monthlyPrecipSums[monthIndex] += precip;
      }
    }

    const aggregatedTemperatures: (number | null)[] = Array(12).fill(null);
    for (let i = 0; i < 12; i++) {
      if (monthlyTempCounts[i] > 0) {
        aggregatedTemperatures[i] = monthlyTempSums[i] / monthlyTempCounts[i];
      }
    }
    
    // Check if all aggregated data points are effectively null or zero (if no data was found)
    const allTempsEffectivelyNull = aggregatedTemperatures.every(t => t === null || t === 0);
    const allPrecipsZero = monthlyPrecipSums.every(p => p === 0);

    if (allTempsEffectivelyNull && allPrecipsZero && dailyTimes.length > 0) {
        // This might happen if all daily values were null, or if it's a location with genuinely no temp/precip (e.g. poles in winter for precip)
        // However, if counts are zero for all months, it's more likely an issue or truly no data.
        const totalTempValues = monthlyTempCounts.reduce((sum, count) => sum + count, 0);
        if (totalTempValues === 0) {
             console.warn(`Climate data for lat:${latitude}, lon:${longitude} (Year: ${targetYear}) resulted in no valid temperature data points after aggregation. Treating as unusable.`);
             return null;
        }
    }


    return {
      temperature: aggregatedTemperatures as number[], // Will be handled by formatter if nulls exist
      precipitation: monthlyPrecipSums,
    };

  } catch (error) {
    console.error(`Error fetching or processing daily climate data for lat:${latitude}, lon:${longitude} (Year: ${targetYear}):`, error);
    return null;
  }
}