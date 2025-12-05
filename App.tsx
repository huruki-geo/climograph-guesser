
import React, { useState, useEffect, useCallback } from 'react';
import { City, GameMode, GameState, MonthlyClimateData, QuizQuestion, UserPinGuess, ChallengeAnswerResult } from './types';
import { NUMBER_OF_CHOICES, NUMBER_OF_QUESTIONS_IN_CHALLENGE } from './constants';
import { fetchClimateData } from './services/climateService';
import { getRandomCity, getCityOptions } from './services/cityService';
import { computeClimateSimilarity } from './utils/helpers';

import LoadingSpinner from './components/LoadingSpinner';
import GameModeSelectorView from './components/GameModeSelectorView';
import QuizView from './components/QuizView';
import ResultView from './components/ResultView';
import ChallengeSummaryView from './components/ChallengeSummaryView'; // New component
import Button from './components/Button';
import "./index.css";

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.SELECT_MODE);
  const [gameMode, setGameMode] = useState<GameMode | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [userPinGuess, setUserPinGuess] = useState<UserPinGuess | null>(null);
  const [userGuessedCity, setUserGuessedCity] = useState<City | null>(null);
  const [userGuessedClimateData, setUserGuessedClimateData] = useState<MonthlyClimateData | null>(null);
  const [score, setScore] = useState<number>(0); // Score for the current question
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

  const loadNewQuestion = useCallback(async (mode: GameMode) => {
    setIsLoading(true);
    setError(null);
    setUserPinGuess(null);
    setUserGuessedCity(null);
    setUserGuessedClimateData(null);
    
    let cityToExclude: City | undefined = undefined;
    if (mode === GameMode.CHALLENGE && challengeResultsList.length > 0) {
        // Exclude cities already used in the current challenge
        // This is a simplified exclusion, could be more robust
        cityToExclude = challengeResultsList[challengeResultsList.length -1].targetCity;
    } else if (mode !== GameMode.CHALLENGE) {
        cityToExclude = currentQuestion?.targetCity;
    }


    const MAX_ATTEMPTS = 5; // Increased attempts for challenge mode diversity
    let attempts = 0;
    let questionLoaded = false;
    const failedCitiesThisAttempt: City[] = [];
    // For challenge mode, also exclude cities already shown in this challenge run.
    const challengeAttemptExclusions = mode === GameMode.CHALLENGE ? challengeResultsList.map(r => r.targetCity) : [];


    while (!questionLoaded && attempts < MAX_ATTEMPTS) {
      attempts++;
      const cityToTry = getRandomCity(cityToExclude, [...failedCitiesThisAttempt, ...challengeAttemptExclusions]);

      if (!cityToTry) {
        console.warn(`Attempt ${attempts}: Failed to get a new city to try.`);
        break; 
      }
      
      const targetClimateData = await fetchClimateData(cityToTry.latitude, cityToTry.longitude);

      if (targetClimateData) {
        let options: City[] | undefined;
        if (mode === GameMode.CHOICE) { // Only for CHOICE mode, not CHALLENGE
          options = getCityOptions(cityToTry, NUMBER_OF_CHOICES);
        }
        setCurrentQuestion({ targetCity: cityToTry, targetClimateData, options });
        setGameMode(mode); // Set gameMode here after successful load
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
    
    setIsLoading(false);
  }, [currentQuestion?.targetCity, challengeResultsList]);

  const handleModeSelect = (mode: GameMode) => {
    setGameMode(mode); // Set game mode immediately
    if (mode === GameMode.CHALLENGE) {
      resetChallengeState();
      // setCurrentChallengeQuestionNumber(1); // loadNewQuestion will increment this to 1
      loadNewQuestion(mode);
    } else {
      resetChallengeState(); // Ensure challenge state is clear if switching to other modes
      loadNewQuestion(mode);
    }
  };
  
  const processAndShowResult = useCallback((
    calculatedScore: number, 
    guessedClimateData: MonthlyClimateData | null
  ) => {
    setScore(calculatedScore); // This is current question's score
    setUserGuessedClimateData(guessedClimateData);
    
    if (gameMode === GameMode.CHALLENGE && currentQuestion) {
      const result: ChallengeAnswerResult = {
        questionNumber: currentChallengeQuestionNumber,
        targetCity: currentQuestion.targetCity,
        score: calculatedScore,
        userPinGuess: userPinGuess || undefined, // Store user's pin for this question
      };
      setChallengeResultsList(prev => [...prev, result]);
      setChallengeTotalScore(prev => prev + calculatedScore);
    }
    setGameState(GameState.RESULT);
    setIsSubmitting(false);
  }, [gameMode, currentQuestion, currentChallengeQuestionNumber, userPinGuess]);

  const handlePinGuess = async (guess: UserPinGuess) => {
    if (!currentQuestion || !currentQuestion.targetClimateData) return;
    setIsSubmitting(true);
    setUserPinGuess(guess); // Set this early so it's available in processAndShowResult
    const guessedClimateData = await fetchClimateData(guess.latitude, guess.longitude);
    const calculatedScore = computeClimateSimilarity(
        currentQuestion.targetClimateData, 
        guessedClimateData || { temperature: Array(12).fill(0), precipitation: Array(12).fill(0) }
    );
    processAndShowResult(calculatedScore, guessedClimateData);
  };

  const handleChoiceGuess = async (city: City) => {
    if (!currentQuestion || !currentQuestion.targetClimateData) return;
    setIsSubmitting(true);
    setUserGuessedCity(city);
    
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
  };

  const handleNextQuestion = () => {
    if (gameMode === GameMode.CHALLENGE) {
      if (currentChallengeQuestionNumber < NUMBER_OF_QUESTIONS_IN_CHALLENGE) {
        loadNewQuestion(GameMode.CHALLENGE);
      } else {
        setGameState(GameState.CHALLENGE_SUMMARY);
      }
    } else { // For PIN or CHOICE mode
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
        return <div className="flex justify-center items-center h-screen"><LoadingSpinner /></div>; // Fallback if question not ready
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
        {renderContent()}
      </main>
      <footer className="w-full max-w-5xl mx-auto mt-12 text-center text-gray-500 text-sm pb-4">
        <p>&copy; {new Date().getFullYear()} Climograph Guesser. Powered by Open-Meteo.</p>
      </footer>
    </div>
  );
};

export default App;
