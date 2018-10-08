import React, { Component } from 'react';
import Splash from './components/Splash';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={ Splash } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
