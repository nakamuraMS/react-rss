import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";
import { AppBar, Tabs, Tab, Button, CssBaseline, Container, DialogTitle, Dialog, Typography } from '@material-ui/core';
import RssAdd from './containers/rssAdd';
import RssList from './components/rssList';
import RssDetail from './components/rssDetail';
const history = createHistory();

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="md" >
        <CssBaseline />
        <BrowserRouter history={history}>
          <AppBar position="static">
            <Tabs aria-label="">
              <Link to='/' style={{textDecoration:'none', color:'inherit'}}><Tab label="Home" /></Link>
              <Link to='/add' style={{textDecoration:'none', color:'inherit'}}><Tab label="RSS追加" /></Link>
            </Tabs>
          </AppBar>

          <Route exact path='/'>
            <RssList />
          </Route>
          <Route path='/add' component={RssAdd}/>
          <Route path='/detail' component={RssDetail}/>
        </BrowserRouter>

      </Container>
    </React.Fragment>
  );
}

export default App;
