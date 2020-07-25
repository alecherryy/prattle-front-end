import React from 'react';
import PageWrapper from '../PageWrapper';
import Logo from '../Logo';
import SplitLayout from '../SplitLayout';
import HeroImage from '../HeroImage';
import Register from '../Form/Register';
import Content from '../Content';

const SignIn = () => {
  return (
    <PageWrapper>
      <Logo />
      <SplitLayout>
        <HeroImage />
        <Content
          title="Hello,
          welcome to prattle."
        >

          <Register />
        </Content>
      </SplitLayout>
    </PageWrapper>
  );
}

export default SignIn;