import React from 'react';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import {  Link } from 'react-router-dom';

// function rssAdd() {
//   return (
//     <React.Fragment>

//       <form>
//         <Grid container spacing={1}>
//           <Grid item xs={12}>
//             <Typography variant="h5">RSS追加</Typography>
//           </Grid>

//           <Grid item xs={12}>
//             <TextField label="RSS名" name="rss_name" fullWidth />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField label="URL" name="rss_url" fullWidth />
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" fullWidth>
//               <Link to='/' color="inherit" style={{textDecoration:'none', color:'inherit'}}>戻る</Link>
//             </Button>
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained" color="primary" fullWidth>登録</Button>
//             </Grid>
//         </Grid>
//       </form>
//     </React.Fragment>
//   );
// }

// export default rssAdd;


export default class rssAdd extends React.Component {
  render() {
    return (
      <React.Fragment>
  
        <form>
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
              <Button variant="contained" fullWidth>
                <Link to='/' color="inherit" style={{textDecoration:'none', color:'inherit'}}>戻る</Link>
              </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>登録</Button>
              </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}
