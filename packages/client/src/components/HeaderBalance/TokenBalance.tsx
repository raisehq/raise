import React from 'react';
import BN from 'bn.js';
import { fromWei } from 'web3-utils';
import { TokenImage, Container, Child } from './TokenBalance.styles';
import { useAddressBalance } from '../../contexts/BalancesContext';
import { useRootContext } from '../../contexts/RootContext';
import { useAppContext } from '../../contexts/AppContext';

const TokenBalance = ({ imageUrl, name, value, ...props }) => {
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

  const balance: BN = useAddressBalance(account, contractAddresses[chainId]?.[name]);
  const stringBalance: string =
    Number(fromWei(balance))
      .toFixed(2)
      .toString() || '0.00';

  return (
    <Container value={value} {...props}>
      <Child>
        <TokenImage src={imageUrl} />
        <div>{name}</div>
      </Child>
      <Child>
        <div>{stringBalance}</div>
      </Child>
    </Container>
  );
};

export default TokenBalance;
