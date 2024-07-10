import React from 'react';
import '../componentStyles/MovieCard.css';
import PropTypes from 'prop-types';
import fullTomato from '../img/full-tomato.png';
import halfTomato from '../img/half-tomato.png';

const MovieCard = ({ title, img, id, average_rating, onClick }) => {

  const fullTomatoes = Math.floor(average_rating / 2); 
  const halfTomatoes = average_rating % 2 >= 1 ? 1 : 0;

  const tomatoes = [];
  for (let i = 0; i < fullTomatoes; i++) {
    tomatoes.push(<img key={i} src={fullTomato} className="tomato-icon" alt="Full Tomato" />);
  }
  if (halfTomatoes) {
    tomatoes.push(<img key={fullTomatoes} src={halfTomato} className="tomato-icon" alt="Half Tomato" />);
  }

  return (
    <div className='movie_card' onClick={() => onClick(id)}>
      <img src={img} className="movie_card_image" alt={`${title} poster`} />
      <div className="movie_card_info">
        <h3 className="movie_card_title">{title}</h3>
        <div className="movie_card_rating">
          {tomatoes}
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  average_rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieCard;