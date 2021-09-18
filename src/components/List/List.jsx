import React, {useState, useEffect, createRef} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import useStyles from './style';

import PlaceDetails from '../PlaceDetails/PlaceDetails';


const List = ({places, childClick, isLoading, rating, type, setType, setRating}) =>{
    const classes = useStyles();
    const [elRefs,setElRefs] =useState([]);

    useEffect (() => {
        const refs = Array(places?.length).fill().map((_, i) => refs[i] ||createRef());
        setElRefs(refs);
    },[places]);
    
    return(
        <div className = { classes.container}>
            <Typography variant = 'h4'>Hotels, Restaurants & Atractions around you</Typography>
            {isLoading ?(
                <div className = {classes.loading}>
                    <CircularProgress  size ='5rem'/>
                </div>
            ): (
                <>
            <FormControl className = {classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value ={type} onChange ={(e) => setType(e.target.value)}>
                    <MenuItem value= 'resturant'>Resturants</MenuItem>
                    <MenuItem value= 'hotels'>Hotels</MenuItem>
                    <MenuItem value= 'attractions'>Attractions</MenuItem>                  
                </Select>
            </FormControl>
            <FormControl className = {classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value ={rating} onChange ={(e) => setRating(e.target.value)}>
                    <MenuItem value= {0}>All</MenuItem>
                    <MenuItem value= {3}>above 3.0</MenuItem>
                    <MenuItem value= {4}>above 4.0</MenuItem>
                    <MenuItem value= {4.5}>above 4.5</MenuItem>   
                </Select>
            </FormControl>
            <Grid container spacing = {3} className = {classes.list}>
                {places?.map((place,i) =>(
                    <Grid  item key = {i} xs ={12}>
                        <PlaceDetails 
                            place ={place} 
                            selected ={Number(childClick) ===i}
                            refProps = {elRefs[i]}
                        />
                    </Grid>
                ))}
            </Grid>
            </>
            )}
        </div>
    )


}
export default List;