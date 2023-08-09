import { Card } from "./card";
import { Scoreboard } from "./scoreboard";
import PropTypes from 'prop-types'; // ES6


export function Gameboard({ cardArray, scores }) {
  const cardPanel = () => {
    return (
      <ul>
        {cardArray.map((card, index) => (
            <li key={index}>
                <Card value={card.value} alt={card.alt} />
            </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="gameboard">
      {cardPanel()}
    </div>
  );
}

Gameboard.propTypes = {
    cardArray: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        alt: PropTypes.string.isRequired
      })
    ).isRequired
  };
