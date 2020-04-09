import React from 'react';
import { ButtonStyled } from './styles';
import { ButtonProps } from '../types';

const Button: React.SFC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  idAttr,
  className,
  type,
  size,
  fullWidth = false,
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
    {...rest}
  >
    {text}
  </ButtonStyled>
);

export default Button;
