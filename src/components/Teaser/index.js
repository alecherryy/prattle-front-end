import './styles.scss';
import React, { Component } from 'react';

class Teaser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
  }
  
  render() {
    const active = this.state.isActive ? true : false;

    return (
      <button className="teaser" onClick={this.handleClick} data-active={active}>
        <h6 className="teaser__name">{this.props.name}</h6>
        <span>@{this.props.username}</span>
      </button>
    );
  }
}

export default Teaser;