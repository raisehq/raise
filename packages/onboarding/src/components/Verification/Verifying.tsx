import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage } from '../styles';
import { IMAGES_PATH } from '../../commons/constants';

const Verifying = () => (
  <ConfirmWrapper>
    <MainImage src={`${IMAGES_PATH}img_mailverify.png`} />
    <ConfirmHeader>WAIT A MOMENT</ConfirmHeader>
  </ConfirmWrapper>
);

export default Verifying;
