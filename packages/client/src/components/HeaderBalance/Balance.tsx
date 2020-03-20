import React from 'react';
import { BalanceDropdown, BalanceMenu, TokenBalance } from './Balance.styles';

const { REACT_APP_HOST_IMAGES } = process.env;

const TOKEN_URLS = {
  DAI: `${REACT_APP_HOST_IMAGES}/images/coins/coin-dai.svg`,
  USDT: `${REACT_APP_HOST_IMAGES}/images/coins/coin-theter.svg`,
  USDC: `${REACT_APP_HOST_IMAGES}/images/coins/coin-usdc.svg`
};

const SUPPORTED_COINS = ['DAI', 'USDT', 'USDC'];

const Balance = props => {
  const balanceList = () =>
    SUPPORTED_COINS.map(tokenName => {
      const props = {
        imageUrl: TOKEN_URLS[tokenName],
        name: tokenName,
        key: tokenName
      };
      return <TokenBalance {...props} />;
    });

  return (
    <BalanceDropdown text="Balance" {...props}>
      <BalanceMenu>{balanceList()}</BalanceMenu>
    </BalanceDropdown>
  );
};

export default Balance;
