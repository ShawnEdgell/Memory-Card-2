import PropTypes from 'prop-types';

const Card = ({ character }) => {
    return (
      <div className="card">
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        {/* Add other details if needed */}
      </div>
    );
};

Card.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // Add other properties of the character object here if you're using them
  }).isRequired,
};

export default Card;
