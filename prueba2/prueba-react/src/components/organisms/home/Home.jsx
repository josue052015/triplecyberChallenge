import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MoviesList from '../../molecules/moviesList/MoviesList';

const Home = () => {

  const [movies, setMovies] = useState();
  const [moviesBackup, setMoviesBackup] = useState();

  const selectValues = {
    allMovies: 10,
    favoriteMovies: 20
  }

  const selectFilterChange = (selectValue) => {

    switch (selectValue) {

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
      <MoviesList movieList={movies} selectFilterChange = {selectFilterChange} />
    </>
  )
}

export default Home