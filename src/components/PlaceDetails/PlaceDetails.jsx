import React from 'react';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyle from './style';



const PlaceDetails = ({place, selected, refProps}) => {
    const classes= useStyle();

    if(selected) refProps?.current?.scrollIntoView({behavior: "smooth", block: "start"})

    return(
        <Card elevation ={6}>
            <CardMedia 
                style ={{height:350}}
                image={place.photo ? place.photo.images.large.url:"https://www.melissahartfiel.com/2013/04/30/restaurant-food-photography-part-1-etiquette/20130426-1304_untitled005-2/"}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant ='h5'>{place.name}</Typography>
                <Box display = 'flex' justifyContent = 'space-between'>
                <Rating  value = {Number(place.rating)} readOnly/>
                    <Typography gutterBottom varient ='subtitle1'>out of {place.num_reviews} reviews</Typography>

                </Box>
                <Box display = 'flex' justifyContent = 'space-between'>
                    <Typography varient ='subtitle1'>Pricing</Typography>
                    <Typography gutterBottom varient ='subtitle1'>{place.price_level}</Typography>

                </Box>

                <Box display = 'flex' justifyContent = 'space-between'>
                    <Typography varient ='subtitle1'>Ranking</Typography>
                    <Typography gutterBottom varient ='subtitle1'>{place.ranking}</Typography>

                </Box>
                {place?.awards?.map((award) =>(
                    <Box my ={1} display ='flex' justifyContent = 'space-between' align ='center'>
                        <img  src = {award.images.small} alt = {award.display_name}/>
                        <Typography variant =' subtitle2' color = 'textSecondary'>{award.display_name}</Typography>

                    </Box>
                ))}
                {place?.cuisine?.map(({name}) =>(
                    <Chip  key ={name} size ='small' label = {name} className = {classes.chip}/>
                ))}
                {place?.addres && (
                    <Typography gutterBottom variant ='body2' color ='textSecondary' className= {classes.subtitle}>
                        <LocationOnIcon />{place.adress}
                    </Typography>
                )}
                 {place?.phone && (
                    <Typography gutterBottom variant ='body2' color ='textSecondary' className= {classes.spacing}>
                        <PhoneIcon />{place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size = 'small' color='primary' onclick = {() =>window.open(place.web.url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size = 'small' color='primary' onclick = {() =>window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )

}

export default PlaceDetails;