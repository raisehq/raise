import React from 'react';
import { LoanInputBox } from './TokenInput.styles';
import LoanInput from '../CreateLoan/LoanInput';
import Coin from '../Coin';
import numeral from '../../commons/numeral';

interface TokenInputProps {
  id?: string;
  value?: number;
  onValueChange?: any;
  onBlur?: any;
  numeralFormat?: string;
  error?: boolean;
  error_msg?: any;
  decimalScale?: number;
  displayType?: string;
  coinIcon: string;
}

const TokenInput: React.SFC<TokenInputProps> = ({
  onValueChange: onChange,
  displayType,
  value,
  coinIcon,
  ...props
}) => {
  const onValueChange = ({ floatValue }) => (onChange ? onChange(floatValue) : undefined);
  return (
    <LoanInputBox>
      {displayType === 'text' ? (
        <span>{numeral(value).format()}</span>
      ) : (
        <LoanInput value={value} onValueChange={onValueChange} {...props} />
      )}
      <Coin src={`${process.env.REACT_APP_HOST_IMAGES}/images/coins/${coinIcon}`} />
    </LoanInputBox>
  );
};

export default TokenInput;
