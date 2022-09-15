import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const SelectComponent = ({selectChanges, selectFilterChange, setCurrentSelectedValue}) => {

const selectValues = {
    allMovies: 10,
    favoriteMovies: 20
}

const [selectValue, setSelectValue] = useState(selectValues.allMovies)

    const handleSelectChange = (selectedValue) => {

        setSelectValue(selectedValue);

        selectFilterChange(selectedValue);

        setCurrentSelectedValue(selectedValue)

    }

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Show</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectValue}
                        label="Show"
                        
                    >
                        <MenuItem value={selectValues.allMovies} onClick={() => handleSelectChange(selectValues.allMovies)}>All Movies</MenuItem>
                        <MenuItem value={selectValues.favoriteMovies} onClick={() => handleSelectChange(selectValues.favoriteMovies)}>Favorite Movies</MenuItem>

                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default SelectComponent