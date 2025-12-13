import { City } from './types';

// Changed from climate-api to archive-api to fetch daily data
export const OPEN_METEO_ARCHIVE_API_URL = 'https://archive-api.open-meteo.com/v1/archive';

export const MONTH_NAMES_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Sample list of cities. A real application would have a more extensive list (100+).
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
