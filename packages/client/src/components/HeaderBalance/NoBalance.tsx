import React from 'react';
import { Message, Alert, Primary } from './NoBalance.styles';

const NoBalance = () => {
  return (
    <Message>
      <div>
        <Alert>You don&apos;t have balance.</Alert>
        Buy with your credit card or transfer from another wallet.
        <Primary>Raise support DAI and USDC.</Primary>
      </div>
    </Message>
  );
};

export default NoBalance;
