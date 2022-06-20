import React from "react";
// import { Autocomplete } from "@react-google-maps/api";

import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyle from './style.js'


const Header = () => {

  const classes = useStyle();

  return (
  
        <AppBar position="static" className={classes.header}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5">
                    Travel Companion
                </Typography>
                <Box display="flex">
                    <Typography variant="h6">
                        need Companion. we Serve
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="search ..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>

        </AppBar>
  );
};

export default Header;
