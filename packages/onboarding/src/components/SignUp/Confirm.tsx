import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage, ConfirmText } from '../styles';
import { IMAGES_PATH } from '../../commons/constants';

const Confirm = () => {
  return (
    <ConfirmWrapper>
      <div>
        <MainImage src={`${IMAGES_PATH}img_mail.png`} />
      </div>
      <ConfirmHeader>Check your inbox!</ConfirmHeader>
      <ConfirmText>
        We've sent a confirmation to your inbox to verify your email and instructions for the next
        steps.
      </ConfirmText>
    </ConfirmWrapper>
  );
};

export default Confirm;
