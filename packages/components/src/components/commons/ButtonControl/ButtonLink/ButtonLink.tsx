import React from 'react';
import { Image } from 'semantic-ui-react';
import { ButtonStyled, ButtonContent, LeftSide } from './styles';
import { ButtonLinkProps } from '../types';

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
  logo,
  center = false,
  ...rest
}: ButtonLinkProps) => (
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
      <LeftSide center={center}>
        <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/${logo}`} size="tiny" />
        <span>{text}</span>
      </LeftSide>
      {icon && <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/${icon}`} size="tiny" />}
    </ButtonContent>
  </ButtonStyled>
);

export default ButtonLink;
