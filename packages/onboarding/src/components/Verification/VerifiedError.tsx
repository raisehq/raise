import React from 'react';
import {
  ConfirmWrapper,
  ConfirmHeader,
  OnboardButton,
  MainImage
} from '../styles';
import { updateToken } from '../../services';
import { getImages } from '../../utils';

const VerifiedError = ({ token }) => {
  const onUpdateToken = () => updateToken({ token });

  return (
    <ConfirmWrapper>
      <MainImage src={getImages('img_tokenerror.png')} />
      <ConfirmHeader>This link has expired</ConfirmHeader>
      <p>Request a new link that will be sent to your inbox</p>
      <OnboardButton onClick={onUpdateToken}>Get a new link</OnboardButton>
    </ConfirmWrapper>
  );
};

export default VerifiedError;
