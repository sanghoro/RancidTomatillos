import React from 'react'
import Nav from './Nav'
import '../componentStyles/Header.css'
import PropTypes from 'prop-types'

const Header = ( { movie }) => {
  return (
    <header className='movie-header' style={{ 
      backgroundImage: `url(${movie?.backdrop_path})`
      
    }}>
        <Nav />
    </header>
  )
}

Header.PropTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired
  })
}

export default Header