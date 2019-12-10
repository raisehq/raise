import React, { useContext } from 'react';
import { ConfirmWrapper, ConfirmHeader, OnboardButton, MainImage } from '../styles';
import { IMAGES_PATH } from '../../commons/constants';
import AppContext from '../App.context';

const ResetPasswordError = () => {
  const { onSetStep }: any = useContext(AppContext);

  return (
    <ConfirmWrapper>
      <MainImage src={`${IMAGES_PATH}img_tokenerror.png`} />
      <ConfirmHeader>Ups!</ConfirmHeader>
      <p>Something went wrong!</p>
      <OnboardButton onClick={onSetStep('Passwords')}>Try again</OnboardButton>
    </ConfirmWrapper>
  );
};

export default ResetPasswordError;
