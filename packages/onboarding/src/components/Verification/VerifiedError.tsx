import React, { useContext } from 'react';
import {
  ConfirmWrapper,
  ConfirmHeader,
  OnboardButton,
  MainImage
} from '../styles';
import { updateToken } from '../../services';
import useImages from '../../hooks/useImages';
import { AppContext } from '../App';

const VerifiedError = ({ token }) => {
  const { onResetToken }: any = useContext(AppContext);
  
  const onUpdateToken = async () => {
    await updateToken(token)
    await onResetToken()
  }
  
  const getImagesUrl = useImages();

  return (
    <ConfirmWrapper>
      <MainImage src={`${getImagesUrl}img_tokenerror.png`} />
      <ConfirmHeader>This link has expired</ConfirmHeader>
      <p>Request a new link that will be sent to your inbox</p>
      <OnboardButton onClick={onUpdateToken}>Get a new link</OnboardButton>
    </ConfirmWrapper>
  );
};

export default VerifiedError;
