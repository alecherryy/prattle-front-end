import './styles.scss';
import React from 'react';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true
    };
  }

  render() {
    return (
      <span className="alert">
        <b>{this.props.username}</b> { this.state.isOnline ? 'is now online!' : 'disconnected!' }
      </span>
    );
  }
}
