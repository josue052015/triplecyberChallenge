
import './App.css';
import { Home, MovieDetails } from './components/index'
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {
  const date = new Date()
  return (
    <>
      <Router>

        <h2>Pedro Rodriguez {date.getMonth()}/{date.getDate()}/{date.getFullYear()}</h2>
        <br />

        <Routes>

          <Route path='/' element={<Home />}></Route> 
          <Route path='movieDetails/:movieId' element={<MovieDetails />}></Route> 
          
        </Routes>
      </Router>
    </>

  );
}

export default App;
