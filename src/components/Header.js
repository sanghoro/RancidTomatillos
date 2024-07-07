import React from 'react'
import Nav from './Nav'
import '../componentStyles/Header.css'

const Header = ( { movie }) => {
  return (
    <header className='header' style={{ 
      backgroundImage: `url(${movie?.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <Nav />
    </header>
  )
}

export default Header