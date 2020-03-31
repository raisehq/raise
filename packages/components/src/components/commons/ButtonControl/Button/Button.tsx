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
}

const Button: React.SFC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  idAttr,
  className,
  type,
  size,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      id={idAttr}
      className={className}
      type={type}
      size={size}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
