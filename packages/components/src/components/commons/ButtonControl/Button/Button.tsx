import React from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
  text?: string;
  onClick: Function;
  disabled?: boolean;
  idAttr?: string;
  className?: string;
  type: string;
  size: string;
  as?: any;
  to?: any;
  fullWidth?: boolean;
}

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
}) => {
  return (
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
};

export default Button;
