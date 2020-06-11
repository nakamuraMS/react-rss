import React from 'react';
import { Typography, Card, CardContent, CardActions,Button } from '@material-ui/core';

function rssDetail() {
  return (
    <React.Fragment>

      <Card  variant="outlined">
        <CardContent>
          <Typography  color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">外部サイトに遷移</Button>
        </CardActions>
      </Card>
      <Card  variant="outlined">
        <CardContent>
          <Typography  color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">外部サイトに遷移</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default rssDetail;
