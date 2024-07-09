import React from 'react';
import '../componentStyles/MovieCard.css';
import PropTypes from 'prop-types';

const MovieCard = ({ title, img, id, onClick }) => {
  return (
    <div className='movie_card' onClick={() => onClick(id)}>
      <img src={img} className="movie_card_image" alt={`${title} poster`} />
      <div className="movie_card_info">
        <h3 className="movie_card_title">{title}</h3>
        <p>Rating Here</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieCard;