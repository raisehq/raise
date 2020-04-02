import React from 'react';
import { ButtonStyled, ButtonContent } from './styles';
import { Image } from 'semantic-ui-react';

interface ButtonProps {
  text?: string;
  onClick: Function;
  disabled?: boolean;
  idAttr?: string;
  className?: string;
  size: string;
  as?: any;
  to?: any;
  fullWidth?: boolean;
}

const BloomButton: React.SFC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  idAttr,
  className,
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
      size={size}
      fullWidth={fullWidth}
      {...rest}
    >
      <ButtonContent>
        <span>{text}</span>
        <Image
          src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`}
          size="tiny"
        />
      </ButtonContent>
    </ButtonStyled>
  );
};

export default BloomButton;
