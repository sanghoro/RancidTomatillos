import React from 'react'
import MovieCard from './MovieCard'
import'../componentStyles/Main.css'

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
   <MovieCard
        title={movies.title}
        img={movies.img}
   />
  </div>
  )


}

export default Main