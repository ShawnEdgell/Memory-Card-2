import PropTypes from 'prop-types';
import { useState } from 'react'; // Import useState

function DifficultySelectionModal({ onSelectDifficulty }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleSelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    onSelectDifficulty(difficulty); // Pass the selected difficulty to the parent component
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select a Difficulty</h2>
        <button
          className={`easy-button ${selectedDifficulty === 5 ? 'selected' : ''}`}
          onClick={() => handleSelect(5)}
        >
          Easy
        </button>
        <button
          className={`medium-button ${selectedDifficulty === 10 ? 'selected' : ''}`}
          onClick={() => handleSelect(10)}
        >
          Medium
        </button>
        <button
          className={`hard-button ${selectedDifficulty === 20 ? 'selected' : ''}`}
          onClick={() => handleSelect(20)}
        >
          Hard
        </button>
      </div>
    </div>
  );
}

DifficultySelectionModal.propTypes = {
  onSelectDifficulty: PropTypes.func.isRequired,
};

export default DifficultySelectionModal;
