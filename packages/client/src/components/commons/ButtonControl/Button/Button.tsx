import React from 'react';
import { ButtonStyled } from './styles';

const Button = ({ text, onClick, disabled = false, idAttr, className }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled} id={idAttr} className={className}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
