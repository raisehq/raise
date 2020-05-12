import React, { useEffect, useState } from 'react';
import {
  SignUpContainer,
  SignUpInfo,
  SignUpForm,
  SignUpText,
  RaiseLogo,
  BloomContainer
} from './styles';
import EmailSignUp from './Email';
import BloomSignUp from './Bloom';

const SignUp = ({
  SignUpId,
  onSignUp,
  checkEmail,
  redirectFromBloomApp,
  bloomSignIn,
  onBloomSignUp,
  isUserSignedUp,
  onBloomError
}: any) => {
  const [registerType, setRegisterType] = useState('email');
  useEffect(() => {
    setRegisterType('email');
  }, []);

  if (registerType === 'email') {
    return (
      <SignUpContainer type={registerType}>
        <SignUpInfo background={`${process.env.REACT_APP_HOST_IMAGES}/images/redbackground.svg`}>
          <RaiseLogo src={`${process.env.REACT_APP_HOST_IMAGES}/images/logo_white.svg`} />
          <SignUpText>Create an account and start investing now</SignUpText>
        </SignUpInfo>
        <SignUpForm>
          <EmailSignUp
            SignUpId={SignUpId}
            onSignUp={onSignUp}
            checkEmail={checkEmail}
            bloomAction={() => setRegisterType('bloom')}
          />
        </SignUpForm>
      </SignUpContainer>
    );
  }
  return (
    <BloomContainer>
      <BloomSignUp
        SignUpId={SignUpId}
        onBack={() => setRegisterType('email')}
        onBloomSignUp={onBloomSignUp}
        bloomSignIn={bloomSignIn}
        redirectFromBloomApp={redirectFromBloomApp}
        isUserSignedUp={isUserSignedUp}
        onBloomError={onBloomError}
      />
    </BloomContainer>
  );
};

export default SignUp;
