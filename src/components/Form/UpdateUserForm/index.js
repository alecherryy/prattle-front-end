import '../styles.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';

class UpdateUserForm extends Component {
  state = {
    user: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    }
  };

  user = () => {
    const path = `http://${document.location.host}/prattle/rest/user/update/${username}`;

    fetch(path, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      }
    }).then(res => {
      if (!res.ok) {
        console.log(res);
        alert('Registration failed');
      } else {
        alert('Your account was successfully created!');
      }
    })
  }
  
  update = (e) => {
    e.preventDefault();
    const path = `http://${document.location.host}/user/register`;
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
        history.push('/chat'); // or res.json()
      }
    })
  }

  delete = () => {
    const path = `http://${document.location.host}/prattle/rest/user/delete/${username}`;
    const history = useHistory();

    // posting the user to db
    fetch(path, {
      method: 'DELETE',
      body: JSON.stringify('alecherryy'),
    })
    .then(res => res.text())
    .then(res => {
      // redirect user to register page
      history.push('/login'); // or res.json()
    })
  };

  componentDidMount() {
    this.user();
  }

  render() {
    return (
      <form className="form" action="post" autoComplete="off">
        <input 
          disabled
          id="username"
          datatype="username"
          type="text"
          value={this.state.user.username}
          onChange={(e) => this.setState({
            user: {
              ...this.state.user,
              username: e.target.value
            }
          })}
        />
        <input 
          id="password"
          datatype="password"
          type="password"
          value={this.state.user.password}
          required
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
          required
          value={this.state.user.firstName}
          onChange={(e) => this.setState({
            user: {
              ...this.state.user,
              firstName: e.target.value
            }
          })}/>
        <input id="last"
          datatype="last_name"
          type="text"
          placeholder="Last Name*"
          value={this.state.user.lastName}
          required
          onChange={(e) => this.setState({
            user: {
              ...this.state.user,
              lastName: e.target.value
            }
          })}/>
        <input type="submit"
          className="button button--update"
          value="Update account"
          required
          onClick={this.register}
        />
        <button className="form__link" onClick={this.delete}>Delete account</button>
      </form>
    )
  }
}

export default UpdateUserForm;