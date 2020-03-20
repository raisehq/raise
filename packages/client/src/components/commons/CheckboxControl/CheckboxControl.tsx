import React from 'react';
import { CheckboxStyled, CheckboxLabel } from './styles';

const CheckboxControl = ({ label, size = 'big', ...rest }) => {
  return <CheckboxStyled label={<CheckboxLabel>{label}</CheckboxLabel>} size={size} {...rest} />;
};

export default CheckboxControl;
