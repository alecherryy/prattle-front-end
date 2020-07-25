import '../styles.scss';
import React from 'react';

export default class Login extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
    }
  };

  login = () => {
    let path = `https://localhost:8080/prattle/user/signin`;
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
        alert('Login failed');
      } else {
        alert('Login successful!');
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
        <input type="submit"
          className="button button--signup"
          value="Login"
          id="signup"
          onClick={this.register}
        />
    </form>
    )
  }
}