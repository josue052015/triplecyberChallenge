import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useStyles from './styles'
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';


const CardComponent = ({ data, filterFavorites, selectedValue }) => {

  const navigate = useNavigate();

  const classes = useStyles();

  const [isFavorite, setIsFavorite] = useState(data.isFavorite ? true : false);

  const changeFavoriteStatus = () => {

    if (data.isFavorite) data.isFavorite = false;

    else data.isFavorite = true;

    setIsFavorite(!isFavorite)

    filterFavorites(selectedValue)

  }

  const goToMovieDetail = () => {

    navigate(`/movieDetails/${data.id}`)

  }

  return (
    <>

      <Card className={classes.root} >

        <div style={{ "paddingBottom": "5px" }} />

        <Typography variant="h5" component="div">
          {data.title}
        </Typography>

        <CardContent>

          <div className={classes.CardContent}>

            <Typography variant='h5' gutterBottom>
              {data.vote_average} / 10
            </Typography>

          </div>

        </CardContent>

        <CardActions disableSpacing className={classes.CardActions}>

          {
            isFavorite ?
              (
                <>
                  <IconButton aria-label='Add To Favorite' onClick={() => changeFavoriteStatus()}>

                    <StarIcon />

                  </IconButton>
                </>
              )
              :
              (
                <>
                  <IconButton aria-label='Add To Favorite' onClick={() => changeFavoriteStatus()}>

                    <StarBorderIcon />

                  </IconButton>
                </>
              )
          }

          <IconButton aria-label='Information' onClick={() => goToMovieDetail()}>

            <InfoIcon />

          </IconButton>

        </CardActions>
      </Card>

    </>
  )
}

export default CardComponent