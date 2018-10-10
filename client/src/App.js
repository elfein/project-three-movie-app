import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';
import EventsPage from './components/EventsPage';
import OneEventPage from './components/OneEventPage.js';
import EditEventPage from './components/EditEventPage';
import ErrorMessage from './components/ErrorMessage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={ Splash } />
            <Route exact path='/events' component={ EventsPage } />
            <Route exact path='/events/:eventId' component={ OneEventPage } />
            <Route exact path='/events/:eventId/edit' component={ EditEventPage } />
            <Route path='*' component={ ErrorMessage } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
