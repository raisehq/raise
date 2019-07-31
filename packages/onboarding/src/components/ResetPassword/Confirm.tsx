import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage } from '../styles';
import useImages from '../../hooks/useImages';

const Confirm = () => (
  <ConfirmWrapper>
    <div>
      <MainImage src={useImages('img_mail.png')} />
    </div>
    <ConfirmHeader>Check your inbox!</ConfirmHeader>
    <p>We’ve sent a reset link to your inbox</p>
  </ConfirmWrapper>
);

export default Confirm;
