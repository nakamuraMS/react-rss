import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const rssListItem = (props) => {
  const { rssesCount, rsses } = props;
  let item;
  if (rssesCount < 1) {
    item = <Typography variant="h5">一件も登録されていません</Typography>;
  } else {
    item = 
      <List component="nav" aria-label="main mailbox folders">
        {rsses.map(function(rss) {
          // if (rss.id  === 0){
          //   return;
          // }

          return <React.Fragment>
            <Link to={'/detail/' + rss.id} style={{textDecoration:'none', color:'inherit'}}>
              <ListItem button>
                <ListItemText  primary={rss.name} fullWidth />
              </ListItem>
            </Link>
            <Divider />
          </React.Fragment>;
        })}
      </List>;
  }
  return item;
}

export default rssListItem;