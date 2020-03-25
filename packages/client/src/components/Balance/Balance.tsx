import React from 'react';
import { BalanceBox, Title, Value } from './Balance.styles';

const Balance = props => (
  <BalanceBox {...props}>
    <Title>Balance:</Title>
    <Value>
      {props.balance} {props.coin.value}
    </Value>
  </BalanceBox>
);

export default Balance;
