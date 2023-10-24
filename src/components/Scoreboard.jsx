import PropTypes from 'prop-types';

function Scoreboard({ currentScore, bestScore }) {
    return (
        <div className="scoreboard">
            <p>Current Score: {currentScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    );
}

Scoreboard.propTypes = {
    currentScore: PropTypes.number.isRequired,
    bestScore: PropTypes.number.isRequired
};

export default Scoreboard;
