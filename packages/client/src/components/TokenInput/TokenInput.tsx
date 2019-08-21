import React from 'react';
import { LoanInputBox } from './TokenInput.styles';
import LoanInput from '../CreateLoan/LoanInput';
import Coin from '../Coin';

interface TokenInputProps {
  value?: any;
  onValueChange?: any;
  onBlur?: any;
  numeralFormat?: any;
  error?: any;
  error_msg?: any;
}

const TokenInput: React.SFC<TokenInputProps> = ({
  value,
  onValueChange,
  onBlur,
  numeralFormat,
  error,
  error_msg
}) => (
  <LoanInputBox>
    <LoanInput
      value={value}
      onValueChange={onValueChange}
      onBlur={onBlur}
      fmt={numeralFormat}
    />
    <Coin
      src={`${process.env.REACT_APP_HOST_IMAGES}/images/ico_dai.svg`}
      name="DAI"
    />
  </LoanInputBox>
);

export default TokenInput;
