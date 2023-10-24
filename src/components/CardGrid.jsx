import { useState, useEffect } from 'react';
import { fetchCharacters } from '../utils/api';
import Card from './Card';
import shuffle from '../utils/shuffle';
import Scoreboard from './Scoreboard';

const DIFFICULTIES = {
    EASY: 5,
    MEDIUM: 10,
    HARD: 20,
};

const CardGrid = () => {
    const [characters, setCharacters] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [difficulty, setDifficulty] = useState(DIFFICULTIES.HARD);
    
    const TARGET_SCORE = difficulty;  // Matches the number of cards

    useEffect(() => {
        const getCharacters = async () => {
            const fetchedCharacters = await fetchCharacters();
            setCharacters(fetchedCharacters.slice(0, difficulty));
        };

        getCharacters();
    }, [difficulty]);

    const handleCardClick = (characterId) => {
        if (clickedCards.includes(characterId)) {
            if (currentScore > bestScore) {
                setBestScore(currentScore);
            }
            setCurrentScore(0);
            setClickedCards([]);
            alert('You lost!');
        } else {
            setClickedCards(prevCards => [...prevCards, characterId]);
            setCurrentScore(prevScore => prevScore + 1);
            
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

    return (
        <div>
            <div>
                <button id="easy-button" onClick={() => setDifficulty(DIFFICULTIES.EASY)}>Easy</button>
                <button id="medium-button" onClick={() => setDifficulty(DIFFICULTIES.MEDIUM)}>Medium</button>
                <button id="hard-button" onClick={() => setDifficulty(DIFFICULTIES.HARD)}>Hard</button>
            </div>
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
            <div className="card-grid">
                {characters.map(character => (
                    <Card key={character.id} character={character} onCardClick={() => handleCardClick(character.id)} />
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
