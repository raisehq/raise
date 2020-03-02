import React from 'react';
import { CheckboxStyled, CheckboxLabel } from './styles';

const CheckboxControl = ({ label, ...rest }) => {
  return <CheckboxStyled label={<CheckboxLabel>{label}</CheckboxLabel>} {...rest} />;
};

export default CheckboxControl;
