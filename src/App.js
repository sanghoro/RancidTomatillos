import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState(null);

  function getMovieData() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
      })
      .catch(err => console.log(err));
  }

  function getSingleMovieData(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        setClickedMovie(data.movie);
        console.log('Fetched single movie data', data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getMovieData();
  }, []);

  function handleClickedMovie(movie) {
    getSingleMovieData(movie.id);
  }

  function returnHomeButton() {
    setClickedMovie(null);
  }

  return (
    <div className='App'>
      <Header />
      {clickedMovie ? (
        <MovieDetails movie={clickedMovie} returnHome={returnHomeButton} />
      ) : (
        <Main movies={movies} onMovieClick={handleClickedMovie} />
      )}
      <Footer />
    </div>
  );
}

export default App;