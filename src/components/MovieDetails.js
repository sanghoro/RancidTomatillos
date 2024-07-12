import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../componentStyles/MovieDetails.css';

const MovieDetails = ({ movie, returnHome, trailer }) => {
  return (
    <div className="movie-details">
      <div className="movie-content">
        <img src={movie.poster_path} alt={`${movie.title} backdrop`} className="movie-image" />
        <div className="movie-info">
          <h2 className="movie-tagline">"{movie.tagline}"</h2>
          <div className='movie-p'>  
            <p className="movie-runtime"><span>Runtime:</span> {movie.runtime} minutes</p>
            <p className="movie-release_date"><span>Released on:</span> {movie. release_date}</p>
            <p className="movie-rating"><span>Average Rating:</span> {movie.average_rating}/10 tomatillos</p>
            <p className="movie-overview"><span>Overview:</span><span className='overview-box'>{movie.overview}</span></p>
          </div>
          <iframe className ="movie-trailer"
                src={`https://www.youtube.com/embed/${trailer}`}
              ></iframe>
        </div>
      </div>
      <Link to="/" onClick={returnHome}>
        <button className="home-button">Return Home</button>
      </Link>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
  returnHome: PropTypes.func.isRequired,
};

export default MovieDetails;