import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MoviesList from '../../molecules/moviesList/MoviesList';
import { CssBaseline } from '@mui/material';

const Home = ({movies, setMovies}) => {

  const selectValues = {
    allMovies: 10,
    favoriteMovies: 20
  }

  
  const [moviesBackup, setMoviesBackup] = useState();
  const [currentSelectedValue, setCurrentSelectedValue] = useState();

  //let selectedValue = selectValues.allMovies;


  const filterFavorites = (selectedValue) => {

    console.log("selectedV",selectedValue)

    //  selectedValue = selectedValue;
      applyMoviesFilter(currentSelectedValue);

  }

  const selectFilterChange = (selectValue) => {

  //  currentSelectedValue = selectValue;

    applyMoviesFilter(selectValue);

  }

  const applyMoviesFilter = (selectedValue) => {

    console.log("switch selected value", currentSelectedValue)

    switch (selectedValue) {

      case selectValues.allMovies:

        setMovies(moviesBackup)

        break;

      case selectValues.favoriteMovies:

        const newValue = movies.filter(x => x.isFavorite == true)

        setMovies(newValue)

        break;

    }

  }

  const fetchMovies = () => {

    axios.get(`${process.env.REACT_APP_API_URL}top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((data) => {

        setMoviesBackup(data.data.results)
        setMovies(data.data.results)

      })

  }

  useEffect(() => {

    fetchMovies()

  }, [])

  return (
    <>

        <MoviesList movieList={movies} selectFilterChange={selectFilterChange} filterFavorites={filterFavorites} setCurrentSelectedValue = {setCurrentSelectedValue}/>
        
    </>
  )

}

export default Home