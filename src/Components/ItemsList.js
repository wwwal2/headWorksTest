import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid, Typography } from '@material-ui/core';
import Data from './store/db.json';
import Item from './Item';

class ItemsList extends Component {
    state = {
        Data: Data[0]
    }

    render() {
        const dispatchTabs = Data.map((name) => {
            return (
                <ListItem key={name.id} button onClick={() => {this.setState({Data: name});}}>
                    <ListItemText inset primary={name.model_name} />
                </ListItem>
            )
        });
        
        return (
            <div>
                <Grid container justify="space-evenly">
                    <Grid item xs={1} />
                    <Grid item xs={2}>
                        <Typography variant="display2" color="inherit" >
                            The Dodge cars available:
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <List component="nav">
                            {dispatchTabs}
                        </List> 
                    </Grid>
                    <Grid item xs={6}>
                    <Item carDetails={this.state.Data} />
                    </Grid>
                </Grid>
            </div>
      );
    }
  }
  
  export default ItemsList;