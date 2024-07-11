import React from 'react';
import '../componentStyles/Nav.css';
import logo from '../img/Logo1.png';

const Nav = () => {
  return (
    <nav className='navBar'>
      <div>
        <img className='logo' src={logo} alt='Main-Logo' />
      </div>
    </nav>
  );
};

export default Nav;