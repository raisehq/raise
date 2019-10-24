import React, { useContext, useEffect } from 'react';
import { BalanceBox, Title, Value } from './Balance.styles';
import AppContext from '../AppContext';
import Queryies from '../../helpers/queryies';

const Balance = props => {
  const {
    web3Status: { account },
    daiWebSocket: { webSocket },
    actions: {
      dai: { onGetBalance }
    },
    store: {
      dai: { balance }
    }
  }: any = useContext(AppContext);

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
