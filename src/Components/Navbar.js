import React, { Component } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <Appbar position="static">
          <Grid container justify="center">
            <Grid item xs={11}>
              <Tab label="Cars List" component={Link} to="/" />
              <Tab label="Details" component={Link} to="/details" />
            </Grid>
            <Grid item xs={1}>
              <Tab label="About me" component={Link} to="/author" />
            </Grid>
          </Grid>
        </Appbar>
      </div>
    );
  }
}

export default Navbar;