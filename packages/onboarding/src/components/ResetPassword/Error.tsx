import React, { useContext } from 'react';
import {
  ConfirmWrapper,
  ConfirmHeader,
  OnboardButton,
  MainImage
} from '../styles';
import { AppContext } from '../App';
import useImages from '../../hooks/useImages';

const ResetPasswordError = () => {
  const { onSetStep }: any = useContext(AppContext);
  const getImagesUrl = useImages();

  return (
    <ConfirmWrapper>
      <MainImage src={`${getImagesUrl}img_tokenerror.png`} />
      <ConfirmHeader>Ups!</ConfirmHeader>
      <p>Something went wrong!</p>
      <OnboardButton onClick={onSetStep('Reset')}>Try again</OnboardButton>
    </ConfirmWrapper>
  );
};

export default ResetPasswordError;
