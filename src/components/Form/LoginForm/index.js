import '../styles.scss';
import React from 'react';

export default class LoginForm extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
    }
  };

  login = (e) => {
    e.preventDefault();
    // const location = document.location.host;
    const path = `http://localhost:8080/prattle/rest/user/signin`;
    fetch(path, {
      method: 'POST',
      body: JSON.stringify(this.state.user),
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'mode':'no-cors'
      }
    }).then(res => {
      if (!res.ok) {
        alert('Login failed');
        const err = `<p>Something went wrong</p>`;
        document.getElementsByClassName('form').append(err);
      } else {
        alert('Login successful!');
      }
    })
  }

  render() {
    return (
    <form className="form" action="post" autocomplete="off">
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
      <input type="submit"
        className="button button--signup"
        value="Login"
        id="signup"
        onClick={this.login}
      />
    </form>
    )
  }
}