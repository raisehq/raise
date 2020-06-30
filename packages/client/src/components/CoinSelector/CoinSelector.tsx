import React, { useMemo } from 'react';

import BigNumber from 'bignumber.js';
import { useRootContext } from '../../contexts/RootContext';
import useGetAllBalances from '../../hooks/useGetAllBalances';
import { BalanceDropdown, TokenLayout } from './CoinSelector.styles';
import { formatBigNumber } from '../../commons/numeral';
import TOKEN_URLS from '../../commons/tokens';

const SUPPORTED_SWAP_COINS = ['DAI', 'USDC', 'ETH'];
const SUPPORTER_SWAP_COINS_USDT = ['USDT'];

const CoinSelector = ({ loanCoin, value, ...rest }: any) => {
  const {
    store: {
      auth: {
        login: { logged: isLogged }
      }
    }
  }: any = useRootContext();

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
          const formatValue = new BigNumber(coin.value).toFormat(3, formatBigNumber);
          return { ...coin, ...{ value: formatValue, rawValue: coin.value } };
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
                isLogged={isLogged}
              />
            )
          };
          return newCoin;
        }),
    [balances]
  );

  const selectedCoin = balances.filter((coin) => coin.text === value)[0];
  const CurrentSelection = (
    <TokenLayout
      value={selectedCoin ? new BigNumber(selectedCoin.value).toFormat(3, formatBigNumber) : value}
      name={selectedCoin ? selectedCoin.text : value}
      key={selectedCoin ? selectedCoin.text : value}
      imageUrl={TOKEN_URLS[selectedCoin ? selectedCoin.text : value]}
      isLogged={isLogged}
    />
  );
  return <BalanceDropdown trigger={CurrentSelection} value={value} options={options} {...rest} />;
};

export default CoinSelector;
