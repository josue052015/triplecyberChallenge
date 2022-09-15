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

  let selectedValue = selectValues.allMovies;


  const filterFavorites = (movie) => {

    if (!movie.isFavorite) {

      selectedValue = selectValues.favoriteMovies;
      applyMoviesFilter();

    }

  }

  const selectFilterChange = (selectValue) => {

    selectedValue = selectValue;

    applyMoviesFilter();

  }

  const applyMoviesFilter = () => {

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

        <MoviesList movieList={movies} selectFilterChange={selectFilterChange} filterFavorites={filterFavorites} />
        
    </>
  )

}

export default Home