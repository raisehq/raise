import React, { useContext } from 'react';
import {
  ConfirmWrapper,
  ConfirmHeader,
  OnboardButton,
  MainImage
} from '../styles';
import { AppContext } from '../App';

const ResetPasswordOK = () => {
  const { onSetStep }: any = useContext(AppContext);

  return (
    <ConfirmWrapper>
      <MainImage src="https://static.herodev.es/images/img_mailverify.png" />
      <ConfirmHeader>Password updated! </ConfirmHeader>
      <p>Your password has been updated</p>
      <OnboardButton onClick={onSetStep('SignIn')}>Continue</OnboardButton>
    </ConfirmWrapper>
  );
};

export default ResetPasswordOK;
