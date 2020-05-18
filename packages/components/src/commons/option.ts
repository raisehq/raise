export interface Option {
  key: string;
  value: any;
  text: string;
}

export interface ControlProps {
  value: number;
  options: Option[];
  onSelect: React.Dispatch<any>;
  disabled?: boolean;
}
