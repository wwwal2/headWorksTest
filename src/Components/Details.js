import React, { Component } from 'react';
import Data from './store/db.json';
import Item from './Item';
import { Grid } from '@material-ui/core';


class Details extends Component {
  render() {
    const dispatchItems = Data.map((element) => {
        return (
            <Item carDetails={element} />
        )
    });
    return (
      <div>
          <Grid container>
            <Grid item xs={3}>
            Сорри, баг с отображением картинок я еще фикшу. Для отображения правильных картинок наджите "Details" 2 раза
            </Grid>
            <Grid item xs={9}>
                {dispatchItems}
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default Details;