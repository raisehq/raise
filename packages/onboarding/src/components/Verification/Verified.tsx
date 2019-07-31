import React, { useContext } from 'react';
import {
  ConfirmWrapper,
  ConfirmHeader,
  OnboardButton,
  MainImage
} from '../styles';
import { AppContext } from '../App';
import useImages from '../../hooks/useImages';

const Verified = (props: any) => {
  const { onSetStep }: any = useContext(AppContext);

  return (
    <ConfirmWrapper>
      <MainImage src={useImages('img_mailverify.png')} />
      <ConfirmHeader>Account verified! </ConfirmHeader>
      <p>Login to Raise with your details to complete the sign up</p>
      <OnboardButton onClick={onSetStep('SignIn')}>Continue</OnboardButton>
    </ConfirmWrapper>
  );
};

export default Verified;
