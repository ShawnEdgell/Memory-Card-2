import { useState, useEffect } from 'react';
import { fetchCharacters } from '../utils/api';
import Card from './Card';
import shuffle from '../utils/shuffle';
import Scoreboard from './Scoreboard';
import PropTypes from 'prop-types';

const DIFFICULTIES = {
  EASY: 5,
  MEDIUM: 10,
  HARD: 20,
};

const CardGrid = ({ difficulty }) => {
  const [characters, setCharacters] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // Define setDifficulty as part of the component's state
  const [selectedDifficulty, setDifficulty] = useState(difficulty);

  const TARGET_SCORE = selectedDifficulty; // Matches the number of cards

  useEffect(() => {
    const getCharacters = async () => {
      const fetchedCharacters = await fetchCharacters();
      setCharacters(fetchedCharacters.slice(0, selectedDifficulty));
    };

    getCharacters();
  }, [selectedDifficulty]);

  const handleCardClick = (characterId) => {
    if (clickedCards.includes(characterId)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setClickedCards([]);
      alert('You lost!');
    } else {
      setClickedCards((prevCards) => [...prevCards, characterId]);
      setCurrentScore((prevScore) => prevScore + 1);

      if (currentScore + 1 === TARGET_SCORE) {
        alert('You Win!');
        if (currentScore + 1 > bestScore) {
          setBestScore(currentScore + 1);
        }
        setCurrentScore(0);
        setClickedCards([]);
      }

      const shuffledCharacters = shuffle(characters);
      setCharacters(shuffledCharacters);
    }
  };

  CardGrid.propTypes = {
    difficulty: PropTypes.number.isRequired, // Assuming `difficulty` is a number
  };

  return (
    <div>
      <div>
        <label htmlFor="difficulty">Mode: </label>
        <select
          id="difficulty"
          value={selectedDifficulty}
          onChange={(e) => setDifficulty(Number(e.target.value))}
        >
          <option value={DIFFICULTIES.EASY}>Easy</option>
          <option value={DIFFICULTIES.MEDIUM}>Medium</option>
          <option value={DIFFICULTIES.HARD}>Hard</option>
        </select>
        </div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} difficulty={String(selectedDifficulty)} />
      <div className="card-grid">
        {characters.map((character) => (
          <Card key={character.id} character={character} onCardClick={() => handleCardClick(character.id)} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
