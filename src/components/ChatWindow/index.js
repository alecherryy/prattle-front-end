import './styles.scss';
import React, { Component } from 'react';
import Send from '../Send';
import Message from '../Message';

class ChatWindow extends Component {
  state = {
    messages: []
  }
  
  componentDidMount() {
    this.setState(state => ({
      messages: this.props.messages
    }));
  }

  render() {
    return (
      <div className="chat-window">
        <div class="chat-window__messages">
          {this.state.messages.map((message, i) => 
            <Message
              key={i}
              from={message.username}
              content={message.content}
              date={message.date}
            />,
          )}
        </div>
        <Send 
          ws={this.ws}
          onSendMessage={this.props.onSendMessage}
        />
      </div>
    );
  }
}

export default ChatWindow;