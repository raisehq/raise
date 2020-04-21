import React from 'react';
import { BalanceBox, Value } from './Balance.styles';

const Balance = ({ balance, coin: { value }, ...props }: any) => (
  <BalanceBox {...props}>
    <div>Your balance: </div>
    <Value>{`${balance} ${value}`}</Value>
  </BalanceBox>
);

export default Balance;
