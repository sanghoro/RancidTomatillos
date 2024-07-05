import React from 'react'
import '../componentStyles/MovieCard.css'

const MovieCard = ({title, img}) => {
  return (
    <div className='movie_card'>
        <h1>{title}</h1>
        <p>Rating</p>
        <image src={img}/>
    </div>
  )
}

export default MovieCard