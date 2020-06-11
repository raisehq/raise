import { ReactNode } from 'react';

export interface ButtonProps {
  text?: string;
  title?: string;
  onClick?: Function;
  disabled?: boolean;
  idAttr?: string;
  className?: string;
  size?: string;
  as?: any;
  to?: any;
  fullWidth?: boolean;
  minWidth?: boolean;
  type?: string;
  children?: ReactNode | string;
}

export interface BloomButtonProps {
  text?: string;
  onClick: Function;
  disabled?: boolean;
  idAttr?: string;
  className?: string;
  size: string;
  fullWidth?: boolean;
}

export interface ButtonLinkProps extends ButtonProps {
  icon: string;
  logo: string;
}
