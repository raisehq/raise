import React from 'react';
import BN from 'bn.js';
import { fromWei } from 'web3-utils';
import { BalanceBox, Title, Value } from './Balance.styles';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import { useAddressBalance } from '../../contexts/BalancesContext';

const Balance = ({ coin, ...props }) => {
  const {
    store: {
      blockchain: {
        contracts: { address: contractAddresses }
      },
      user: {
        cryptoAddress: { address: account }
      }
    }
  }: any = useRootContext();
  const {
    web3Status: { walletNetworkId: chainId }
  }: any = useAppContext();

  const balanceBN: BN = useAddressBalance(account, contractAddresses[chainId]?.[coin.value]);

  const stringBalance: string =
    Number(fromWei(balanceBN))
      .toFixed(2)
      .toString() || '0.00';

  return (
    <BalanceBox {...props}>
      <Title>Balance:</Title>
      <Value>
        {stringBalance} {coin.value}
      </Value>
    </BalanceBox>
  );
};

export default Balance;
