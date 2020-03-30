import React from 'react';
import { BalanceBox, Value } from './Balance.styles';

const Balance = props => (
  <BalanceBox {...props}>
    <div>Your balance: </div>
    <Value>
      {props.balance} {props.coin.value}
    </Value>
  </BalanceBox>
);

export default Balance;
