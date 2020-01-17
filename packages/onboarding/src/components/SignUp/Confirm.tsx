import React from 'react';
import { ConfirmWrapper, ConfirmHeader, ConfirmText } from './styles';
import { MainImage } from './styles';
import { IMAGES_PATH } from '../../commons/constants';

const Confirm = () => {
  return (
    <ConfirmWrapper>
      <MainImage src={`${IMAGES_PATH}check.svg`} />
      <ConfirmHeader>Check your inbox!</ConfirmHeader>
      <ConfirmText>
        We've sent a confirmation to your inbox to verify your email and instructions for the next steps.
      </ConfirmText>
    </ConfirmWrapper>
  );
};

export default Confirm;
