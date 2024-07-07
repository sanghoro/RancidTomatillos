import React from 'react'
import '../componentStyles/Nav.css'


const Nav = () => {

  return (
    <nav className='navBar' >
        <div>
            <img className='logo' src='../img/Logo1.png' alt='Main-Logo'/>
        </div>
        <input className= 'search-bar' placeholder='Search'/>
        <button className='search-button'>🔍</button>
    </nav>
  )
}

export default Nav