import './App.scss';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat/UserChat';
import PageWrapper from './components/PageWrapper';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Logo />
        <Router>
          <Switch>
            <Route exact path="/">
              <Chat />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </PageWrapper>
    );
  }
}

export default App;
