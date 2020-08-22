import React from 'react';
import PageWrapper from '../PageWrapper';
import Logo from '../Logo';
import ColumnLayout from '../ColumnLayout';
import Send from '../Send';
import ChatList from '../ChatList';

const Chat = () => {

  return (
    <PageWrapper>
      <Logo />
      <ColumnLayout>
        <ChatList />
        <ChatList />
        <Send />
      </ColumnLayout>
    </PageWrapper>
  );
}

export default Chat;