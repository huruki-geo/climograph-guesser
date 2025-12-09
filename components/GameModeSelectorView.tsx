import React from 'react';
import { GameMode } from '../types';
import Button from './Button';

interface GameModeSelectorViewProps {
  onSelectMode: (mode: GameMode) => void;
}

const GameModeSelectorView: React.FC<GameModeSelectorViewProps> = ({ onSelectMode }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-2xl space-y-8 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome to Climograph Guesser!</h2>
      <p className="text-gray-600 text-center mb-8">
        Guess the city based on its climate data. Choose your challenge:
      </p>
      
      {/* Game Mode Buttons */}
      <div className="grid grid-cols-1 gap-6 w-full">
        <Button 
          onClick={() => onSelectMode(GameMode.PIN)} 
          size="lg"
          className="w-full transform hover:scale-105 transition-transform"
        >
          <span role="img" aria-label="pin" className="mr-2">📍</span> Pin on Map Mode (Single Question)
        </Button>
        <Button 
          onClick={() => onSelectMode(GameMode.CHOICE)} 
          size="lg"
          variant="secondary"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white focus:ring-teal-400 transform hover:scale-105 transition-transform"
        >
          <span role="img" aria-label="list" className="mr-2">📝</span> Multiple Choice Mode (Single Question)
        </Button>
        <Button
          onClick={() => onSelectMode(GameMode.CHALLENGE)}
          size="lg"
          variant="primary"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500 transform hover:scale-105 transition-transform"
        >
          <span role="img" aria-label="trophy" className="mr-2">🏆</span> Challenge Mode (5 Questions Pin on Map)
        </Button>
      </div>

       <p className="text-sm text-gray-500 mt-8 text-center">
        Test your knowledge of world climates!
      </p>
      
      <div className="text-center">
        <a href='https://climo.statplay.site/about' className="text-blue-500 hover:underline">About</a>
      </div>

      {/* Educational & SEO Optimized Section */}
      <section 
        className="w-full mt-6 pt-6 border-t border-gray-200 text-left"
        aria-label="Educational guide on reading climographs"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-3">Understanding Climographs</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          A <strong>climograph</strong> (or climate graph) is a fundamental tool in <strong>geography</strong> and <strong>meteorology</strong> used to visualize a location's climate patterns. It combines two datasets to reveal the local biome:
        </p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-start p-2 bg-red-50 rounded-lg">
            <span className="text-xl mr-3" role="img" aria-label="thermometer">🌡️</span>
            <div>
              <p className="text-sm font-bold text-red-700">Temperature (Line Graph)</p>
              <p className="text-xs text-gray-700">
                The red line shows average monthly temperatures. The curve's shape indicates the <strong>hemisphere</strong> (peaks in July = Northern) and <strong>seasonality</strong>.
              </p>
            </div>
          </div>
          
          <div className="flex items-start p-2 bg-blue-50 rounded-lg">
            <span className="text-xl mr-3" role="img" aria-label="droplet">💧</span>
            <div>
              <p className="text-sm font-bold text-blue-700">Precipitation (Bar Chart)</p>
              <p className="text-xs text-gray-700">
                Blue bars represent total monthly rainfall. This helps identify <strong>wet/dry seasons</strong> and distinguishes deserts from rainforests.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 italic border-l-4 border-gray-300 pl-2">
          <strong>Tip:</strong> Use these clues to deduce the Köppen climate classification and pinpoint the city on the world map!
        </p>
      </section>

    </div>
  );
};

export default GameModeSelectorView;
