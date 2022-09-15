import React from 'react'
import useStyles from './styles'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

const DetailCard = ({ data }) => {

    const classes = useStyles();

    const navigate = useNavigate();

    const goToHome = () => {

        navigate("/")

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
                       
                    </Card>

                </Grid>

                <br />

                <Button variant="outlined" onClick={() => goToHome()}>Go To Home</Button>

            </Grid>
        </>
    )
}

export default DetailCard