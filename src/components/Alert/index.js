import './styles.scss';
import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true
    };
  }

  componentDidMount() {
    this.setState(state => ({
      isOnline: this.props.userIsOnline
    }));
  }

  render() {
    return (
      <span className="alert">
        <b>{this.props.username}</b> { this.state.isOnline ? 'is now online!' : 'disconnected!' }
      </span>
    );
  }
}

export default Content;