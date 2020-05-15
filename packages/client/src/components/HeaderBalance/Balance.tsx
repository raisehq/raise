import React from 'react';
import BigNumber from 'bignumber.js';
import useGetAllBalances from '../../hooks/useGetAllBalances';
import {
  AddressStatus,
  BalanceDropdown,
  Content,
  Divider,
  BalanceMenu,
  Header,
  TokenLayout
} from './Balance.styles';
import TOKEN_URLS from '../../commons/tokens';

const SUPPORTED_COINS = ['DAI', 'USDT', 'USDC', 'ETH'];

const DropdownButton = () => (
  <svg
    className="wallet-icon"
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4062 3H2.5C2.21875 3 2 2.78125 2 2.5C2 2.25 2.21875 2 2.5 2H14.5C14.75 2 15 1.78125 15 1.5C15 0.6875 14.3125 0 13.5 0H2C0.875 0 0 0.90625 0 2V12C0 13.125 0.875 14 2 14H14.4062C15.2812 14 16 13.3438 16 12.5V4.5C16 3.6875 15.2812 3 14.4062 3ZM13 9.5C12.4375 9.5 12 9.0625 12 8.5C12 7.96875 12.4375 7.5 13 7.5C13.5312 7.5 14 7.96875 14 8.5C14 9.0625 13.5312 9.5 13 9.5Z"
      fill="#B1B3B9"
    />
  </svg>
);

const Balance = (props) => {
  const balances = useGetAllBalances(SUPPORTED_COINS);

  balances.sort((a, b) => {
    const aBN = new BigNumber(a.value);
    const bBN = new BigNumber(b.value);
    return aBN.isGreaterThan(bBN) ? -1 : 1;
  });

  const balanceList = balances.map((coin) => (
    <TokenLayout
      hider
      imageUrl={TOKEN_URLS[coin.text]}
      name={coin.text}
      key={coin.text}
      value={coin.value}
    />
  ));

  return (
    <>
      <BalanceDropdown trigger={DropdownButton()} {...props}>
        <BalanceMenu>
          <Header>
            <AddressStatus border={false} />
          </Header>
          <Divider />
          <Content>{balanceList}</Content>
        </BalanceMenu>
      </BalanceDropdown>
    </>
  );
};

export default Balance;
