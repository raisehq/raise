import React from 'react';

import { BackButton, ButtonText } from './styles';

const GoBackButton = ({ onClickAction }: any) => (
  <BackButton onClick={onClickAction}>
    <ButtonText>Go back</ButtonText>
  </BackButton>
);

export default GoBackButton;
