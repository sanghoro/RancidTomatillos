import React from 'react'
import '../componentStyles/Nav.css'


const Nav = () => {
  return (
    <nav className='navBar' >
        <div>
            <h3 className='logo'>Logo</h3>
        </div>
        <input placeholder='Search'/>
    </nav>
  )
}

export default Nav