import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import MockData from './MockData/mock-data'
import { useState } from 'react';

function App() {
const [movies, setMovies] = useState([MockData])

  return (
    <div className='App'>
      <Header />
      <Main movies={movies} />
      {/* <div>
        {MockData.movies.map(movie => (
          <h2>{movie.title}</h2>
        ))}
      </div> */}
      <Footer />
    </div>


  );
}

export default App;
