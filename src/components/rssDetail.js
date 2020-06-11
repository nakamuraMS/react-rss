import React from 'react';
import { Typography, Card, CardContent, CardActions,Button } from '@material-ui/core';

class rssDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoaded: false,
      items: [],
      error: null,
    }
  }

  componentDidMount() {
    const rss = JSON.parse(localStorage.getItem('rss'));
    const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
    fetch(`${corsUrl}${rss[0]['url']}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render() {
    if (this.state.error) {
      return <Typography variant="h5" color={'error'}>{this.state.error.message}</Typography>;
    } else {
      return (
        this.state.items.map(function(item) {
          return <Card  variant="outlined">
            <CardContent>
              <Typography  color="textSecondary" gutterBottom>
                {item.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={item.link} target="_blank">外部サイトに遷移</Button>
            </CardActions>
          </Card>;
        })
      );
    }
  }
}

export default rssDetail;
