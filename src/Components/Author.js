import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import myPhoto from './store/images/myPhoto.jpg';
import bio from './store/bio.json'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import DraftsIcon from '@material-ui/icons/Drafts';
import CallIcon from '@material-ui/icons/Call';
import MobileScreenShare from '@material-ui/icons/MobileScreenShare';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Domain from '@material-ui/icons/Domain';

class Author extends Component {
  render() {
    return (
      <div>
          <Grid container>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="display3">
                    {bio.position}
                </Typography>
                <Typography variant="headline" align="justify">
                    <strong>{bio.name}</strong> <br/>
                    <strong>Стэк технологий: </strong>{bio.tech} <br/>
                    <strong>Кратко о себе: </strong>{bio.description} <br/>
                    <strong>Проживаю: </strong>{bio.location} <br/>
                </Typography>
                <Paper>
                    <MenuList>
                        <MenuItem >
                            <CallIcon />+38 068 520 7031
                        </MenuItem>
                        <MenuItem>
                            <DraftsIcon />smalex9@gmail.com
                        </MenuItem>
                        <MenuItem>
                            <MobileScreenShare />www.ab.dd (skype)
                        </MenuItem>
                        <MenuItem>
                            <AlternateEmail />@wwwal2 (telegram)
                        </MenuItem>
                        <MenuItem>
                            <Domain />github.com/wwwal2 (git)
                        </MenuItem>
                    </MenuList>
                </Paper>
                
            </Grid>
            <Grid item xs={1}>
                <CardMedia
                style = {{ height: 150, paddingTop: '14%'}}
                image={myPhoto} />
            </Grid>
            <Grid item xs={1}>
            
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default Author;