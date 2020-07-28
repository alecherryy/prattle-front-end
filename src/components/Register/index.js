import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../PageWrapper';
import Logo from '../Logo';
import SplitLayout from '../SplitLayout';
import HeroImage from '../HeroImage';
import RegisterForm from '../Form/RegisterForm';
import Content from '../Content';

const Register = () => {
  return (
    <PageWrapper>
      <Logo />
      <SplitLayout>
        <HeroImage />
        <Content
          title="Welcome to prattle."
        >

          <RegisterForm />
          <p className="form__text">Already have an account? <Link to="/login">Login.</Link></p>
        </Content>
      </SplitLayout>
    </PageWrapper>
  );
}

export default Register;