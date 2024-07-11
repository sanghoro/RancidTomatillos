import React from 'react';
import '../componentStyles/Nav.css';
import logo from '../img/Logo1.png';
import PropTypes from 'prop-types';

const Nav = () => {
  return (
    <nav className='navBar'>
      <div>
        <img className='logo' src={logo} alt='Main-Logo' />
      </div>
    </nav>
  );
};

Nav.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired
};

export default Nav;
