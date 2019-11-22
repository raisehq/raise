import React, { useContext } from 'react';
import { ConfirmWrapper, ConfirmHeader, OnboardButton, MainImage, ConfirmText } from '../styles';
import { IMAGES_PATH } from '../../commons/constants';
import AppContext from '../App.context';

const Verified = () => {
  const { onSetStep }: any = useContext(AppContext);

  return (
    <ConfirmWrapper>
      <MainImage src={`${IMAGES_PATH}img_mailverify.png`} />
      <ConfirmHeader>Email verified! </ConfirmHeader>
      <ConfirmText>Login to complete your sign up</ConfirmText>
      <OnboardButton onClick={onSetStep('SignIn')}>Log in</OnboardButton>
    </ConfirmWrapper>
  );
};

export default Verified;
