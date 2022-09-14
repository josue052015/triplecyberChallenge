import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useStyles from './styles'



const CardComponent = ({ data }) => {

  const classes = useStyles();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  let FavoriteIconUI = () => (
    <>
      <IconButton aria-label='Add To Favorite' onClick={() => changeFavoriteStatus()}>
        <StarBorderIcon />
      </IconButton>
    </>
  )

  useEffect(() => {
    console.log("data c")
  }, [data])

  const changeFavoriteStatus = () => {

    if (data.isFavorite) data.isFavorite = false;

    else data.isFavorite = true;

    forceUpdate()

    FavoriteIconUI = () => (
      <>
        <IconButton aria-label='Add To Favorite' >
          <StarIcon />
        </IconButton>
      </>
    )


  }

  return (
    <>
      <Card className={classes.root}>

        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        {/* <CardMedia className={classes.media}  title={data.title} /> */}
        <CardContent>
          <div className={classes.CardContent}>

            <Typography variant='h5' gutterBottom>
              {data.vote_average} / 10
            </Typography>


          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>

          <IconButton aria-label='Add To Favorite' onClick={() => changeFavoriteStatus()}>
            <StarBorderIcon />
          </IconButton>

        </CardActions>
      </Card>
    </>
  )
}

export default CardComponent