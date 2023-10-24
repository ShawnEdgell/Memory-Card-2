import PropTypes from 'prop-types';

// In Card.jsx
const Card = ({ character, onCardClick }) => {
    return (
        <div className="card" onClick={onCardClick}>
            <img src={character.image} alt={character.name} />
            <div className="character-name">
                <h4>{character.name}</h4>
            </div>
        </div>
    );
};

Card.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // Add other properties of the character object here if you're using them
  }).isRequired,
  onCardClick: PropTypes.func.isRequired  // This line validates onCardClick as a required function prop
};

export default Card;
