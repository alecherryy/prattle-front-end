import './styles.scss';
import React from 'react';

const Message = ({from, content, date}) => {
  return (
    <div className="message by-user">
      <h5>{from}</h5>
      <div className="message__content">
        {content}
      </div>
      <span className="message__date">{date}</span>
    </div>
  );
}

export default Message;