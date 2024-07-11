import { useState, useEffect, useRef } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState(null);
  const [currentHeaderMovieIndex, setCurrentHeaderMovieIndex] = useState(0);
  const intervalRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  function getMovieData() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => {
        console.log('allmovie', data);
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

  useEffect(() => {
    getMovieData();
  }, []);

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
    setSearchTerm('');  // Clear search input
  }

  function returnHomeButton() {
    setClickedMovie(null);
    clearInterval(intervalRef.current); 
    intervalRef.current = setInterval(() => {
      setCurrentHeaderMovieIndex(prevIndex => (prevIndex + 1) % movies.length);
    }, 5000);
    window.scrollTo(0, 0);
  }

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='App'>
      <Header 
        movie={clickedMovie || movies[currentHeaderMovieIndex]}
        
      />
      <Routes>
        <Route path="/" element={<Main movies={filteredMovies} onMovieClick={handleClickedMovie} searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}/>} />
        <Route path="/movies/:id" element={<MovieDetailsWrapper returnHome={returnHomeButton} />} />
      </Routes>
      <Footer />
    </div>
  );
}

function MovieDetailsWrapper({ returnHome }) {
  const { id } = useParams();
  const [clickedMovie, setClickedMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => response.json())
        .then(data => {
          setClickedMovie(data.movie);
          fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
            .then(response => response.json())
            .then(videoData => {
              const trailerVideo = videoData.videos.find(video => video.type === 'Trailer');
              if (trailerVideo) {
                setTrailer(trailerVideo.key);
              } else {
                setTrailer(null);
              }
            });
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  if (!clickedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <MovieDetails movie={clickedMovie} returnHome={returnHome} trailer={trailer} />
  );
}

export default App;
