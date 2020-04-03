import React from 'react';
import styled from 'styled-components';
import { Card as RaiseCard } from '@raisehq/components';
import { tradeExactTokensForTokens } from 'unsiwap';
import { fromWei } from 'web3-utils';
import { InvestHeader } from '../InvestModal.styles';
import LoanInput from '../../CreateLoan/LoanInput';
import CoinSelectorRaw from '../../CoinSelector';
import RawCoin from '../../Coin';
import MaxInputsRaw from './MaxInputs';

const MaxInputs = styled(MaxInputsRaw)`
  margin-top: 39px;
`;

const CoinSelector = styled(CoinSelectorRaw)`
  max-width: 100%;
  width: 100%;
  height: 48px;
`;

const Coin = styled(RawCoin)``;

const Card = styled(RaiseCard)`
  display: flex;
  align-items: center;
`;

const InvestBox = styled.div`
  font-size: 16px;
  color: #8a8e97;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 34px auto 0px auto;

  &&&&&&&&&&&&&&&&&& ${Coin} {
    font-size: 16px;
    color: #8a8e97;
    font-weight: normal;
  }
`;

const BalanceWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  &&&& ${CoinSelector} {
    max-width: 100%;
  }
  &&&& .ui.selection.dropdown > .dropdown.icon {
    top: unset;
    padding: unset;
    right: unset;
    position: unset;
    margin: 0px 0px 0px 17px;
  }
  & > div:first-child {
    margin-bottom: 6px;
    font-weight: bold;
    color: #8a8e97;
  }
`;

const BigInput = styled(LoanInput)`
  font-size: 48px;
  line-height: 56px;
  text-align: ${({ value }) => (value ? 'center' : 'left')};
  width: ${({ value }) => (value ? '120px' : '40px')};
  margin: ${({ value }) => (value ? '0px auto' : '0px 40px')};
  color: #00da9e;
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

const getSwapOutput = async (inputAmount, inputAddress, outputAddress, chainId): Promise<BN> => {
  const defaultValue = new BN('0');
  if (!inputAmount) {
    return defaultValue;
  }
  const inputAmountWei = toWei(inputAmount.toString());
  try {
    const tradeDetails = await tradeExactTokensForTokens(
      inputAddress,
      outputAddress,
      inputAmountWei,
      chainId
    );

    const totalOutput = new BN(tradeDetails.inputAmount.amount.toString(10));
    return totalOutput;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};

const InvestmentBox = ({
  loan,
  loanCoin,
  coin,
  balance,
  value,
  setValue,
  selectedCoin,
  setCoin,
  ...props
}) => {
  const { principal, maxAmount } = loan;
  const loanCoinImage = `${process.env.REACT_APP_HOST_IMAGES}/images/coins/${loanCoin.icon}`;

  const handleChange = (e, { value }) => {
    setCoin(value);
  };

  const fundAll = async divisor => {
    const nMaxAmount = Number(fromWei(maxAmount));
    const nPrincipal = nMaxAmount - Number(fromWei(principal));

    if (loanCoin.text === selectedCoin) {
      const minValue = Math.min(...[balance / divisor, nPrincipal]);
      return setValue(minValue);
    } else {
      // Return converted input and divide by divisor
      // const convertedInput = await getSwapOutput()
    }
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
      <InvestHeader>How much would you like to invest?</InvestHeader>
      <InvestBox>
        <div>INVEST</div>
        <BigInput
          autoComplete="off"
          id="input-invest-value"
          placeholder="0"
          value={readValue}
          onValueChange={onSetValue}
          fixedDecimalScale={false}
        />
        <Coin src={loanCoinImage} name={loanCoin?.text} />
      </InvestBox>
      <BalanceWrapper>
        <div>Invest with</div>
        <CoinSelector value={selectedCoin} onChange={handleChange} />
        <MaxInputs onClick={fundAll} />
      </BalanceWrapper>
    </Card>
  );
};

export default InvestmentBox;
