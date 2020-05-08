import React, { useState } from 'react';
import {
  tradeExactTokensForTokensWithData,
  getTokenReserves,
  tradeExactEthForTokensWithData
} from '@uniswap/sdk';
import { TokenReservesNormalized } from '@uniswap/sdk/dist/types';
import { useAppContext } from '../../../contexts/AppContext';
import { useRootContext } from '../../../contexts/RootContext';
import useAsyncEffect from '../../../hooks/useAsyncEffect';
import { CoinsType } from '../../../interfaces/Coins';
import { fromDecimal, toDecimal } from '../../../utils/web3-utils';
import MaxInputsRaw from './MaxInputs';
import {
  MaxInputs,
  CoinSelector,
  Coin,
  Card,
  InvestBox,
  BalanceWrapper,
  Offer,
  Eligible,
  BigInput,
  ErrorBox,
  InvestHeader,
  NoLoggedCoinSelector,
  InvestText
} from './styles';

const errorMessages = {
  inputGreaterThanBalance: 'Not enough balance.',
  inputGreaterThanLoanAmount: 'Invest less than target.'
};

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
  const {
    store: {
      auth: {
        login: { logged: isLogged }
      }
    }
  }: any = useRootContext();
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
    if (inputToken && inputToken > balance && isLogged) {
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
        <InvestText>INVEST</InvestText>
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
        {isLogged ? (
          <CoinSelector
            loanCoin={loanCoin}
            disabled={swapBlacklist[selectedCoin]}
            value={selectedCoin}
            onChange={handleChange}
          />
        ) : (
          <NoLoggedCoinSelector
            loanCoin={loanCoin}
            disabled={swapBlacklist[selectedCoin]}
            value={selectedCoin}
            onChange={handleChange}
          />
        )}
        <ErrorBox>
          {errorMessage()}
          &nbsp;
        </ErrorBox>
        <MaxInputs>
          <MaxInputsRaw onClick={fundAll(loanCoin, coin)} />
        </MaxInputs>
      </BalanceWrapper>
    </Card>
  );
};

export default InvestmentBox;
