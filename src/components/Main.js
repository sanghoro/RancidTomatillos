import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'
import'../componentStyles/Main.css'

const Main = ({ movies, onMovieClick }) => {
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
  <div className='movie-section'>
        {movieCards}
  </div>
  )
}

Main.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired
    })
  )
}
export default Main
