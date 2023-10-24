import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Scoreboard = ({ currentScore, bestScore }) => {
  const [animateCurrentScore, setAnimateCurrentScore] = useState(false);
  const [animateBestScore, setAnimateBestScore] = useState(false);

  useEffect(() => {
    setAnimateCurrentScore(true);
    setTimeout(() => setAnimateCurrentScore(false), 300); // animation duration
  }, [currentScore]);

  useEffect(() => {
    setAnimateBestScore(true);
    setTimeout(() => setAnimateBestScore(false), 300); // animation duration
  }, [bestScore]);

  return (
    <div className="scoreboard">
      <div className={`current-score ${animateCurrentScore ? 'animate-score' : ''}`}>
        Current Score: {currentScore}
      </div>
      <div className={`best-score ${animateBestScore ? 'animate-score' : ''}`}>
        Best Score: {bestScore}
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default Scoreboard;
