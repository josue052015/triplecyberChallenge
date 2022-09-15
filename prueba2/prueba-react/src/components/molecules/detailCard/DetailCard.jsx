import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import useStyles from './styles'
import { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

const DetailCard = ({ data, changeFavoriteStatus, isFavoriteMovie }) => {

    const classes = useStyles();

    const [isFavorite, setIsFavorite] = useState(isFavoriteMovie);

    const navigate = useNavigate();

    const goToHome = () => {

        navigate("/")

    }

    const handleFavoriteChange = () => {

        setIsFavorite(!isFavorite)

        changeFavoriteStatus(data.id)

    }

    const imagePath = `https://image.tmdb.org/t/p/w500${data.poster_path}`

    return (
        <>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >

                <Grid item xs={12} sm={6} md={4} lg={3} >

                    <Card className={classes.root}>

                        <CardMedia className={classes.media} image={imagePath} />
                        <CardContent>
                            <div className={classes.CardContent}>

                                <Typography variant='h5' gutterBottom>
                                    {data.title}
                                </Typography>

                                <Typography variant='h5'>
                                    {data.vote_average.toFixed(1)} / 10
                                </Typography>

                                <br />

                                <Typography >
                                    {data.overview}
                                </Typography>

                            </div>
                        </CardContent>
                        <CardActions disableSpacing className={classes.CardActions}>

                            {
                                isFavorite ?
                                    (
                                        <>
                                            <IconButton aria-label='Favorite' onClick={() => handleFavoriteChange()}>
                                                <StarIcon />
                                            </IconButton>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <IconButton aria-label='Favorite' onClick={() => handleFavoriteChange()} >
                                                <StarBorderIcon />
                                            </IconButton>
                                        </>
                                    )
                            }

                        </CardActions>
                    </Card>

                </Grid>

                <br />

                <Button variant="outlined" onClick={() => goToHome()}>Go To Home</Button>

            </Grid>
        </>
    )
}

export default DetailCard