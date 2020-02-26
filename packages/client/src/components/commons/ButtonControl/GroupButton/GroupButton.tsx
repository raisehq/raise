import React from 'react';
import { ButtonStyledGroup, ButtonStyled } from './styles';

const GroupButton = () => {
  return (
    <ButtonStyledGroup>
      <ButtonStyled>One</ButtonStyled>
      <ButtonStyled>Two</ButtonStyled>
      <ButtonStyled>Three</ButtonStyled>
    </ButtonStyledGroup>
  );
};

export default GroupButton;
