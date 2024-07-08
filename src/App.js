import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState(null);
  const [currentHeaderMovieIndex, setCurrentHeaderMovieIndex] = useState(0)
  const intervalRef = useRef(null)
  const [trailer, setTrailer] = useState([])

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
      })
      .catch(err => console.log(err));
  }

  function getTrailerVideo(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(response => response.json())
      .then(data => {
        console.log(data.videos);
        setTrailer(data.videos)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(()=> {
    getTrailerVideo()
  }, [])

  useEffect(() => {
     if (!clickedMovie) {
      intervalRef.current = setInterval(() => {
        setCurrentHeaderMovieIndex(prevIndex => (prevIndex + 1) % movies.length);
      }, 5000); 

      return () => clearInterval(intervalRef.current);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [movies, clickedMovie]);

  function handleClickedMovie(movie) {
    getSingleMovieData(movie.id);
  }

  function returnHomeButton() {
    setClickedMovie(null);
    intervalRef.current = setInterval(() => {
      setCurrentHeaderMovieIndex(prevIndex => (prevIndex + 1) % movies.length);
    }, 5000);
  }

  // return (
  //   <div className='App'>
  //     <Header movie={clickedMovie || movies[currentHeaderMovieIndex]}/>
  //     {clickedMovie ? (
  //       <MovieDetails movie={clickedMovie} returnHome={returnHomeButton} />
        
  //     ) : (
  //       <Main movies={movies} onMovieClick={handleClickedMovie} />
  //     )}
  //     <Footer />
  //   </div>
  // );

  return (
    <div className='App'>
      <Header movie={clickedMovie || movies[currentHeaderMovieIndex]} />
      <Routes>
        <Route path="/" element={<Main movies={movies} onMovieClick={handleClickedMovie} />} />
        <Route path="/movies/:id" element={clickedMovie && <MovieDetails movie={clickedMovie} returnHome={returnHomeButton} trailer={trailer} />} />
      </Routes>
      <Footer />
    </div>
  );

}

export default App;