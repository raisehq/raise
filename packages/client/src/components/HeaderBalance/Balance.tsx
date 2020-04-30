import React from 'react';
import { BalanceDropdown, BalanceMenu, TokenBalance } from './Balance.styles';
import TOKEN_URLS from '../../commons/tokens';

const SUPPORTED_COINS = ['DAI', 'USDT', 'USDC', 'ETH'];

const Balance = props => {
  const balanceList = () =>
    SUPPORTED_COINS.map(tokenName => {
      const miniprops = {
        imageUrl: TOKEN_URLS[tokenName],
        name: tokenName,
        key: tokenName
      };
      return <TokenBalance hider {...miniprops} />;
    });

  return (
    <BalanceDropdown text="Balance" {...props}>
      <BalanceMenu>{balanceList()}</BalanceMenu>
    </BalanceDropdown>
  );
};

export default Balance;
