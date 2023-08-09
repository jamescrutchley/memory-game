import PropTypes from 'prop-types'; // ES6


export function Card({ value, alt }) {

    return (
        <div className="card">
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
    alt: PropTypes.string.isRequired
  };