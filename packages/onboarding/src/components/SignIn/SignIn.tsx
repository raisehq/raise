import React from 'react';
import { ChooseMethodWrapper } from './styles';
import AuthenticationMethods from '../AuthenticationMethods/AuthenticationMethods';

const Signin = () => {
  return (
      <AuthenticationMethods method={'Sign In'} />
  );
};

export default Signin;
