import React from 'react';
import Nav from './Nav';
import { motion } from 'framer-motion';
import '../componentStyles/Header.css';
import PropTypes from 'prop-types';

const Header = ({ movie }) => {
  return (
    <header className='movie-header'>
      <motion.div 
        className='movie-header' 
        key={movie?.backdrop_path} // Adding key to trigger re-animation on movie change
        style={{ 
          backgroundImage: `url(${movie?.backdrop_path})` 
        }} 
        initial={{ opacity: 0.5, x: 100 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Slide in to the center
        exit={{ opacity: 0, x: -100 }} // Slide out to the left
        transition={{ duration: 1.3 }} // Duration of the animation
      />
      <Nav />
      {movie && (
        <div className="movie-title-container">
          <h1 className="movie-title">{movie.title}</h1>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
