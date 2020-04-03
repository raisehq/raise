import React from 'react';
import { ButtonStyled, ButtonContent } from './styles';
import { ButtonLinkProps } from '../types';
import { Image } from 'semantic-ui-react';

const ButtonLink: React.SFC<ButtonLinkProps> = ({
  text,
  onClick,
  disabled = false,
  idAttr,
  className,
  type,
  size,
  fullWidth = false,
  icon,
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
      <ButtonContent>
        <span>{text}</span>
        <Image
          src={`${process.env.REACT_APP_HOST_IMAGES}/images/${icon}`}
          size="tiny"
        />
      </ButtonContent>
    </ButtonStyled>
  );
};

export default ButtonLink;
