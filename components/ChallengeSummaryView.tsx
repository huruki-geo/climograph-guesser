
import React, { useState } from 'react';
import { ChallengeAnswerResult } from '../types';
import Button from './Button';
import { SCORE_RANKS, NUMBER_OF_QUESTIONS_IN_CHALLENGE } from '../constants';

interface ChallengeSummaryViewProps {
  results: ChallengeAnswerResult[];
  totalScore: number;
  onTryAgain: () => void;
  onBackToModes: () => void;
}

const ChallengeSummaryView: React.FC<ChallengeSummaryViewProps> = ({ results, totalScore, onTryAgain, onBackToModes }) => {
  const [copyStatusMessage, setCopyStatusMessage] = useState<string>('');

  const getRank = () => {
    for (const rank of SCORE_RANKS) {
      if (totalScore >= rank.minScore && totalScore <= rank.maxScore) {
        return rank;
      }
    }
    return SCORE_RANKS[SCORE_RANKS.length - 1]; // Default to lowest rank
  };

  const rank = getRank();
  const maxPossibleScore = NUMBER_OF_QUESTIONS_IN_CHALLENGE * 100;

  const copyToClipboard = (text: string) => {
    setCopyStatusMessage(''); // Reset message
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      console.warn('Clipboard API not available.');
      setCopyStatusMessage('Clipboard API not available in your browser.');
      alert('Failed to copy score. Please try manually. (Clipboard API not available)');
      return;
    }

    console.log('Secure context for clipboard:', window.isSecureContext);
    if (!window.isSecureContext) {
      console.warn('Clipboard write access denied: Not a secure context (HTTPS needed).');
    }

    navigator.clipboard.writeText(text).then(() => {
      console.log('Score and link copied to clipboard!');
      setCopyStatusMessage('Score copied to clipboard!');
      alert('Score and link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text to clipboard:', err);
      let alertMsg = 'Failed to copy score. Please try manually.';
      if (!window.isSecureContext) {
        alertMsg += ' (Ensure you are on a secure HTTPS connection for clipboard access.)';
      } else {
        alertMsg += ` (Error: ${err.name})`;
      }
      setCopyStatusMessage(alertMsg);
      alert(alertMsg);
    });
  };

  const handleShare = async () => {
    setCopyStatusMessage(''); // Reset message
    const shareText = `🌍 I scored ${totalScore} out of ${maxPossibleScore} in the Climograph Guesser 5-Question Challenge! My rank was “${rank.name} ${rank.emoji}”. Try it yourself! #ClimographGuesser`;
    
    let shareUrl = window.location.href;
    console.log('Attempting to share URL:', shareUrl);

    const shareData: ShareData = {
      title: 'Climograph Guesser Challenge Result',
      text: shareText,
    };

    try {
      // Validate and add URL only if it's valid
      new URL(shareUrl); // This will throw if shareUrl is not a valid absolute URL
      shareData.url = shareUrl;
    } catch (e) {
      console.warn('`window.location.href` is not a valid URL for sharing, omitting URL from share data. Error:', e);
      // shareUrl is invalid, so don't include it in shareData.
      // The share API might still work with only title and text.
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Successfully shared');
      } catch (error) {
        console.error('Error sharing using navigator.share:', error);
        // Fallback to clipboard if share fails or is cancelled
        // Log the error name for more specific feedback, e.g. NotAllowedError, AbortError
        if (error instanceof Error && (error.name === "AbortError" || error.name === "NotAllowedError")) {
            setCopyStatusMessage(`Share cancelled or not allowed. Try copying instead.`);
        } else {
            setCopyStatusMessage('Sharing failed. Try copying the score instead.');
        }
        // Always offer clipboard as fallback
        copyToClipboard(shareText + (shareData.url ? ' ' + shareData.url : ''));
      }
    } else {
      console.log('Web Share API not available. Falling back to clipboard.');
      copyToClipboard(shareText + (shareData.url ? ' ' + shareData.url : ''));
    }
  };


  return (
    <div className="p-6 md:p-10 bg-white rounded-xl shadow-2xl max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">Challenge Complete!</h2>
      
      <div className="mb-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
        <p className="text-xl text-gray-700 mb-2">Your Total Score:</p>
        <p className="text-5xl font-extrabold text-purple-600 mb-3">
          {totalScore} <span className="text-3xl text-gray-500">/ {maxPossibleScore}</span>
        </p>
        <p className="text-2xl font-semibold">
          Your Rank: <span className="text-purple-600">{rank.name} {rank.emoji}</span>
        </p>
      </div>

      <div className="mb-8 space-y-3">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Question Breakdown:</h3>
        {results.map(result => (
          <div key={result.questionNumber} className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-sm">
            <span className="text-gray-700 font-medium">
              Q{result.questionNumber}: {result.targetCity.name}, {result.targetCity.country}
            </span>
            <span className={`font-bold px-3 py-1 rounded-full text-sm ${result.score > 70 ? "bg-green-100 text-green-700" : result.score > 40 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
              {result.score}%
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button onClick={onTryAgain} size="lg" variant="primary" className="w-full bg-purple-600 hover:bg-purple-700">
          🏆 Try Challenge Again
        </Button>
        <Button onClick={handleShare} size="lg" variant="secondary" className="w-full">
          <span role="img" aria-label="share" className="mr-2">🔗</span> Share Score
        </Button>
      </div>
      {copyStatusMessage && <p className="text-sm text-gray-600 mt-3">{copyStatusMessage}</p>}
      <Button onClick={onBackToModes} size="md" variant="secondary" className="w-full sm:w-auto mt-6 text-gray-600 hover:text-gray-800">
        Back to Mode Selection
      </Button>
    </div>
  );
};

export default ChallengeSummaryView;
