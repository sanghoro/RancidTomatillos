import React from 'react';
import PropTypes from 'prop-types';
// import './MovieDetails.css';

const MovieDetails = ({ movie, returnHome }) => {
  return (
    <div className="movie-details">
      <button onClick={returnHome}>Return to home</button>
      <img src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
      <h2>{movie.title}</h2>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  returnHome: PropTypes.func.isRequired,
};

export default MovieDetails;