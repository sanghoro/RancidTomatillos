import React from 'react'
import '../componentStyles/MovieCard.css'
import PropTypes from 'prop-types'

const MovieCard = ({title, img, id, onClick}) => {
  return (
    <div className='movie_card' onClick={onClick}>
        <img src={img} className="movie_card_image"/>
        <h3>{title}</h3>
    </div>
  )
}

export default MovieCard

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}