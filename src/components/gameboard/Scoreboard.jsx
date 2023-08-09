import PropTypes from 'prop-types'; // ES6

export function Scoreboard({ scores }) {

    const [currentscore, highscore] = scores;

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
