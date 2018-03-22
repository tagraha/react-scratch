import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import random from './../../utils/randomstring';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          {routes.map((route) => <Route key={random(7)} {...route} />)}
        </Switch>
      </div>
    );
  }
}

export default App;
