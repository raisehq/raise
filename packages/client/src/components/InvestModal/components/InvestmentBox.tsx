import React, { useState } from 'react';
import styled from 'styled-components';
import { Card as RaiseCard } from '@raisehq/components';
import {
  tradeExactTokensForTokensWithData,
  getTokenReserves,
  tradeExactEthForTokensWithData
} from '@uniswap/sdk';
import { TokenReservesNormalized } from '@uniswap/sdk/dist/types';
import { InvestHeader } from './InvestmentBox.styles';
import LoanInput from '../../CreateLoan/LoanInput';
import CoinSelectorRaw from '../../CoinSelector';
import RawCoin from '../../Coin';
import MaxInputsRaw from './MaxInputs';
import { useAppContext } from '../../../contexts/AppContext';
import useAsyncEffect from '../../../hooks/useAsyncEffect';
import { CoinsType } from '../../../commons/coins';
import { fromDecimal, toDecimal } from '../../../utils/web3-utils';

const errorMessages = {
  inputGreaterThanBalance: 'Not enough balance.',
  inputGreaterThanLoanAmount: 'Invest less than target.'
};
interface EligibleProps {
  active: boolean;
}

const MaxInputs = styled(MaxInputsRaw)`
  margin-top: 10px;
`;

const CoinSelector = styled(CoinSelectorRaw)`
  max-width: 100%;
  width: 100%;
  height: 48px;
  &&&&.disabled {
    opacity: 1;
    & .dropdown.icon {
      display: none;
    }
  }
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
  width: 100%;
  margin: 24px auto 0px auto;

  &&&&&&&& ${Coin} {
    font-size: 16px;
    color: #8a8e97;
    font-weight: normal;
  }
`;

const BalanceWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  &&&& ${CoinSelector} {
    max-width: 100%;
  }
  &&&& .ui.dropdown .menu {
    width: 100%;
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

const Offer = styled.div`
  padding: 4px 12px;
  border-radius: 16px;
  background: #f5ac37;
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Eligible = styled.div<EligibleProps>`
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  color: #00da9e;
  text-align: center;
  padding: 6px;
  max-width: 260px;
  font-weight: bold;
  font-size: 14px;
`;

const BigInput = styled(LoanInput)`
  font-size: ${({ value }) => {
    if (value?.toString()?.length > 8) {
      return 28;
    }
    if (value?.toString()?.length > 6) {
      return 36;
    }
    return 48;
  }}px;
  line-height: 56px;
  width: ${({ value }) => (value?.toString()?.length > 1 ? value?.toString()?.length + 1 : 1)}ch;
  text-align: ${({ value }) => (value ? 'center' : 'left')};
  min-width: ${({ value }) => (value ? '0px' : '1ch')};
  margin: ${({ value }) => (value ? '0px 1ch' : '0px 1ch')};
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

const ErrorBox = styled.div`
  width: 100%;
  min-height: 30px;
  color: red;
  display: block;
  content: '';
  margin-top: 8px;
`;

const swapBlacklist = {
  USDT: true
};

const setTokenReserves = async (
  inputAddress: string,
  outputAddress: string,
  setInputReserves: Function,
  setOutputReserves: Function,
  chainId: number
) => {
  if (inputAddress !== outputAddress) {
    if (inputAddress === 'ETH') {
      const inputReserves = null;
      const outputReserves = await getTokenReserves(outputAddress, chainId);
      setInputReserves(inputReserves);
      setOutputReserves(outputReserves);
      return;
    }
    const inputReserves = await getTokenReserves(inputAddress, chainId);
    const outputReserves = await getTokenReserves(outputAddress, chainId);
    setInputReserves(inputReserves);
    setOutputReserves(outputReserves);
  }
};

const getSwapOutput = async (
  inputAmount,
  inputCoin,
  inputReserves,
  outputReserves
): Promise<number> => {
  const defaultValue = 0;
  if (!inputAmount) {
    return defaultValue;
  }

  const inputAmountWei = toDecimal(inputAmount.toString(), inputCoin.decimals);
  try {
    if (inputCoin.text === 'ETH') {
      const tradeDetails = await tradeExactEthForTokensWithData(outputReserves, inputAmountWei);

      const totalOutput = Number(
        fromDecimal(
          tradeDetails.outputAmount.amount.toString(10),
          tradeDetails.outputAmount.token.decimals
        )
      );
      return totalOutput + totalOutput / 100;
    }
    const tradeDetails = await tradeExactTokensForTokensWithData(
      inputReserves,
      outputReserves,
      inputAmountWei
    );

    const totalOutput = Number(
      fromDecimal(
        tradeDetails.outputAmount.amount.toString(10),
        tradeDetails.outputAmount.token.decimals
      )
    );
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
  maxAmountNum,
  inputToken,
  ...props
}: any) => {
  const [inputReserves, setInputReserves] = useState<TokenReservesNormalized>();
  const [outputReserves, setOutputReserves] = useState<TokenReservesNormalized>();
  const { principal, maxAmount } = loan;

  const {
    web3Status: { walletNetworkId: chainId }
  }: any = useAppContext();
  const loanCoinImage = `${process.env.REACT_APP_HOST_IMAGES}/images/coins/${loanCoin.icon}`;

  const handleChange = (e, { value: newValue }: any) => {
    setCoin(newValue);
  };

  const fundAll = (loanCurrency: CoinsType, selectedCurrency: CoinsType) => async divisor => {
    const availableBalance = selectedCurrency.text === 'ETH' ? balance - 0.005 : balance;
    const nMaxAmount = Number(fromDecimal(maxAmount, loanCurrency.decimals));
    const nPrincipal = nMaxAmount - Number(fromDecimal(principal, loanCurrency.decimals));

    if (loanCurrency?.text === selectedCurrency?.text) {
      const minValue = Math.min(...[availableBalance / divisor, nPrincipal]);
      return setValue(minValue);
    }
    const output = await getSwapOutput(
      availableBalance / divisor,
      selectedCurrency,
      inputReserves,
      outputReserves
    );
    const minValue = Math.min(...[output, nPrincipal]);
    return setValue(minValue);
  };

  const onSetValue = v => {
    if (!v?.floatValue) {
      return setValue(0);
    }
    if (v?.floatValue < 0) {
      return setValue(0);
    }
    return setValue(v.floatValue);
  };

  const readValue = value > 0 ? value : null;

  const errorMessage = () => {
    if (inputToken && inputToken > balance) {
      return errorMessages.inputGreaterThanBalance;
    }
    if (value && value > maxAmountNum) {
      return errorMessages.inputGreaterThanLoanAmount;
    }
    return null;
  };

  const preventOverflow = e => {
    const char = String.fromCharCode(e.which);
    const finalValue = `${value}${char}`;
    const max = 9;
    if (Number(char) >= 0 && finalValue.length > max) {
      e.preventDefault();
    }
  };

  useAsyncEffect(async () => {
    try {
      await setTokenReserves(
        coin?.address,
        loanCoin?.address,
        setInputReserves,
        setOutputReserves,
        chainId
      );
    } catch (err) {
      console.error(err);
      throw Error('error-getting-token-reserves');
    }
  }, [loanCoin?.address, coin?.address, chainId]);

  return (
    <Card size="310px" width="100%" {...props}>
      <InvestHeader>How much would you like to invest?</InvestHeader>
      <Offer>
        <span>{`PROMO: Invest 50 ${loanCoin.text} or more and get 49 ${loanCoin.text}`}</span>
      </Offer>

      <InvestBox>
        <div>INVEST</div>
        <BigInput
          autoComplete="off"
          id="input-invest-value"
          placeholder="0"
          value={readValue}
          onValueChange={onSetValue}
          fixedDecimalScale={false}
          onKeyDown={preventOverflow}
        />
        <Coin src={loanCoinImage} name={loanCoin?.text} />
      </InvestBox>
      <Eligible active={value >= 50}>Promo activated! Invest and get your tokens in 48h</Eligible>
      <BalanceWrapper>
        <div>Invest with</div>
        <CoinSelector
          loanCoin={loanCoin}
          disabled={!!swapBlacklist[selectedCoin]}
          value={selectedCoin}
          onChange={handleChange}
        />
        <ErrorBox>
          {errorMessage()}
          &nbsp;
        </ErrorBox>
        <MaxInputs onClick={fundAll(loanCoin, coin)} />
      </BalanceWrapper>
    </Card>
  );
};

export default InvestmentBox;
