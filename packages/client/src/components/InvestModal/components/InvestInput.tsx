import React from 'react';
import styled from 'styled-components';
import { Card } from '@raisehq/components';
import { fromWei } from 'web3-utils';
import { InvestHeader, InvestorBalance } from '../InvestModal.styles';
import LoanInput from '../../CreateLoan/LoanInput';

const BigInput = styled(LoanInput)`
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
`;

const InvestInput = ({ loan, coin, balance, value, setValue }) => {
  const { principal, maxAmount } = loan;

  const fundAll = () => {
    const nMaxAmount = Number(fromWei(maxAmount));
    const nPrincipal = nMaxAmount - Number(fromWei(principal));
    const minValue = Math.min(...[balance, nPrincipal]);
    setValue(minValue);
  };

  const onSetValue = v => {
    if (v < 0) {
      return setValue(0);
    }
    return setValue(v);
  };

  return (
    <Card size="310px" width="400px">
      <Card.Content>
        <InvestHeader>How much you would like to invest?</InvestHeader>
        <InvestorBalance coin={coin} balance={balance} id="btn-invest-all" onClick={fundAll} />
        <BigInput
          id="input-invest-value"
          value={value}
          onValueChange={onSetValue}
          coinIcon={coin?.icon || null}
        />
      </Card.Content>
    </Card>
  );
};

export default InvestInput;
