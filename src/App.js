import './App.scss';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
