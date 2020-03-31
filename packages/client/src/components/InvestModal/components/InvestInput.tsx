import React from 'react';
import styled from 'styled-components';
import { Card as RaiseCard } from '@raisehq/components';
import { fromWei } from 'web3-utils';
import { InvestHeader, InvestorBalance } from '../InvestModal.styles';
import LoanInput from '../../CreateLoan/LoanInput';
import CoinSelectorRaw from '../../CoinSelector';

const CoinSelector = styled(CoinSelectorRaw)``;

const Card = styled(RaiseCard)`
  display: flex;
  align-items: center;
`;

const BalanceWrapper = styled.div`
  width: 100%;
  margin-top: 40px;

  &&&& ${CoinSelector} {
    max-width: 100%;
  }
  &&&& .ui.selection.dropdown > .dropdown.icon {
    margin: unset;
    top: unset;
    padding: unset;
  }
`;

const BigInput = styled(LoanInput)`
  font-size: 48px;
  line-height: 56px;
  text-align: ${({ value }) => (value ? 'center' : 'left')};
  width: ${({ value }) => (value ? '100%' : '100px')};
  color: #00da9e;
  margin: 34px auto 0px auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  display: block;
  border: none !important;
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
    text-align: center;
  }
`;

const InvestInput = ({ loan, coin, balance, value, setValue, selectedCoin, setCoin, ...props }) => {
  const { principal, maxAmount } = loan;

  const handleChange = (e, { value }) => {
    setCoin(value);
  };

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
      <BalanceWrapper>
        <CoinSelector value={selectedCoin} onChange={handleChange} />
        <InvestorBalance coin={coin} balance={balance} id="btn-invest-all" onClick={fundAll} />
      </BalanceWrapper>
      <BigInput
        autoComplete="off"
        id="input-invest-value"
        placeholder="0.00"
        value={readValue}
        onValueChange={onSetValue}
      />
    </Card>
  );
};

export default InvestInput;
