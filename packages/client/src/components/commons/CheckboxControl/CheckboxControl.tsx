import React from 'react';
import { CheckboxStyled, CheckboxLabel } from './styles';

const CheckboxControl = ({ label }) => {
  return <CheckboxStyled label={<CheckboxLabel>{label}</CheckboxLabel>} />;
};

export default CheckboxControl;
