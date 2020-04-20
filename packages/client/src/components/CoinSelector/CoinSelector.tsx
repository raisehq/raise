import React, { useMemo } from 'react';
import { BalanceDropdown, TokenBalance } from './CoinSelector.styles';

const { REACT_APP_HOST_IMAGES } = process.env;

const TOKEN_URLS = {
  DAI: `${REACT_APP_HOST_IMAGES}/images/coins/coin-dai.svg`,
  USDT: `${REACT_APP_HOST_IMAGES}/images/coins/coin-theter.svg`,
  USDC: `${REACT_APP_HOST_IMAGES}/images/coins/coin-usdc.svg`
};

const SUPPORTED_SWAP_COINS = ['DAI', 'USDC'];

const CoinSelector = ({ loanCoin, value, ...rest }: any) => {
  const options = useMemo(() => {
    if (loanCoin?.text === 'USDT') {
      const props = {
        imageUrl: TOKEN_URLS[loanCoin.text],
        name: loanCoin.text,
        key: loanCoin.text,
        value: loanCoin.text
      };
      const usdtOption = { ...props, content: <TokenBalance {...props} /> };
      return [usdtOption];
    }
    return SUPPORTED_SWAP_COINS.map(tokenName => {
      const props = {
        imageUrl: TOKEN_URLS[tokenName],
        name: tokenName,
        key: tokenName,
        value: tokenName
      };
      return { ...props, content: <TokenBalance {...props} /> };
    });
  }, [loanCoin]);

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
