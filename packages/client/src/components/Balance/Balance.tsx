import React, { useEffect } from 'react';
import { BalanceBox, Title, Value } from './Balance.styles';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import Queryies from '../../helpers/queryies';

const Balance = props => {
  const {
    actions: {
      dai: { onGetBalance }
    },
    store: {
      dai: { balance },
      user: {
        cryptoAddress: { address: account }
      }
    }
  }: any = useRootContext();
  const {
    daiWebSocket: { webSocket }
  }: any = useAppContext();

  useEffect(() => {
    if (account && webSocket) {
      const { query, subscriptionName } = Queryies.subscriptions.daiBalance;
      const variables = {
        address: account
      };
      const callback = onGetBalance;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [account, webSocket]);

  return (
    <BalanceBox {...props}>
      <Title>Balance:</Title>
      <Value>{balance} DAI</Value>
    </BalanceBox>
  );
};

export default Balance;
