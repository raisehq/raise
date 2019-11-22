import React, { useContext } from 'react';
import { ConfirmWrapper, ConfirmHeader, OnboardButton, MainImage } from '../styles';
import { updateToken } from '../../services';
import { IMAGES_PATH } from '../../commons/constants';
import AppContext from '../App.context';

const VerifiedError = ({ token }: any) => {
  const { onResetToken }: any = useContext(AppContext);

  const onUpdateToken = async () => {
    await updateToken(token);
    await onResetToken();
  };

  return (
    <ConfirmWrapper>
      <MainImage src={`${IMAGES_PATH}img_tokenerror.png`} />
      <ConfirmHeader>This link has expired</ConfirmHeader>
      <p>Request a new link that will be sent to your inbox</p>
      <OnboardButton onClick={onUpdateToken}>Get a new link</OnboardButton>
    </ConfirmWrapper>
  );
};

export default VerifiedError;
