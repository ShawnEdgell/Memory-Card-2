import { useState, useEffect } from 'react';
import { fetchCharacters } from '../utils/api';
import Card from './Card';

const CardGrid = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const fetchedCharacters = await fetchCharacters();
      setCharacters(fetchedCharacters);
    };

    getCharacters();
  }, []);

  return (
    <div className="card-grid">
      {characters.map(character => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CardGrid;

