import React from 'react';
import { InputFieldStyled } from '../styles';

const InputText = ({ placeholder = 'Type here', disabled = false }) => {
  return <InputFieldStyled placeholder={placeholder} disabled={disabled} />;
};

export default InputText;
