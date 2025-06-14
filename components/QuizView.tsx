
import React, { useState } from 'react';
import L from 'leaflet'; // Import Leaflet
import { City, GameMode, MonthlyClimateData, QuizQuestion, UserPinGuess } from '../types';
import Climograph from './Climograph';
import MapDisplay, { MapPin } from './MapDisplay';
import Button from './Button';
import { formatClimateDataForChart } from '../utils/helpers';
import LoadingSpinner from './LoadingSpinner';

interface QuizViewProps {
  question: QuizQuestion;
  gameMode: GameMode;
  onPinGuess: (guess: UserPinGuess) => void;
  onChoiceGuess: (city: City) => void;
  isSubmitting: boolean;
  currentChallengeQuestionNumber?: number; // For Challenge Mode
  totalChallengeQuestions?: number;    // For Challenge Mode
}

const QuizView: React.FC<QuizViewProps> = ({ 
  question, 
  gameMode, 
  onPinGuess, 
  onChoiceGuess, 
  isSubmitting,
  currentChallengeQuestionNumber,
  totalChallengeQuestions 
}) => {
  const { targetCity, targetClimateData, options } = question;
  const chartData = formatClimateDataForChart(targetClimateData);
  const [selectedPin, setSelectedPin] = useState<UserPinGuess | null>(null);

  const handleMapClick = (lat: number, lng: number) => {
    // Normalize longitude to the -180 to 180 range.
    const wrappedLatLng = L.latLng(lat, lng).wrap();
    setSelectedPin({ latitude: wrappedLatLng.lat, longitude: wrappedLatLng.lng });
  };

  const handleSubmitPinGuess = () => {
    if (selectedPin) {
      onPinGuess(selectedPin);
    }
  };

  if (isSubmitting && (gameMode !== GameMode.CHALLENGE || currentChallengeQuestionNumber === undefined)) { // Show general loading spinner if not challenge or challenge initial load
    return <LoadingSpinner />;
  }


  const mapPins: MapPin[] = selectedPin ? [{ latitude: selectedPin.latitude, longitude: selectedPin.longitude, color: 'blue' }] : [];
  
  const isPinModeActive = gameMode === GameMode.PIN || gameMode === GameMode.CHALLENGE;

  return (
    <div className="space-y-6 p-4 md:p-6 bg-gray-50 rounded-lg shadow-xl">
      <div className="text-center">
        {gameMode === GameMode.CHALLENGE && currentChallengeQuestionNumber && totalChallengeQuestions && (
          <p className="text-lg font-semibold text-purple-600 mb-2">
            Challenge Question {currentChallengeQuestionNumber}/{totalChallengeQuestions}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-gray-700">Guess the City!</h2>
        <p className="text-gray-600">Analyze the climograph below and make your guess.</p>
      </div>
      
      <div className="w-full max-w-3xl mx-auto">
        <Climograph data={chartData} />
      </div>

      {isPinModeActive && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-center text-gray-700">Pin your guess on the map:</h3>
          <div className="h-96 md:h-[500px] w-full border border-gray-300 rounded-lg overflow-hidden">
            <MapDisplay center={[20, 0]} zoom={2} onClick={handleMapClick} pins={mapPins} />
          </div>
          {selectedPin && (
            <p className="text-center text-sm text-gray-600">
              Selected: Lat {selectedPin.latitude.toFixed(2)}, Lon {selectedPin.longitude.toFixed(2)}
            </p>
          )}
          <Button 
            onClick={handleSubmitPinGuess} 
            disabled={!selectedPin || isSubmitting}
            className="w-full md:w-auto block mx-auto"
            size="lg"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Pin Guess'}
          </Button>
        </div>
      )}

      {gameMode === GameMode.CHOICE && options && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-center text-gray-700">Choose the correct city:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {options.map(city => (
              <Button 
                key={`${city.name}-${city.country}`} 
                onClick={() => onChoiceGuess(city)}
                variant="secondary"
                className="w-full text-left justify-start py-3 px-4 bg-white hover:bg-indigo-100 border border-indigo-200 text-indigo-700"
                disabled={isSubmitting}
              >
                {city.name}, {city.country}
              </Button>
            ))}
          </div>
        </div>
      )}
      {isSubmitting && gameMode === GameMode.CHALLENGE && <div className="pt-4"><LoadingSpinner/></div>}
    </div>
  );
};

export default QuizView;
