import PropTypes from 'prop-types'; // ES6


export function Card({ value, alt, selected, onClick }) {

    return (
        <div onClick={() => onClick(value)} className={`card ${selected}`}>
            <div className="card-content">
                {value}
            </div>
            <div className="card-footer">
                {alt}
            </div>
        </div>
    )
}


Card.propTypes = {
    value: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    selected: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };