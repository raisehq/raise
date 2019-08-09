import React, { useContext } from 'react';
import {
  ConfirmWrapper,
  ConfirmHeader,
  OnboardButton,
  MainImage,
  ConfirmText
} from '../styles';
import { AppContext } from '../App';
import useImages from '../../hooks/useImages';

const Verified = (props: any) => {
  const { onSetStep }: any = useContext(AppContext);
  const getImagesUrl = useImages();

  return (
    <ConfirmWrapper>
      <MainImage src={`${getImagesUrl}img_mailverify.png`} />
      <ConfirmHeader>Email verified! </ConfirmHeader>
      <ConfirmText>Login to complete your sign up</ConfirmText>
      <OnboardButton onClick={onSetStep('SignIn')}>Log in</OnboardButton>
    </ConfirmWrapper>
  );
};

export default Verified;
