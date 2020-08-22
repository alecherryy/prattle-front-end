import React from 'react';
import { Link } from 'react-router-dom';
import SplitLayout from '../SplitLayout';
import HeroImage from '../HeroImage';
import RegisterForm from '../Form/RegisterForm';
import Content from '../Content';

const Register = () => {
  return (
    <SplitLayout>
      <HeroImage />
      <Content
        title="Welcome to prattle."
      >
        <RegisterForm />
        <p className="form__text">Already have an account? <Link to="/login">Login.</Link></p>
      </Content>
    </SplitLayout>
  );
}

export default Register;