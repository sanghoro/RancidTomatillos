import React from 'react'
import MovieCard from './MovieCard'
import'../componentStyles/Main.css'
import PropTypes from 'prop-types'

const Main = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        img={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
    )
  })


  return (
  <div className='movie-section'>
        {movieCards}
  </div>
  )


}

export default Main

Main.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired
    })
  )
}