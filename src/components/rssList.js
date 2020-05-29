import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

function rssList() {
  return (
    <React.Fragment>
      <Typography variant="h5">一件も登録されていません</Typography>

      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="リスト１" fullWidth />
        </ListItem>
        <ListItem button>
          <ListItemText primary="リスト２" fullWidth />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default rssList;