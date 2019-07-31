import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage } from '../styles';
import { getImages } from '../../utils';

const Verifying = () => (
  <ConfirmWrapper>
    <MainImage src={getImages('img_mailverify.png')} />
    <ConfirmHeader>WAIT A MOMENT</ConfirmHeader>
  </ConfirmWrapper>
);

export default Verifying;
