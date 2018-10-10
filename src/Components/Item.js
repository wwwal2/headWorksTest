import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import {logo1, logo2, logo3, logo4} from './store/images';

class Item extends Component {
    constructor(props) {
      super(props)
      this.state = {pick:logo1}
    }
  componentWillReceiveProps(nextProps) {
    switch(nextProps.carDetails.image) {
      case "logo1": {
        this.setState({pick:logo1})
        break;
      } case "logo2": {
        this.setState({pick:logo2})
        break;
      } case "logo3": {
        this.setState({pick:logo3})
        break;
      } case "logo4": {
        this.setState({pick:logo4})
        break;
      }
    }   
  }
  render() {   
    return (
      <div>
        <Grid container justify="space-between">
          <Grid item xs={4}>
            <Typography component="h2" variant="headline" align="left"  style = {{ paddingTop: '7%'}}>
            Produced: {this.props.carDetails.produced}<br/>
            Hoursepower: {this.props.carDetails.hoursePower}<br/>
            Miles per gallon: {this.props.carDetails.miles_per_gallon}<br/>
            Price: {this.props.carDetails.price}<br/>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Card>
              <CardMedia
              style = {{ height: 300, paddingTop: '10%'}}
              image={this.state.pick} />
              <Typography align="left" variant="title" color="textSecondary">
                {this.props.carDetails.description}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Item;