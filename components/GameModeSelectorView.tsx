
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
        Guess the city based on its climate data and dive into a fun, interactive climate-geography challenge. Explore real-world temperature and precipitation patterns, test your knowledge of global climates, and see how well you recognize weather trends from cities around the world. Whether you love geography quizzes, climate science, or travel trivia, this climate-graph guessing game lets you sharpen your skills while discovering the unique environmental signatures of different regions. Choose your challenge level and start identifying cities from their climate data today.
        Test your knowledge of world climates!
      </p>
      <a href='https://climo.statplay.site/about'>About</a>
    </div>
  );
};

export default GameModeSelectorView;
