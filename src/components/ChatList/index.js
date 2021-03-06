import React, { Component } from 'react';
import Teaser from '../Teaser';

class ChatList extends Component {
  state = {
    chats: []
  };

  chats = () => {
    const path = `http://${document.location.host}/prattle/rest/app/users`;
    fetch(path)
    .then(
      res => this.setState({...this.state, chats: res.data})
    );
  }

  // uncomment once API is hooked in
  // componentDidMount() {
  //   this.chats();
  // }

  render() {
    return (
      <div id={'ChatList'}>
        { this.state.chats.map((object) => { 
          return <Teaser
              key={object.username}
              name={object.name}
              username={object.username}
            />
          })
        }
      </div>
    );
  }
}
export default ChatList;