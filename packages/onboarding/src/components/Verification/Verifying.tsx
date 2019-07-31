import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage } from '../styles';
import useImages from '../../hooks/useImages';

const Verifying = () => (
  <ConfirmWrapper>
    <MainImage src={useImages('img_mailverify.png')} />
    <ConfirmHeader>WAIT A MOMENT</ConfirmHeader>
  </ConfirmWrapper>
);

export default Verifying;
