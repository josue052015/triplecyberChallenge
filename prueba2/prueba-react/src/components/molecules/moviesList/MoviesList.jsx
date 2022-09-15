import React, { useState } from 'react'
import CardComponent from '../../atoms/card/CardComponent'
import SelectComponent from '../../atoms/select/SelectComponent'
import { Grid } from '@material-ui/core'

const MoviesList = ({ movieList, selectFilterChange, filterFavorites, setCurrentSelectedValue }) => {

  const [selectedValue, setSelectedValue] = useState(10);

  return (
    <>

    <SelectComponent selectFilterChange = {selectFilterChange} setCurrentSelectedValue = {setCurrentSelectedValue}/>

    <br/>

      <Grid container justify="center" spacing={3}>

        {movieList?.map((movie, index) => (

          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>

            <CardComponent data={movie} filterFavorites = {filterFavorites}  selectedValue = {selectedValue}  />
            
          </Grid>
        )
        )}

      </Grid>

    </>
  )
}

export default MoviesList