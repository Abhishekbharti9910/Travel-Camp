import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";

import Header from "./Header/Header";
import Map from "./Map/Map";
import List from "./List/List";

const App = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [coordinates, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating >= rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
    });
  }, [type, coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100vw" }}>
        <Grid item sm={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>

        <Grid item sm={12} md={8}>
          <Map
            places={filteredPlaces.length ? filteredPlaces : places}
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coordinates}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
