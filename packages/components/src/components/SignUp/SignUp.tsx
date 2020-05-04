import React, { useEffect, useState } from 'react';
import {
  SignUpContainer,
  SignUpInfo,
  SignUpForm,
  SignUpText,
  RaiseLogo,
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
}: any) => {
  console.log('------------------ ', bloomSignIn);
  const [registerType, setRegisterType] = useState('email');
  useEffect(() => {
    setRegisterType('email');
  }, []);

  return (
    <SignUpContainer type={registerType}>
      {registerType === 'email' ? (
        <>
          <SignUpInfo
            background={`${process.env.REACT_APP_HOST_IMAGES}/images/redbackground.svg`}
          >
            <RaiseLogo
              src={`${process.env.REACT_APP_HOST_IMAGES}/images/logo_white.svg`}
            />
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
        </>
      ) : (
        <BloomSignUp
          SignUpId={SignUpId}
          onBack={() => setRegisterType('email')}
          onBloomSignUp={onBloomSignUp}
          bloomSignIn={bloomSignIn}
          redirectFromBloomApp={redirectFromBloomApp}
        />
      )}
    </SignUpContainer>
  );
};

export default SignUp;
