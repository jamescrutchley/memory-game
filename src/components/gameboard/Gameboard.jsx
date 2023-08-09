import { Card } from "./card";
import PropTypes from "prop-types";

export function Gameboard({ cardArray = null, onClick, gameover, reset }) {
  const cardPanel = () => {
    return (
      <div className="gameboard">
        {gameover ? (
            <>
          <p>Game Over!</p>
          <button onClick={reset}>Play Again</button>
            </>

        ) : (
          <ul>
            {cardArray !== null ? (
              cardArray.map((card, index) => (
                <li key={index}>
                  <Card
                    onClick={onClick}
                    value={card.value}
                    alt={card.alt}
                    selected={card.selected === true ? "selected" : "unselected"}
                  />
                </li>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        )}
      </div>
    );
  };

  return cardPanel();
}

Gameboard.propTypes = {
  cardArray: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
  gameover: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};
