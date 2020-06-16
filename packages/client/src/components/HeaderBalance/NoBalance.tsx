import React from 'react';
import { Message, Alert } from './NoBalance.styles';

const NoBalance = () => {
  return (
    <Message>
      <div>
        <Alert>You don&apos;t have balance.</Alert>
        Buy crypto with credit card or transfer it from another wallet.
      </div>
    </Message>
  );
};

export default NoBalance;
