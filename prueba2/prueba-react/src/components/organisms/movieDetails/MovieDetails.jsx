import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import DetailCard from '../../molecules/detailCard/DetailCard';


const MovieDetails = () => {

  const navigate = useNavigate();
  const { movieId } = useParams()

  const [movieInformation, setMovieInformation] = useState();
 

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
            <DetailCard data={movieInformation}  />
          </>
        )}

    </>
  )
}

export default MovieDetails