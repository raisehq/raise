import React from 'react';
import { CheckboxStyled, CheckboxLabel } from './styles';

interface CheckBoxControlProps {
  label?: any;
  size?: string;
  id?: string;
  onChange?: Function;
}

const CheckboxControl: React.SFC<CheckBoxControlProps> = ({
  label,
  size = 'big',
  ...rest
}: any) => (
  <CheckboxStyled
    label={<CheckboxLabel>{label}</CheckboxLabel>}
    size={size}
    {...rest}
  />
);

export default CheckboxControl;
