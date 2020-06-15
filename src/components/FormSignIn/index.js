import './styles.scss';
import React from 'react';
import Input from '../Input';

const FormSignIn = () => {
  return (
    <form className="form" action="post">
      <Input 
        type="text"
        placeholder="Username"
      />
      <Input 
        type="password"
        placeholder="Password"
      />
      <Input 
        type="submit"
        placeholder=""
      />
    </form>
  );
}

export default FormSignIn;