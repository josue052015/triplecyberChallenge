
import './App.css';
import { Home, MovieDetails } from './components/index'
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {

  const date = new Date()

  const [movies, setMovies] = useState();

 

  return (
    <>
      <Router>

        <h2>Pedro Rodriguez {date.getMonth()}/{date.getDate()}/{date.getFullYear()}</h2>
        <br />

        <Routes>

          <Route path='/' element={<Home movies = {movies} setMovies = {setMovies} />}></Route> 
          <Route path='movieDetails/:movieId' element={<MovieDetails />}></Route> 
          
        </Routes>
      </Router>
    </>

  );
}

export default App;
