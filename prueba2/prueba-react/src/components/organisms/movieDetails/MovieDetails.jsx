import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import DetailCard from '../../molecules/detailCard/DetailCard';


const MovieDetails = ({ originalMoviesInformation}) => {

  const navigate = useNavigate();
  const { movieId } = useParams()
  const movieIndex = originalMoviesInformation.findIndex(x => x.id == movieId)

  const [movieInformation, setMovieInformation] = useState();
  const [isFavorite, setIsFavorite] = useState(Boolean(originalMoviesInformation[movieIndex].isFavorite == true));

    const changeFavoriteStatus = () => {
  
      if(movieIndex !== undefined) originalMoviesInformation[movieIndex].isFavorite = !(Boolean(originalMoviesInformation[movieIndex].isFavorite == true)) 
  
      setIsFavorite(originalMoviesInformation[movieIndex].isFavorite)

    }
  

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_API_URL}${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then(response => {
        setMovieInformation(response.data)
        console.log("detailData", response.data)
      })

  }, [])

  return (
    <>

      {movieInformation &&
        (
          <>
            <DetailCard data={movieInformation} changeFavoriteStatus = {changeFavoriteStatus} isFavoriteMovie = {isFavorite} />
          </>
        )}


    </>
  )
}

export default MovieDetails