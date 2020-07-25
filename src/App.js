import './App.scss';
import React, { Component } from 'react';
import Message from './components/Message/Message';

class App extends Component {
  render() {
    return (
      <div>

        <Message 
          from="alecherryy"
          content="Cum appetere eloquentiam comprehensam ne, luptatum pertinax reprehendunt qui ea."
          date="February 14, 2020"
        />
        <Message 
          content="Cum appetere eloquentiam comprehensam ne, luptatum pertinax reprehendunt qui ea."
          date="February 14, 2020"
        />
      </div>
    );
  }
}

export default App;
