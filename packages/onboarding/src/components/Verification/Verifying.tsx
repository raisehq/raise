import React from 'react';
import { ConfirmWrapper, ConfirmHeader, MainImage } from '../styles';
import useImages from '../../hooks/useImages';

const Verifying = () => {
  const getImagesUrl = useImages();
  
  return (
  <ConfirmWrapper>
    <MainImage src={`${getImagesUrl}img_mailverify.png`} />
    <ConfirmHeader>WAIT A MOMENT</ConfirmHeader>
  </ConfirmWrapper>
);
};

export default Verifying;
