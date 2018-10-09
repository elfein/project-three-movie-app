import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';
import EventsPage from './components/EventsPage';
import EventPage from './components/EventPage.js';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={ Splash } />
            <Route exact path='/events/:id' component={ EventPage } />
            <Route exact path='/events' component={ EventsPage } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
