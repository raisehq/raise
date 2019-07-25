import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage } from '../styles';

const Confirm = () => (
  <ConfirmWrapper>
    <div>
      <MainImage src="https://static.herodev.es/images/img_mail.png" />
    </div>
    <ConfirmHeader>Check your inbox!</ConfirmHeader>
    <p>We’ve sent a reset link to your inbox</p>
  </ConfirmWrapper>
);

export default Confirm;
