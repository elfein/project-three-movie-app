import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';
import EventsPage from './components/EventsPage';
import OneEventPage from './components/OneEventPage.js';
import EditEventPage from './components/EditEventPage';
import ErrorMessage from './components/ErrorMessage';
import styled from 'styled-components'

const StyledDiv = styled.div`
background-color: rgb(30,40,50);
background-image: url(https://images.unsplash.com/photo-1516569333566-9d463ccffd20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ed1ef07e7e2b9c32abb3a8da7343b59&auto=format&fit=crop&w=2734&q=80);
background-size: cover;
min-height: 100vh;
button:focus {
  outline:0;
  }
`

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <Router>
          <Switch>
            <Route exact path='/' component={ Splash } />
            <Route exact path='/events' component={ EventsPage } />
            <Route exact path='/events/:eventId' component={ OneEventPage } />
            <Route exact path='/events/:eventId/edit' component={ EditEventPage } />
            <Route path='*' component={ ErrorMessage } />
          </Switch>
        </Router>
      </StyledDiv>
    );
  }
}

export default App;
