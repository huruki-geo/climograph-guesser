import React, { useState, useCallback, lazy, Suspense } from 'react';
// 型定義は import type を使用（バンドルサイズには影響しません）
import type { City, MonthlyClimateData, QuizQuestion, UserPinGuess, ChallengeAnswerResult } from './types';
// Enumは初期化で使うため、静的インポートのままにする必要があります
import { GameMode, GameState } from './types';
// 定数もサイズが小さいため通常は静的インポートでOKですが、必要なら動的にできます（今回は静的のまま推奨）
import { NUMBER_OF_CHOICES, NUMBER_OF_QUESTIONS_IN_CHALLENGE } from './constants';

// --- ここにあった services, utils の静的インポートを削除 ---

import LoadingSpinner from './components/LoadingSpinner';
import Button from './components/Button';
import "./index.css";

// コンポーネントのLazy Load
const GameModeSelectorView = lazy(() => import('./components/GameModeSelectorView'));
const QuizView = lazy(() => import('./components/QuizView'));
const ResultView = lazy(() => import('./components/ResultView'));
const ChallengeSummaryView = lazy(() => import('./components/ChallengeSummaryView'));

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.SELECT_MODE);
  const [gameMode, setGameMode] = useState<GameMode | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [userPinGuess, setUserPinGuess] = useState<UserPinGuess | null>(null);
  const [userGuessedCity, setUserGuessedCity] = useState<City | null>(null);
  const [userGuessedClimateData, setUserGuessedClimateData] = useState<MonthlyClimateData | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Challenge Mode State
  const [currentChallengeQuestionNumber, setCurrentChallengeQuestionNumber] = useState<number>(0);
  const [challengeResultsList, setChallengeResultsList] = useState<ChallengeAnswerResult[]>([]);
  const [challengeTotalScore, setChallengeTotalScore] = useState<number>(0);

  const resetChallengeState = () => {
    setCurrentChallengeQuestionNumber(0);
    setChallengeResultsList([]);
    setChallengeTotalScore(0);
  };

  // ★ 変更点1: 関数内で動的にモジュールをインポートする
  const loadNewQuestion = useCallback(async (mode: GameMode) => {
    setIsLoading(true);
    setError(null);
    setUserPinGuess(null);
    setUserGuessedCity(null);
    setUserGuessedClimateData(null);
    
    try {
      // ここで必要な関数だけを動的インポート
      const { fetchClimateData } = await import('./services/climateService');
      const { getRandomCity, getCityOptions } = await import('./services/cityService');

      let cityToExclude: City | undefined = undefined;
      if (mode === GameMode.CHALLENGE && challengeResultsList.length > 0) {
          cityToExclude = challengeResultsList[challengeResultsList.length -1].targetCity;
      } else if (mode !== GameMode.CHALLENGE) {
          cityToExclude = currentQuestion?.targetCity;
      }

      const MAX_ATTEMPTS = 5;
      let attempts = 0;
      let questionLoaded = false;
      const failedCitiesThisAttempt: City[] = [];
      const challengeAttemptExclusions = mode === GameMode.CHALLENGE ? challengeResultsList.map(r => r.targetCity) : [];

      while (!questionLoaded && attempts < MAX_ATTEMPTS) {
        attempts++;
        const cityToTry = await getRandomCity(cityToExclude, [...failedCitiesThisAttempt, ...challengeAttemptExclusions]);

        if (!cityToTry) {
          console.warn(`Attempt ${attempts}: Failed to get a new city to try.`);
          break; 
        }
        
        const targetClimateData = await fetchClimateData(cityToTry.latitude, cityToTry.longitude);

        if (targetClimateData) {
          let options: City[] | undefined;
          if (mode === GameMode.CHOICE) {
            options = await getCityOptions(cityToTry, NUMBER_OF_CHOICES);
          }
          setCurrentQuestion({ targetCity: cityToTry, targetClimateData, options });
          setGameMode(mode);
          setGameState(GameState.QUIZ);
          if (mode === GameMode.CHALLENGE) {
            setCurrentChallengeQuestionNumber(prev => prev + 1);
          }
          questionLoaded = true;
        } else {
          console.warn(`Attempt ${attempts}: Failed to load climate data for ${cityToTry.name}. Retrying with another city.`);
          failedCitiesThisAttempt.push(cityToTry);
        }
      }

      if (!questionLoaded) {
        console.error("Failed to load a question after multiple attempts.");
        setError("Could not load climate data for a city after multiple attempts. Please try again later.");
        setGameState(GameState.SELECT_MODE); 
        resetChallengeState();
      }
    } catch (err) {
      console.error("Failed to load resources", err);
      setError("Failed to load game resources.");
    } finally {
      setIsLoading(false);
    }
  }, [currentQuestion?.targetCity, challengeResultsList]);

  const handleModeSelect = (mode: GameMode) => {
    setGameMode(mode);
    if (mode === GameMode.CHALLENGE) {
      resetChallengeState();
      loadNewQuestion(mode);
    } else {
      resetChallengeState();
      loadNewQuestion(mode);
    }
  };
  
  const processAndShowResult = useCallback((
    calculatedScore: number, 
    guessedClimateData: MonthlyClimateData | null
  ) => {
    setScore(calculatedScore);
    setUserGuessedClimateData(guessedClimateData);
    
    if (gameMode === GameMode.CHALLENGE && currentQuestion) {
      const result: ChallengeAnswerResult = {
        questionNumber: currentChallengeQuestionNumber,
        targetCity: currentQuestion.targetCity,
        score: calculatedScore,
        userPinGuess: userPinGuess || undefined,
      };
      setChallengeResultsList(prev => [...prev, result]);
      setChallengeTotalScore(prev => prev + calculatedScore);
    }
    setGameState(GameState.RESULT);
    setIsSubmitting(false);
  }, [gameMode, currentQuestion, currentChallengeQuestionNumber, userPinGuess]);

  // ★ 変更点2: 回答時のロジックも動的インポート
  const handlePinGuess = async (guess: UserPinGuess) => {
    if (!currentQuestion || !currentQuestion.targetClimateData) return;
    setIsSubmitting(true);
    setUserPinGuess(guess);

    try {
      // 必要なヘルパーとサービスをここでインポート
      const { fetchClimateData } = await import('./services/climateService');
      const { computeClimateSimilarity } = await import('./utils/helpers');

      const guessedClimateData = await fetchClimateData(guess.latitude, guess.longitude);
      const calculatedScore = computeClimateSimilarity(
          currentQuestion.targetClimateData, 
          guessedClimateData || { temperature: Array(12).fill(0), precipitation: Array(12).fill(0) }
      );
      processAndShowResult(calculatedScore, guessedClimateData);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  // ★ 変更点3: Choice回答時のロジックも動的インポート
  const handleChoiceGuess = async (city: City) => {
    if (!currentQuestion || !currentQuestion.targetClimateData) return;
    setIsSubmitting(true);
    setUserGuessedCity(city);
    
    try {
        const { fetchClimateData } = await import('./services/climateService');
        const { computeClimateSimilarity } = await import('./utils/helpers');

        const guessedClimateData = await fetchClimateData(city.latitude, city.longitude);
        let calculatedScore = 0;
        if (city.name === currentQuestion.targetCity.name && city.country === currentQuestion.targetCity.country) {
          calculatedScore = 100;
        } else {
          calculatedScore = computeClimateSimilarity(
              currentQuestion.targetClimateData, 
              guessedClimateData || { temperature: Array(12).fill(0), precipitation: Array(12).fill(0) }
          );
        }
        processAndShowResult(calculatedScore, guessedClimateData);
    } catch (err) {
        console.error(err);
        setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    if (gameMode === GameMode.CHALLENGE) {
      if (currentChallengeQuestionNumber < NUMBER_OF_QUESTIONS_IN_CHALLENGE) {
        loadNewQuestion(GameMode.CHALLENGE);
      } else {
        setGameState(GameState.CHALLENGE_SUMMARY);
      }
    } else {
      setGameState(GameState.SELECT_MODE); 
    }
  };

  const handleTryChallengeAgain = () => {
    handleModeSelect(GameMode.CHALLENGE);
  }
  
  const renderContent = () => {
    if (isLoading && (gameState !== GameState.QUIZ && gameState !== GameState.RESULT)) { 
      return <div className="flex justify-center items-center h-screen"><LoadingSpinner /></div>;
    }
    if (error) {
        return (
            <div className="text-center p-8 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-2">An Error Occurred</h2>
                <p>{error}</p>
                <Button onClick={() => { setError(null); setGameState(GameState.SELECT_MODE); resetChallengeState(); }} className="mt-4">
                    Back to Mode Selection
                </Button>
            </div>
        );
    }

    switch (gameState) {
      case GameState.SELECT_MODE:
        return <GameModeSelectorView onSelectMode={handleModeSelect} />;
      case GameState.QUIZ:
        if (currentQuestion && gameMode) {
          return <QuizView 
                    question={currentQuestion} 
                    gameMode={gameMode} 
                    onPinGuess={handlePinGuess} 
                    onChoiceGuess={handleChoiceGuess}
                    isSubmitting={isSubmitting}
                    currentChallengeQuestionNumber={gameMode === GameMode.CHALLENGE ? currentChallengeQuestionNumber : undefined}
                    totalChallengeQuestions={gameMode === GameMode.CHALLENGE ? NUMBER_OF_QUESTIONS_IN_CHALLENGE : undefined}
                 />;
        }
        return <div className="flex justify-center items-center h-screen"><LoadingSpinner /></div>;
      case GameState.RESULT:
        if (currentQuestion && gameMode) {
          const isIntermediate = gameMode === GameMode.CHALLENGE && currentChallengeQuestionNumber < NUMBER_OF_QUESTIONS_IN_CHALLENGE;
          const isLastChallengeQuestionResult = gameMode === GameMode.CHALLENGE && currentChallengeQuestionNumber === NUMBER_OF_QUESTIONS_IN_CHALLENGE;

          return <ResultView 
                    targetCity={currentQuestion.targetCity}
                    targetClimateData={currentQuestion.targetClimateData}
                    userPinGuess={userPinGuess}
                    userGuessedCity={userGuessedCity}
                    userGuessedClimateData={userGuessedClimateData}
                    score={score}
                    onNextQuestion={handleNextQuestion}
                    gameMode={gameMode}
                    isChallengeIntermediate={isIntermediate || isLastChallengeQuestionResult}
                    currentChallengeQuestionNumber={gameMode === GameMode.CHALLENGE ? currentChallengeQuestionNumber : undefined}
                    totalChallengeQuestions={gameMode === GameMode.CHALLENGE ? NUMBER_OF_QUESTIONS_IN_CHALLENGE : undefined}
                 />;
        }
        return <div className="text-center p-4">Error displaying results. Please start a new game.</div>; 
      case GameState.CHALLENGE_SUMMARY:
        return <ChallengeSummaryView 
                  results={challengeResultsList}
                  totalScore={challengeTotalScore}
                  onTryAgain={handleTryChallengeAgain}
                  onBackToModes={() => { setGameState(GameState.SELECT_MODE); resetChallengeState();}}
                />;
      default:
        return <div className="text-center p-4">Unknown game state.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-sky-100 flex flex-col items-center justify-center p-4 selection:bg-sky-200">
      <header className="w-full max-w-5xl mx-auto mb-8 text-center">
        <a href="https://climo.statplay.site/">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 py-2">
          🌍 Climograph Guesser 🤔
        </h1></a>
      </header>
      <main className="w-full max-w-5xl mx-auto">
        <Suspense fallback={<div className="flex justify-center items-center h-64"><LoadingSpinner /></div>}>
          {renderContent()}
        </Suspense>
      </main>
      <footer className="w-full max-w-5xl mx-auto mt-12 text-center text-gray-500 text-sm pb-4">
        <p>&copy; {new Date().getFullYear()} Climograph Guesser. Powered by Open-Meteo.</p>
      </footer>
    </div>
  );
};

export default App;
