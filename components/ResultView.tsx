
import React from 'react';
import { City, GameMode, MonthlyClimateData, UserPinGuess } from '../types';
import Climograph from './Climograph';
import Button from './Button';
import { formatClimateDataForChart } from '../utils/helpers';
import MapDisplay, { MapPin } from './MapDisplay';

interface ResultViewProps {
  targetCity: City;
  targetClimateData: MonthlyClimateData;
  userPinGuess?: UserPinGuess;
  userGuessedCity?: City; // For choice mode
  userGuessedClimateData?: MonthlyClimateData; // Climate data for user's guess
  score: number;
  onNextQuestion: () => void;
  gameMode: GameMode; 
  isChallengeIntermediate?: boolean; // New prop for brief display
  currentChallengeQuestionNumber?: number; // For "Question X/Y Result"
  totalChallengeQuestions?: number; 
}

const ResultView: React.FC<ResultViewProps> = ({
  targetCity,
  targetClimateData,
  userPinGuess,
  userGuessedCity,
  userGuessedClimateData,
  score,
  onNextQuestion,
  gameMode,
  isChallengeIntermediate = false,
  currentChallengeQuestionNumber,
  totalChallengeQuestions,
}) => {
  const targetChartData = formatClimateDataForChart(targetClimateData);
  const userChartData = userGuessedClimateData ? formatClimateDataForChart(userGuessedClimateData) : null;

  const mapPins: MapPin[] = [];
  let mapCenter: [number, number] = [targetCity.latitude, targetCity.longitude];
  let mapZoom = 6;

  if (targetCity) {
    mapPins.push({
      latitude: targetCity.latitude,
      longitude: targetCity.longitude,
      popupText: `Correct: ${targetCity.name}`,
    });
  }

  if (gameMode === GameMode.PIN && userPinGuess) {
     mapPins.push({
      latitude: userPinGuess.latitude,
      longitude: userPinGuess.longitude,
      popupText: `Your Guess (Score: ${score}%)`,
    });
    if (targetCity) {
        const avgLat = (targetCity.latitude + userPinGuess.latitude) / 2;
        const avgLng = (targetCity.longitude + userPinGuess.longitude) / 2;
        mapCenter = [avgLat, avgLng];
        const latDiff = Math.abs(targetCity.latitude - userPinGuess.latitude);
        const lngDiff = Math.abs(targetCity.longitude - userPinGuess.longitude);
        if (latDiff > 40 || lngDiff > 40) mapZoom = 1;
        else if (latDiff > 20 || lngDiff > 20) mapZoom = 2;
        else if (latDiff > 10 || lngDiff > 10) mapZoom = 3;
        else if (latDiff > 5 || lngDiff > 5) mapZoom = 4;
        else mapZoom = 5;
    }
  } else if (gameMode === GameMode.CHOICE && userGuessedCity) {
    if (userGuessedCity.name !== targetCity.name || userGuessedCity.country !== targetCity.country) {
       mapPins.push({
        latitude: userGuessedCity.latitude,
        longitude: userGuessedCity.longitude,
        popupText: `Your Choice: ${userGuessedCity.name} (Score: ${score}%)`,
      });
       const avgLat = (targetCity.latitude + userGuessedCity.latitude) / 2;
       const avgLng = (targetCity.longitude + userGuessedCity.longitude) / 2;
       mapCenter = [avgLat, avgLng];
       const latDiff = Math.abs(targetCity.latitude - userGuessedCity.latitude);
       const lngDiff = Math.abs(targetCity.longitude - userGuessedCity.longitude);
       if (latDiff > 40 || lngDiff > 40) mapZoom = 1;
       else if (latDiff > 20 || lngDiff > 20) mapZoom = 2;
       else if (latDiff > 10 || lngDiff > 10) mapZoom = 3;
       else if (latDiff > 5 || lngDiff > 5) mapZoom = 4;
       else mapZoom = 5;
    }
  }
   // For challenge mode, we might also want to show the guess pin if it's the brief result
  if (gameMode === GameMode.CHALLENGE && userPinGuess) {
      mapPins.push({
        latitude: userPinGuess.latitude,
        longitude: userPinGuess.longitude,
        popupText: `Your Guess (Score: ${score}%)`,
      });
       if (targetCity) {
        // Center map between target and guess for challenge intermediate result too.
        const avgLat = (targetCity.latitude + userPinGuess.latitude) / 2;
        const avgLng = (targetCity.longitude + userPinGuess.longitude) / 2;
        mapCenter = [avgLat, avgLng];
        const latDiff = Math.abs(targetCity.latitude - userPinGuess.latitude);
        const lngDiff = Math.abs(targetCity.longitude - userPinGuess.longitude);
        if (latDiff > 40 || lngDiff > 40) mapZoom = 1;
        else if (latDiff > 20 || lngDiff > 20) mapZoom = 2;
        else if (latDiff > 10 || lngDiff > 10) mapZoom = 3;
        else if (latDiff > 5 || lngDiff > 5) mapZoom = 4;
        else mapZoom = 5;
    }
  }


  const resultTitle = isChallengeIntermediate && currentChallengeQuestionNumber && totalChallengeQuestions 
    ? `Challenge Question ${currentChallengeQuestionNumber}/${totalChallengeQuestions} Result`
    : "Results";

  return (
    <div className="space-y-6 p-4 md:p-8 bg-white rounded-xl shadow-2xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800">{resultTitle}</h2>
      
      <div className="text-center p-4 rounded-lg bg-indigo-50 border border-indigo-200">
        <p className="text-lg text-gray-700">The correct city was: 
          <strong className="text-indigo-600"> {targetCity.name}, {targetCity.country}</strong>
        </p>
        <p className="text-2xl font-semibold mt-1">
          {isChallengeIntermediate ? "Score for this question: " : "Your Score: "}
          <span className={score > 70 ? "text-green-500" : score > 40 ? "text-yellow-500" : "text-red-500"}>
            {score}%
          </span>
        </p>
      </div>

      {!isChallengeIntermediate && (
        <>
          {gameMode === GameMode.PIN && userPinGuess && (
            <p className="text-center text-gray-600">
              Your pin: Lat {userPinGuess.latitude.toFixed(2)}, Lon {userPinGuess.longitude.toFixed(2)}
            </p>
          )}
           {/* In challenge mode, the userPinGuess is relevant if shown */}
          {gameMode === GameMode.CHALLENGE && userPinGuess && (
             <p className="text-center text-gray-600">
              Your pin: Lat {userPinGuess.latitude.toFixed(2)}, Lon {userPinGuess.longitude.toFixed(2)}
            </p>
          )}
          {gameMode === GameMode.CHOICE && userGuessedCity && (
            <p className="text-center text-gray-600">
              You chose: {userGuessedCity.name}, {userGuessedCity.country}
            </p>
          )}

          <div className="h-80 md:h-96 w-full border border-gray-300 rounded-lg overflow-hidden my-4">
            <MapDisplay center={mapCenter} zoom={mapZoom} pins={mapPins} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-2">Correct City's Climograph</h3>
              <Climograph data={targetChartData} />
            </div>
            {userChartData && (gameMode === GameMode.PIN || gameMode === GameMode.CHALLENGE || (gameMode === GameMode.CHOICE && userGuessedCity?.name !== targetCity.name)) && (
              <div>
                <h3 className="text-xl font-semibold text-center text-gray-700 mb-2">
                  {(gameMode === GameMode.PIN || gameMode === GameMode.CHALLENGE) ? "Your Pinned Location's Climograph" : "Your Chosen City's Climograph"}
                </h3>
                <Climograph data={userChartData} />
              </div>
            )}
          </div>
        </>
      )}
      
      {isChallengeIntermediate && gameMode === GameMode.CHALLENGE && userPinGuess && (
         <div className="h-60 md:h-80 w-full border border-gray-300 rounded-lg overflow-hidden my-4">
            <MapDisplay center={mapCenter} zoom={mapZoom} pins={mapPins} />
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-2">Correct City's Climograph</h3>
              <Climograph data={targetChartData} />
            </div>
         <div>
                <h3 className="text-xl font-semibold text-center text-gray-700 mb-2">
                  {(gameMode === GameMode.PIN || gameMode === GameMode.CHALLENGE) ? "Your Pinned Location's Climograph" : "Your Chosen City's Climograph"}
                </h3>
                <Climograph data={userChartData} />
              </div>
      )}


      <Button onClick={onNextQuestion} size="lg" className="w-full md:w-auto block mx-auto mt-8">
        {isChallengeIntermediate ? "Next Question →" : 
         (gameMode === GameMode.CHALLENGE && currentChallengeQuestionNumber === totalChallengeQuestions) ? "View Final Summary →" : "Next Question →"}
      </Button>
    </div>
  );
};

export default ResultView;
