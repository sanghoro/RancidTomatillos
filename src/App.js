import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import MockData from './MockData/mock-data'
import { useState } from 'react';

function App() {
const [movies, setMovies] = useState(MockData.movies)

  return (
    <div className='App'>
      <Header />
      <Main movies={movies} />
      <Footer />
    </div>


  );
}

export default App;
