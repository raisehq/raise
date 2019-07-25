import React, { useContext } from 'react';
import {
  ConfirmWrapper,
  ConfirmHeader,
  OnboardButton,
  MainImage
} from '../styles';
import { AppContext } from '../App';

const Verified = (props: any) => {
  const { onSetStep }: any = useContext(AppContext);

  return (
    <ConfirmWrapper>
      <MainImage src="https://static.herodev.es/images/img_mailverify.png" />
      <ConfirmHeader>Account verified! </ConfirmHeader>
      <p>Login to Raise with your details to complete the sign up</p>
      <OnboardButton onClick={onSetStep('SignIn')}>Continue</OnboardButton>
    </ConfirmWrapper>
  );
};

export default Verified;
