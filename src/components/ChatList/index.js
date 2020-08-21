import React from 'react';
import Teaser from '../Teaser';

const ChatList = ({id, chats}) => {

  return (
    <div id={id}>
      { clients.map(function(object, i) { 
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

export default ChatList;