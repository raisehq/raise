import React, { useMemo } from 'react';
import { BalanceDropdown, TokenBalance } from './CoinSelector.styles';
import TOKEN_URLS from '../../commons/tokens';

const SUPPORTED_SWAP_COINS = ['DAI', 'USDC', 'ETH'];

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
  return <BalanceDropdown trigger={CurrentSelection} value={value} options={options} {...rest} />;
};

export default CoinSelector;
