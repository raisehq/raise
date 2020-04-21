import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage } from '../styles';
import { IMAGES_PATH } from '../../commons/constants';

const Confirm = () => (
  <ConfirmWrapper>
    <div>
      <MainImage src={`${IMAGES_PATH}img_mail.png`} />
    </div>
    <ConfirmHeader>Check your inbox!</ConfirmHeader>
    <p>We’ve sent a reset link to your inbox</p>
  </ConfirmWrapper>
);

export default Confirm;
