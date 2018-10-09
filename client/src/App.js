import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';
import EventsPage from './components/EventsPage';
import OneEventPage from './components/OneEventPage.js';
import EditEventPage from './components/EditEventPage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={ Splash } />
            <Route exact path='/events' component={ EventsPage } />
            <Route exact path='/events/:id' component={ OneEventPage } />
            <Route exact path='/events/:id/edit' component={ EditEventPage } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
