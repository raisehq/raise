import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage } from '../styles';

const Verifying = () => (
  <ConfirmWrapper>
    <MainImage src="https://static.herodev.es/images/img_mailverify.png" />
    <ConfirmHeader>WAIT A MOMENT</ConfirmHeader>
  </ConfirmWrapper>
);

export default Verifying;
