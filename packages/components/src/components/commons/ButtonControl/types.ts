export interface ButtonProps {
  text?: string;
  onClick: Function;
  disabled?: boolean;
  idAttr?: string;
  className?: string;
  size: string;
  as?: any;
  to?: any;
  fullWidth?: boolean;
  type: string;
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
}
