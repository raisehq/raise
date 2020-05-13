import React, { useMemo } from 'react';
import { BalanceDropdown, TokenLayout } from './CoinSelector.styles';

import TOKEN_URLS from '../../commons/tokens';

const SUPPORTED_SWAP_COINS = ['DAI', 'USDC', 'ETH'];
const SUPPORTER_SWAP_COINS_USDT = ['USDT'];

const NoLoggedCoinSelector = ({ loanCoin, value, ...rest }: any) => {
  const coins = loanCoin.text === 'USDT' ? SUPPORTER_SWAP_COINS_USDT : SUPPORTED_SWAP_COINS;
  const options = useMemo(
    () =>
      coins.map((coin) => {
        const newCoin = {
          ...{ value: coin },
          content: (
            <TokenLayout
              value={coin}
              name={coin}
              key={coin}
              imageUrl={TOKEN_URLS[coin]}
              isLogged={false}
            />
          )
        };
        return newCoin;
      }),
    [coins]
  );

  const CurrentSelection = (
    <TokenLayout
      value={value}
      name={value}
      key={value}
      imageUrl={TOKEN_URLS[value]}
      isLogged={false}
    />
  );
  return <BalanceDropdown trigger={CurrentSelection} value={value} options={options} {...rest} />;
};

export default NoLoggedCoinSelector;
