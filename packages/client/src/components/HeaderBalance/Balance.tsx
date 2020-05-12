import React from 'react';
import BigNumber from 'bignumber.js';
import useGetAllBalances from '../../hooks/useGetAllBalances';
import { BalanceDropdown, BalanceMenu, TokenLayout } from './Balance.styles';

import TOKEN_URLS from '../../commons/tokens';

const SUPPORTED_COINS = ['DAI', 'USDT', 'USDC', 'ETH'];

const Balance = (props) => {
  const balances = useGetAllBalances(SUPPORTED_COINS);
  balances.sort((a, b) => {
    const aBN = new BigNumber(a.value);
    const bBN = new BigNumber(b.value);
    return aBN.isGreaterThan(bBN) ? -1 : 1;
  });
  return (
    <>
      <BalanceDropdown text="Balance" {...props}>
        <BalanceMenu>
          {balances.map((coin) => (
            <TokenLayout
              hider
              imageUrl={TOKEN_URLS[coin.text]}
              name={coin.text}
              key={coin.text}
              value={coin.value}
            />
          ))}
        </BalanceMenu>
      </BalanceDropdown>
    </>
  );
};

export default Balance;
