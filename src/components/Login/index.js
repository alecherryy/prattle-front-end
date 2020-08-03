import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../PageWrapper';
import Logo from '../Logo';
import SplitLayout from '../SplitLayout';
import HeroImage from '../HeroImage';
import LoginForm from '../Form/LoginForm';
import Content from '../Content';

const Login = () => {
  return (
    <PageWrapper>
      <Logo />
      <SplitLayout>
        <HeroImage />
          <Content
            title="Hello, welcome back."
          >
          <LoginForm />
          <p className="form__text">Don't have an account? <Link to="/register">Register.</Link></p>
        </Content>
      </SplitLayout>
    </PageWrapper>
  );
}

export default Login;