import React from 'react';
import PageWrapper from '../PageWrapper';
import Logo from '../Logo';
import SplitLayout from '../SplitLayout';
import HeroImage from '../HeroImage';
import Login from '../Form/Login';
import Content from '../Content';

const SignIn = () => {
  return (
    <PageWrapper>
      <Logo />
      <SplitLayout>
        <HeroImage />
        <Content
          title="Hello,
          welcome back."
        >

          <Login />
        </Content>
      </SplitLayout>
    </PageWrapper>
  );
}

export default SignIn;