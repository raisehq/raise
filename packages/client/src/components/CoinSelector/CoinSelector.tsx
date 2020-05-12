import React, { useMemo } from 'react';

import BigNumber from 'bignumber.js';

import useGetAllBalances from '../../hooks/useGetAllBalances';
import { BalanceDropdown, TokenLayout, TokenBalance } from './CoinSelector.styles';

import TOKEN_URLS from '../../commons/tokens';

const SUPPORTED_SWAP_COINS = ['DAI', 'USDC', 'ETH'];
const SUPPORTER_SWAP_COINS_USDT = ['USDT'];

const CoinSelector = ({ loanCoin, value, ...rest }: any) => {
  const balances = useGetAllBalances(
    loanCoin.text === 'USDT' ? SUPPORTER_SWAP_COINS_USDT : SUPPORTED_SWAP_COINS
  );
  const options = useMemo(
    () =>
      balances
        .sort((a, b) => {
          const aBN = new BigNumber(a.value);
          const bBN = new BigNumber(b.value);
          return aBN.isGreaterThan(bBN) ? -1 : 1;
        })
        .map((coin) => {
          const newCoin = {
            ...{ value: coin.text },
            content: (
              <TokenLayout
                value={coin.value}
                name={coin.text}
                key={coin.text}
                imageUrl={TOKEN_URLS[coin.text]}
              />
            )
          };
          return newCoin;
        }),
    [balances]
  );

  const CurrentSelection = (
    <TokenBalance value={value} name={value} key={value} imageUrl={TOKEN_URLS[value]} />
  );
  return <BalanceDropdown trigger={CurrentSelection} value={value} options={options} {...rest} />;
};

export default CoinSelector;
