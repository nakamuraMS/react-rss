import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';

const rssListItem = (props) => {
  const { rssesCount, rsses, actions } = props;
  let item;
  if (rssesCount < 2) {
    item = <Typography variant="h5">一件も登録されていません</Typography>;
  } else {
    item = 
      <List component="nav" aria-label="main mailbox folders">
        {rsses.map(function(rss) {
          if (rss.id  == 0){
            return;
          }

          return <React.Fragment>
            <ListItem button>
              <ListItemText key={rss.id} primary={rss.name} url={rss.url} fullWidth />
            </ListItem>
            <Divider />
          </React.Fragment>;
        })}
      </List>;
  }
  return item;
}

export default rssListItem;