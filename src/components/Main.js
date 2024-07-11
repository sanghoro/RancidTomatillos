import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import Nav from './Nav';
import PropTypes from 'prop-types';
import '../componentStyles/Main.css';

const Main = ({ movies, onMovieClick, searchTerm, setSearchTerm }) => {
  const movieCards = movies.map(movie => (
    <Link className='card-link' to={`/movies/${movie.id}`} key={movie.id} onClick={() => onMovieClick(movie)}>
      <MovieCard
        title={movie.title}
        img={movie.poster_path}
        id={movie.id}
        average_rating= {movie.average_rating}
        key={movie.id}
        onClick={() => onMovieClick(movie)}
      />
    </Link>
  ));

  return (
    <div className='main-section'>
      <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <input
        className='search-bar'
        placeholder='Search'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <h2>ALL Movies</h2>
      <div className='movie-section'>{movieCards}</div>
    </div>
  );
};

Main.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired
    })
  ),
  onMovieClick: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Main;