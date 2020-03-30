import React from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
  text?: string;
  onClick: Function;
  disabled: boolean;
  idAttr?: string;
  className?: string;
}

const Button: React.SFC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  idAttr,
  className,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      id={idAttr}
      className={className}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
