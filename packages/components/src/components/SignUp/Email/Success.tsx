import React from 'react';
import {
  SignUpResponseContainer,
  SingUpResponseImage,
  SignUpResponseTitle,
  SignUpResponseSubText,
} from '../styles';

const Success = () => {
  return (
    <SignUpResponseContainer>
      <SingUpResponseImage
        src={`${process.env.REACT_APP_HOST_IMAGES}/images/check.svg`}
      />
      <SignUpResponseTitle>Check your email</SignUpResponseTitle>
      <SignUpResponseSubText>
        We&apos;ve sent a confirmation to your inbox to verify your email and
        instructions for the next steps.
      </SignUpResponseSubText>
    </SignUpResponseContainer>
  );
};

export default Success;
