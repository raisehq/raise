import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage } from '../styles';
import { getImages } from '../../utils';
const Confirm = () => (
  <ConfirmWrapper>
    <div>
      <MainImage src={getImages('img_mail.png')} />
    </div>
    <ConfirmHeader>Check your inbox!</ConfirmHeader>
    <p>
      We've sent a confirmation to your inbox to verify your email and
      instructions for the next steps.
    </p>
  </ConfirmWrapper>
);

export default Confirm;
