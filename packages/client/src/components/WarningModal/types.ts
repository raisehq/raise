interface Warning {
  active: boolean;
  image: string;
  id: string;
  name: string;
  description: string;
  link: string;
}

export interface WarningModalProps {
  warning: Warning;
  open: boolean;
  closeModal: Function;
  setCookie: Function;
}
