import React from 'react';
import PropTypes from 'prop-types';
import '../componentStyles/MovieDetails.css';

const MovieDetails = ({ movie, returnHome }) => {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <div>
  <img src={movie.poster_path} alt={`${movie.title} backdrop`} />
  <h3>Averag Rating</h3>
  <p>{movie.average_rating}/10 tomatillos </p>
  <h3>Overview</h3>
  <p>{movie.overview}</p>

      </div>
      
      
      <button onClick={returnHome}>Home</button>
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