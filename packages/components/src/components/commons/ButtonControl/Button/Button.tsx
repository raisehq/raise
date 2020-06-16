import React from 'react';
import { ButtonStyled, ButtonText } from './styles';
import { ButtonProps } from '../types';

const Button: React.SFC<ButtonProps> = ({
  text,
  onClick = () => null,
  disabled = false,
  idAttr,
  className,
  type = 'primary',
  size = 'standard',
  fullWidth = false,
  minWidth = false,
  children,
  ...rest
}: any) => (
  <ButtonStyled
    onClick={onClick}
    disabled={disabled}
    id={idAttr}
    className={className}
    type={type}
    size={size}
    fullWidth={fullWidth}
    minWidth={minWidth}
    {...rest}
  >
    <ButtonText size={size}>
      {text}
      {children}
    </ButtonText>
  </ButtonStyled>
);

export default Button;
