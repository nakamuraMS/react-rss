import React from 'react';
import { Typography, TextField, Button, CssBaseline, Container, DialogTitle, Dialog } from '@material-ui/core';

function rssAdd() {
  return (
    <React.Fragment>
      <Typography variant="h5">RSS追加</Typography>
      <form>
        <div>
          <TextField label="RSS名" name="rss_name" fullWidth />
        </div>
        <div>
          <TextField label="URL" name="rss_url" fullWidth />
        </div>
        <div>
          <Button variant="contained" fullWidth onClick>戻る</Button>
        </div>
        <Button variant="contained" color="primary" fullWidth>登録</Button>
      </form>
    </React.Fragment>
  );
}

export default rssAdd;
