import './styles.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Send extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
  }

  state = {
    object: {
      message: {
        type: '',
        from: '',
        to: '',
        content: '',
        status: false
      }
    },
    isDisabled: true
  };

  render() {
    return (
      <form 
        className="chat-input" 
        action="." 
        onSubmit={e => {
          e.preventDefault()
          this.props.onSendMessage(this.state.object)
          this.setState({ 
            object: {
              message: {
                ...this.state.message,
                type: '',
                from: '',
                to: '',
                content: '',
                status: false
              }
            }
          })
        }}>
        <label className="chat-input__toggle">
          Set message to private
          <input 
            type="checkbox" 
            id="Private" 
            data-private="false"
            checked={this.state.object.message.status}
            onChange={() => this.setState({
              object: {
                message: {
                  ...this.state.object.message,
                  status: !this.state.object.message.status
                }
              }
            })}
          />
          <span className="chat-input__indicator"></span>
        </label>
        <input 
          id="MessageContent"
          datatype="content"
          type="text"
          placeholder="Type a message..."
          autoComplete="off"
          value={this.state.object.message.content}
          onChange={(e) => this.setState({
            object: {
              message: {
                ...this.state.object.message,
                content: e.target.value
              }
            },
            isDisabled: false
          })}
        />
        <input 
          id="File"
          type="file"
          className="button button--file"
          placeholder="Upload a file"
        />
        <input 
          type="submit"
          className="button button--send"
          value="Send message"
          disabled={this.state.isDisabled}
        />
      </form>
    )
  }
}

export default Send;