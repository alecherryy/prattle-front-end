import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types'

export default class Send extends React.Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }

  state = {
    message: {
      from: '',
      content: '',
    }
  };

  render() {
    return (
      <form 
        className="chat-input" 
        action="." 
        onSubmit={e => {
          e.preventDefault()
          this.props.onSendMessage(this.state.message)
          this.setState({ message: '' })
        }}>
        <label class="chat-input__toggle">
          Set message to private
          <input type="checkbox" id="Private" data-private="false" />
          <span class="chat-input__indicator"></span>
        </label>
        <input id="MessageContent"
          datatype="content"
          type="text"
          placeholder="Type a message..."
          onChange={(e) => this.setState({
            user: {
              ...this.state.message,
              content: e.target.value
            }
          })}
        />
        <input 
          id="File"
          type="file"
          className="button button--file"
          placeholder="Upload a file"
        />
        <input type="submit"
          className="button button--send"
          value="Send message"
        />
      </form>
    )
  }
}