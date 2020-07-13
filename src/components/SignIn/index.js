import React from 'react';
import PageWrapper from '../PageWrapper';
import Logo from '../Logo';
import SplitLayout from '../SplitLayout';
import HeroImage from '../HeroImage';
import FormSignIn from '../FormSignIn';
import Content from '../Content';

const SignIn = () => {
  return (
    <PageWrapper>
      <Logo />
      <SplitLayout>
        <HeroImage />
        <Content
          title="Welcome to prattle."
        >

          <FormSignIn />
        </Content>
      </SplitLayout>
    </PageWrapper>
  );
}

export default SignIn;