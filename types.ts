
export interface City {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface MonthlyClimateData {
  temperature: number[]; // 12 months
  precipitation: number[]; // 12 months
}

export interface ChartDataPoint {
  month: string;
  temperature: number;
  precipitation: number;
}

export enum GameMode {
  PIN = 'PIN',
  CHOICE = 'CHOICE',
  CHALLENGE = 'CHALLENGE', 
}

export enum GameState {
  SELECT_MODE = 'SELECT_MODE',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
  CHALLENGE_SUMMARY = 'CHALLENGE_SUMMARY',
  LEADERBOARD = 'LEADERBOARD', // New state for displaying the leaderboard
}

export interface QuizQuestion {
  targetCity: City;
  targetClimateData: MonthlyClimateData;
  options?: City[]; // For CHOICE mode
}

export interface UserPinGuess {
  latitude: number;
  longitude: number;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  // other types of chunks can exist
}

// Result for a single question within a challenge
export interface ChallengeAnswerResult {
  questionNumber: number;
  targetCity: City;
  score: number; // Score for this specific question (0-100)
  userPinGuess?: UserPinGuess; // Store the user's pin for this question
}

export interface LeaderboardEntry {
  id: string; // Unique ID for the entry, e.g., timestamp + random
  name: string;
  score: number; // Total score in challenge mode
  rankName: string;
  rankEmoji: string;
  date: string; // Date of achievement, e.g., "YYYY-MM-DD"
  mode: GameMode.CHALLENGE; // Currently only for challenge mode
}
