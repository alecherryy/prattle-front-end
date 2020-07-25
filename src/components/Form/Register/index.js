import '../styles.scss';
import React from 'react';

export default class Register extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      primaryLanguage: 'ENG'
    }
  };

  register = () => {
    let path = `https://localhost:8080/prattle/user/signup`;
    console.log(path);
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
        //TODO use history to navigate
      }
    })
  }

  render() {
    return (
      <form className="form" action="post">
        <input id="username"
          datatype="username"
          type="text"
          placeholder="Username"
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
          placeholder="Password"
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
          placeholder="First Name"
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
          placeholder="Last Name"
          value={this.state.user.lastName}
          onChange={(e) => this.setState({
            user: {
              ...this.state.user,
              lastName: e.target.value
            }
          })}
          required/>
        <select name="language"
          datatype="language_preference"
          id="language"
          value={this.state.user.primaryLanguage}
          onChange={(e) => this.setState({
            user: {
              ...this.state.user,
              primaryLanguage: e.target.value
            }
          })}>
          <option>Choose a language</option>
          <option value="ENG">English</option>
          <option value="FRE">French</option>
          <option value="ESP">Spanish</option>
        </select>
        <input type="submit"
          className="button button--signup"
          value="Create an account"
          onClick={this.register}
        />
      </form>
    )
  }
}