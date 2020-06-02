import React from 'react';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import RssAdd from '../containers/rssAdd';
import rsses from '../reducers/rsses';

export default class RssAddComponent extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = e.target.rss_name.value.trim();
    const url = e.target.rss_url.value.trim();
    this.props.addRss(name, url);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5">RSS追加</Typography>
            </Grid>
  
            <Grid item xs={12}>
              <TextField label="RSS名" name="rss_name" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="URL" name="rss_url" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth >
                <Link to='/' color="inherit" style={{textDecoration:'none', color:'inherit'}}>戻る</Link>
              </Button>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth >登録</Button>
              </Grid>
          </Grid>
        </form>
      </React.Fragment>
    )
  }
}