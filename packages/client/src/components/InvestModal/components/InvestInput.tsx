import React from 'react';
import styled from 'styled-components';
import { Card } from '@raisehq/components';
import { fromWei } from 'web3-utils';
import { InvestHeader, InvestorBalance } from '../InvestModal.styles';
import LoanInput from '../../CreateLoan/LoanInput';

const BigInput = styled(LoanInput)`
  margin-top: 34px;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  color: #00da9e;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: block;
  border: none !important;
  margin-right: 5px;
  box-sizing: border-box;
  background: none !important;
  text-decoration: underline;

  outline: none;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    /* Edge */
    color: #c5c7cb;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c5c7cb;
  }

  &::placeholder {
    color: #c5c7cb;
  }
`;

const InvestInput = ({ loan, coin, balance, value, setValue, ...props }) => {
  const { principal, maxAmount } = loan;

  const fundAll = () => {
    const nMaxAmount = Number(fromWei(maxAmount));
    const nPrincipal = nMaxAmount - Number(fromWei(principal));
    const minValue = Math.min(...[balance, nPrincipal]);
    setValue(minValue);
  };

  const onSetValue = v => {
    if (v.floatValue < 0) {
      return setValue(0);
    }
    return setValue(v.floatValue);
  };

  const readValue = value > 0 ? value : null;
  return (
    <Card size="310px" width="400px" {...props}>
      <InvestHeader>How much you would like to invest?</InvestHeader>
      <InvestorBalance coin={coin} balance={balance} id="btn-invest-all" onClick={fundAll} />
      <BigInput
        autocomplete="off"
        id="input-invest-value"
        placeholder="0.00"
        value={readValue}
        onValueChange={onSetValue}
      />
    </Card>
  );
};

export default InvestInput;
