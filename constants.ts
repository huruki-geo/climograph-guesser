import { City } from './types';

// Changed from climate-api to archive-api to fetch daily data
export const OPEN_METEO_ARCHIVE_API_URL = 'https://archive-api.open-meteo.com/v1/archive';

export const MONTH_NAMES_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Sample list of cities. A real application would have a more extensive list (100+).
export const CITIES: City[] = [
  { name: 'Tokyo', country: 'Japan', latitude: 35.6895, longitude: 139.6917 },
  { name: 'New York', country: 'USA', latitude: 40.7128, longitude: -74.0060 },
  { name: 'London', country: 'UK', latitude: 51.5074, longitude: -0.1278 },
  { name: 'Paris', country: 'France', latitude: 48.8566, longitude: 2.3522 },
  { name: 'Cairo', country: 'Egypt', latitude: 30.0444, longitude: 31.2357 },
  { name: 'Beijing', country: 'China', latitude: 39.9042, longitude: 116.4074 },
  { name: 'Moscow', country: 'Russia', latitude: 55.7558, longitude: 37.6173 },
  { name: 'Rio de Janeiro', country: 'Brazil', latitude: -22.9068, longitude: -43.1729 },
  { name: 'Sydney', country: 'Australia', latitude: -33.8688, longitude: 151.2093 },
  { name: 'Rome', country: 'Italy', latitude: 41.9028, longitude: 12.4964 },
  { name: 'New Delhi', country: 'India', latitude: 28.6139, longitude: 77.2090 },
  { name: 'Mexico City', country: 'Mexico', latitude: 19.4326, longitude: -99.1332 },
  { name: 'Buenos Aires', country: 'Argentina', latitude: -34.6037, longitude: -58.3816 },
  { name: 'Lagos', country: 'Nigeria', latitude: 6.5244, longitude: 3.3792 },
  { name: 'Istanbul', country: 'Turkey', latitude: 41.0082, longitude: 28.9784 },
  { name: 'Seoul', country: 'South Korea', latitude: 37.5665, longitude: 126.9780 },
  { name: 'Jakarta', country: 'Indonesia', latitude: -6.2088, longitude: 106.8456 },
  { name: 'Berlin', country: 'Germany', latitude: 52.5200, longitude: 13.4050 },
  { name: 'Madrid', country: 'Spain', latitude: 40.4168, longitude: -3.7038 },
  { name: 'Bangkok', country: 'Thailand', latitude: 13.7563, longitude: 100.5018 },
  { name: 'Nairobi', country: 'Kenya', latitude: -1.2921, longitude: 36.8219 },
  { name: 'Lima', country: 'Peru', latitude: -12.0464, longitude: -77.0428 },
  { name: 'Singapore', country: 'Singapore', latitude: 1.3521, longitude: 103.8198 },
  { name: 'Reykjavik', country: 'Iceland', latitude: 64.1466, longitude: -21.9426 },
  { name: 'Manaus', country: 'Brazil', latitude: -3.1190, longitude: -60.0217 },
  { name: 'Dubai', country: 'UAE', latitude: 25.276987, longitude: 55.296249 },
  { name: 'Cape Town', country: 'South Africa', latitude: -33.9249, longitude: 18.4241 },
  { name: 'Vancouver', country: 'Canada', latitude: 49.2827, longitude: -123.1207 },
  { name: 'Oslo', country: 'Norway', latitude: 59.9139, longitude: 10.7522 },
  { name: 'Mumbai', country: 'India', latitude: 19.0760, longitude: 72.8777 },
  // Added 50 new cities
  { name: 'Port Vila', country: 'Vanuatu', latitude: -17.7333, longitude: 168.3167 },
  { name: 'Suva', country: 'Fiji', latitude: -18.1333, longitude: 178.4333 },
  { name: 'Apia', country: 'Samoa', latitude: -13.8333, longitude: -171.7667 },
  { name: 'Nuku\'alofa', country: 'Tonga', latitude: -21.1333, longitude: -175.2000 },
  { name: 'Funafuti', country: 'Tuvalu', latitude: -8.5167, longitude: 179.2167 },
  { name: 'Majuro', country: 'Marshall Islands', latitude: 7.1000, longitude: 171.3833 },
  { name: 'Palikir', country: 'Micronesia', latitude: 6.9178, longitude: 158.1853 },
  { name: 'Honiara', country: 'Solomon Islands', latitude: -9.4333, longitude: 159.9500 },
  { name: 'Port Moresby', country: 'Papua New Guinea', latitude: -9.4789, longitude: 147.1494 },
  { name: 'Wellington', country: 'New Zealand', latitude: -41.2865, longitude: 174.7762 },
  { name: 'Hagåtña', country: 'Guam', latitude: 13.4731, longitude: 144.7497 },
  { name: 'Papeete', country: 'French Polynesia', latitude: -17.5350, longitude: -149.5696 },
  { name: 'Longyearbyen', country: 'Svalbard, Norway', latitude: 78.2232, longitude: 15.6267 },
  { name: 'Ushuaia', country: 'Argentina', latitude: -54.8019, longitude: -68.3030 },
  { name: 'Yakutsk', country: 'Russia', latitude: 62.0354, longitude: 129.6750 },
  { name: 'Arica', country: 'Chile', latitude: -18.4783, longitude: -70.3219 },
  { name: 'Mawsynram', country: 'India', latitude: 25.2970, longitude: 91.5826 },
  { name: 'Nuuk', country: 'Greenland', latitude: 64.1836, longitude: -51.7216 },
  { name: 'Stanley', country: 'Falkland Islands', latitude: -51.7000, longitude: -57.8500 },
  { name: 'Lhasa', country: 'China', latitude: 29.6500, longitude: 91.1167 }, // Tibet
  { name: 'Ulaanbaatar', country: 'Mongolia', latitude: 47.9189, longitude: 106.9172 },
  { name: 'Uyuni', country: 'Bolivia', latitude: -20.4632, longitude: -66.8250 },
  { name: 'Dakar', country: 'Senegal', latitude: 14.7167, longitude: -17.4677 },
  { name: 'Accra', country: 'Ghana', latitude: 5.6037, longitude: -0.1870 },
  { name: 'Addis Ababa', country: 'Ethiopia', latitude: 9.0054, longitude: 38.7578 },
  { name: 'Antananarivo', country: 'Madagascar', latitude: -18.8792, longitude: 47.5079 },
  { name: 'Windhoek', country: 'Namibia', latitude: -22.5594, longitude: 17.0832 },
  { name: 'Algiers', country: 'Algeria', latitude: 36.7754, longitude: 3.0586 },
  { name: 'Khartoum', country: 'Sudan', latitude: 15.5007, longitude: 32.5599 },
  { name: 'Freetown', country: 'Sierra Leone', latitude: 8.4844, longitude: -13.2344 },
  { name: 'Tashkent', country: 'Uzbekistan', latitude: 41.2995, longitude: 69.2401 },
  { name: 'Kathmandu', country: 'Nepal', latitude: 27.7172, longitude: 85.3240 },
  { name: 'Colombo', country: 'Sri Lanka', latitude: 6.9271, longitude: 79.8612 },
  { name: 'Pyongyang', country: 'North Korea', latitude: 39.0392, longitude: 125.7625 },
  { name: 'Thimphu', country: 'Bhutan', latitude: 27.4728, longitude: 89.6390 },
  { name: 'Bishkek', country: 'Kyrgyzstan', latitude: 42.8746, longitude: 74.5698 },
  { name: 'Bandar Seri Begawan', country: 'Brunei', latitude: 4.9031, longitude: 114.9398 },
  { name: 'Male', country: 'Maldives', latitude: 4.1755, longitude: 73.5093 },
  { name: 'Chișinău', country: 'Moldova', latitude: 47.0105, longitude: 28.8638 },
  { name: 'Minsk', country: 'Belarus', latitude: 53.9045, longitude: 27.5615 },
  { name: 'Tirana', country: 'Albania', latitude: 41.3275, longitude: 19.8187 }, // Corrected longitude for Tirana
  { name: 'Sarajevo', country: 'Bosnia and Herzegovina', latitude: 43.8563, longitude: 18.4131 },
  { name: 'Skopje', country: 'North Macedonia', latitude: 41.9981, longitude: 21.4254 },
  { name: 'Podgorica', country: 'Montenegro', latitude: 42.4304, longitude: 19.2594 },
  { name: 'Ljubljana', country: 'Slovenia', latitude: 46.0569, longitude: 14.5058 },
  { name: 'Zagreb', country: 'Croatia', latitude: 45.8150, longitude: 15.9819 },
  { name: 'Bratislava', country: 'Slovakia', latitude: 48.1486, longitude: 17.1077 },
  { name: 'Vilnius', country: 'Lithuania', latitude: 54.6872, longitude: 25.2797 },
  { name: 'Riga', country: 'Latvia', latitude: 56.9496, longitude: 24.1052 },
  { name: 'Tallinn', country: 'Estonia', latitude: 59.4370, longitude: 24.7536 },
  { name: 'Helsinki', country: 'Finland', latitude: 60.1699, longitude: 24.9384 },
  { name: 'Copenhagen', country: 'Denmark', latitude: 55.6761, longitude: 12.5683 },
  { name: 'Amsterdam', country: 'Netherlands', latitude: 52.3676, longitude: 4.9041 },
  { name: 'Brussels', country: 'Belgium', latitude: 50.8503, longitude: 4.3517 },
  { name: 'Luxembourg City', country: 'Luxembourg', latitude: 49.8153, longitude: 6.1296 },
  { name: 'Dublin', country: 'Ireland', latitude: 53.3498, longitude: -6.2603 },
  { name: 'Lisbon', country: 'Portugal', latitude: 38.7223, longitude: -9.1393 },
  { name: 'Bern', country: 'Switzerland', latitude: 46.9480, longitude: 7.4474 },
  { name: 'Vienna', country: 'Austria', latitude: 48.2082, longitude: 16.3738 },
  { name: 'Prague', country: 'Czech Republic', latitude: 50.0755, longitude: 14.4378 },
  { name: 'Warsaw', country: 'Poland', latitude: 52.2297, longitude: 21.0122 },
  { name: 'Budapest', country: 'Hungary', latitude: 47.4979, longitude: 19.0402 },
  { name: 'Bucharest', country: 'Romania', latitude: 44.4268, longitude: 26.1025 },
  { name: 'Sofia', country: 'Bulgaria', latitude: 42.6977, longitude: 23.3219 },
  { name: 'Athens', country: 'Greece', latitude: 37.9838, longitude: 23.7275 },
  { name: 'Nicosia', country: 'Cyprus', latitude: 35.1856, longitude: 33.3823 },
  { name: 'Valletta', country: 'Malta', latitude: 35.8989, longitude: 14.5146 }
];

export const NUMBER_OF_CHOICES = 4;
export const NUMBER_OF_QUESTIONS_IN_CHALLENGE = 5;

// Constants for Leaderboard
export const LEADERBOARD_KEY = 'climographGuesserLeaderboard_v1'; // Added _v1 for potential future structure changes
export const MAX_LEADERBOARD_ENTRIES = 10;
export const PLAYER_NAME_MIN_LENGTH = 3;
export const PLAYER_NAME_MAX_LENGTH = 15;
export const PLAYER_NAME_REGEX = /^[a-zA-Z0-9_-\s]+$/; // Alphanumeric, underscore, hyphen, space

// Score Ranks for Challenge Mode
export const SCORE_RANKS = [
  { minScore: 450, maxScore: 500, name: '世界気候王', emoji: '👑' },
  { minScore: 400, maxScore: 449, name: '気候マスター', emoji: '🎓' },
  { minScore: 350, maxScore: 399, name: '気候エキスパート', emoji: '🌟' },
  { minScore: 300, maxScore: 349, name: '気候探検家', emoji: '🗺️' },
  { minScore: 250, maxScore: 299, name: 'ウェザーウォッチャー', emoji: '👀' },
  { minScore: 200, maxScore: 249, name: '気象予報士見習い', emoji: '🌦️' },
  { minScore: 100, maxScore: 199, name: '気候ルーキー', emoji: '🌱' },
  { minScore: 0, maxScore: 99, name: '気候チャレンジャー', emoji: '🤔' },
];

export const DEFAULT_MAP_CENTER: [number, number] = [20, 0];
export const DEFAULT_MAP_ZOOM = 2;
export const RESULT_MAP_ZOOM_CLOSE = 5;
export const RESULT_MAP_ZOOM_MID = 3;
export const RESULT_MAP_ZOOM_FAR = 1;
export const MAP_WORLD_VIEW_ZOOM = 2;
export const MAP_CONTINENT_VIEW_ZOOM = 3;
export const MAP_COUNTRY_VIEW_ZOOM = 4;
export const MAP_CITY_VIEW_ZOOM = 6;
