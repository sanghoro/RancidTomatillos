import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import MockData from './MockData/mock-data'
import { useState, useEffect } from 'react';

function App() {
const [movies, setMovies] = useState([])

function getMovieData(){
  fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
  .then(response => response.json())
  .then(data => {
    setMovies(data.movies)
    console.log('fetched movie data', data.movies
    )})
  .catch(err => console.log(err))
}

useEffect(()=> {
  getMovieData()
}, [])


  return (
    <div className='App'>
      <Header />
      <Main movies={movies} />
      <Footer />
    </div>


  );
}

export default App;
