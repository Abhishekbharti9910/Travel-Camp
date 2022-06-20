import React, {useState} from "react";
import { Typography, CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import placeDetails from "../PlaceDetails/PlaceDetails"
import useStyle from './style'
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({places}) => {

  const classes = useStyle();
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('restaurants')

  return (
    <div className={classes.container}>
      <Typography variant="h4">Food & Dining around you</Typography>

      <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="rating">Rating</InputLabel>
        <Select id="rating" value={rating} onChange={(event) => setRating(event.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>

    </div>

  );
};

export default List;
