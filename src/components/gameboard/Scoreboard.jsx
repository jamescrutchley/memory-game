import PropTypes from 'prop-types'; // ES6

export function Scoreboard({ scores }) {

    const [highscore, currentscore] = scores;

    return (
        <div className="scoreboard">
            <div>Current Score: {currentscore}</div>
            <div>High Score: {highscore} </div>
        </div>
    )
}

Scoreboard.propTypes = {
    scores: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};
