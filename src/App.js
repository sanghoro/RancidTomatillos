import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import MockData from './MockData/mock-data'
import { useState, useEffect } from 'react';

function App() {
const [movies, setMovies] = useState([])

//All Fetch
function getMovieData(){
  fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
  .then(response => response.json())
  .then(data => {
    setMovies(data.movies)})
  .catch(err => console.log(err))
}
function getSingleMovieData(id){
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(response => response.json())
  .then(data => console.log('fetched single movie data', data))
  .catch(err => console.log(err))
}

function getSingleMovieTrailer(id){
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
  .then(response => response.json())
  .then(data => console.log('fetched movie trailer', data))
  .catch(err => console.log(err))
}

//All useEffects
useEffect(()=> {
  getMovieData()
}, [])

useEffect(()=> {
  getSingleMovieData(436270)
}, [])

useEffect(()=> {
  getSingleMovieTrailer(436270)
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
