import React, {useEffect, useState} from "react";
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from "./api";

import Header from "./Header/Header";
import Map from "./Map/Map";
import List from "./List/List"

const App = () => {

  const [places, setPlaces] = useState([]);

  const [coordinates, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
    .then((data) => {
      console.log("hey here is data"+data);
      setPlaces(data);
    })
  }, [coordinates, bounds])

  return (
    <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100vw'}}>

            <Grid item sm={12} md={4} >
                <List places={places}/>
            </Grid>

            <Grid item sm={12} md={8} >
                <Map 
                  setCoords = {setCoords}
                  setBounds = {setBounds}
                  coords = {coordinates}
                  places = {places}
                />
            </Grid>

        </Grid>
    </>
  );
};

export default App;
