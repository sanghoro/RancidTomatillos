import React from 'react'
import '../componentStyles/MovieCard.css'
import PropTypes from 'prop-types'

const MovieCard = ({title, img}) => {
  return (
    <div className='movie_card'>
        {/* <h1>{title}</h1>
        <p>Rating</p> */}
        <img src={img} className="movie_card_image"/>
    </div>
  )
}

export default MovieCard

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}