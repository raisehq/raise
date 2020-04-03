import React from 'react';
import { BalanceDropdown, TokenBalance } from './CoinSelector.styles';
const { REACT_APP_HOST_IMAGES } = process.env;

const TOKEN_URLS = {
  DAI: `${REACT_APP_HOST_IMAGES}/images/coins/coin-dai.svg`,
  USDT: `${REACT_APP_HOST_IMAGES}/images/coins/coin-theter.svg`,
  USDC: `${REACT_APP_HOST_IMAGES}/images/coins/coin-usdc.svg`
};

const SUPPORTED_COINS = ['DAI', 'USDT', 'USDC'];

const CoinSelector = ({ value, ...rest }) => {
  const options = SUPPORTED_COINS.map(tokenName => {
    const props = {
      imageUrl: TOKEN_URLS[tokenName],
      name: tokenName,
      key: tokenName,
      value: tokenName
    };
    return { ...props, content: <TokenBalance {...props} /> };
  });

  const CurrentSelection = (
    <TokenBalance value={value} name={value} key={value} imageUrl={TOKEN_URLS[value]} />
  );
  return (
    <BalanceDropdown
      trigger={CurrentSelection}
      value={value}
      selection
      options={options}
      {...rest}
    />
  );
};

export default CoinSelector;
