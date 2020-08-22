import React, { Component } from 'react';
import ColumnLayout from '../../ColumnLayout';
import ChatList from '../../ChatList';
import ChatWindow from '../../ChatWindow';
import PageContent from '../../PageContent';
import Alert from '../../Alert';

const URL = `ws://${document.location.host}/chat`;

class Chat extends Component {
  state = {
    startSession: true,
    from: '',
    messages: []
  }

  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      this.setState({
        startSession: true,
        messages: []
      })
    }

    this.ws.onmessage = event => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(event.data)
      this.addMessage(message);
    }

    this.ws.onclose = () => {
      // automatically try to reconnect on connection loss
      this.setState({
        startSession: false,
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message => {
    this.setState(state => ({ messages: [message, ...state.messages] }))
  }

  sendMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { from: this.state.from, message: messageString }
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  }

  render() {
    const isOnline = this.state.startSession;
    const messagesSent = this.state.messages;

    return (
      <PageContent>
        { isOnline
          ? <Alert username="josibake" userIsOnline={true} />
          : <Alert username="josibake" userIsOnline={false} />
        }
        <ColumnLayout>
          <ChatList />
          <ChatList />
          <ChatWindow
            messages={messagesSent}
            onSendMessage={messageContent => this.sendMessage(messageContent)}
          />
        </ColumnLayout>
      </PageContent>
    );
  }

}

export default Chat;