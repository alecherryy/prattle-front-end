import '../styles.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default class RegisterForm extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    }
  };

  register = (e) => {
    e.preventDefault();

    const path = `http://localhost:8080/user/register`;
    const history = useHistory();
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(this.state.user),
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      }
    }).then(res => {
      if (!res.ok) {
        alert('Registration failed');
      } else {
        alert('Your account was successfully created!');
        // if successful, redirect to login page
        history.push('/login');
      }
    })
  }

  render() {
    return (
      <form className="form" action="post" autocomplete="off">
        <input id="username"
          datatype="username"
          type="text"
          placeholder="Username*"
          value={this.state.user.username}
          onChange={(e) => this.setState({
            user: {
              ...this.state.user,
              username: e.target.value
            }
          })}
        />
        <input id="password"
          datatype="password"
          type="password"
          placeholder="Password*"
          value={this.state.user.password}
          onChange={(e) => this.setState({
            user: {
              ...this.state.user,
              password: e.target.value
            }
          })}
        />
        <input id="first"
          datatype="first_name"
          type="text"
          placeholder="First Name*"
          value={this.state.user.firstName}
          onChange={(e) => this.setState({
            user: {
              ...this.state.user,
              firstName: e.target.value
            }
          })}
          required/>
        <input id="last"
          datatype="last_name"
          type="text"
          placeholder="Last Name*"
          value={this.state.user.lastName}
          onChange={(e) => this.setState({
            user: {
              ...this.state.user,
              lastName: e.target.value
            }
          })}
          required/>
        <input type="submit"
          className="button button--register"
          value="Create an account"
          onClick={this.register}
        />
      </form>
    )
  }
}