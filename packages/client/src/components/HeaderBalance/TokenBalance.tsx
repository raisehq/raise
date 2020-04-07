import React, { useState } from 'react';
import BN from 'bn.js';
import { fromWei } from 'web3-utils';
import { TokenImage, Container, Child, IconEye, SpanValues } from './TokenBalance.styles';
import { useAddressBalance } from '../../contexts/BalancesContext';
import { useRootContext } from '../../contexts/RootContext';
import { useAppContext } from '../../contexts/AppContext';

const TokenBalance = ({ imageUrl, name, ...props }) => {
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
  const [hidde, setHidde] = useState(false);
  const balance: BN = useAddressBalance(account, contractAddresses[chainId]?.[name]);
  const stringBalance: string =
    Number(fromWei(balance))
      .toFixed(2)
      .toString() || '0.00';

  const handleTroggleHidde = e => {
    e.stopPropagation();
    setHidde(!hidde);
  };

  return (
    <Container {...props}>
      <Child>
        <TokenImage src={imageUrl} />
        <div>{name}</div>
      </Child>
      <Child>
        {hidde ? (
          <div>
            <SpanValues>{stringBalance}</SpanValues>
            <IconEye onClick={handleTroggleHidde} name="eye" />
          </div>
        ) : (
          <div>
            <SpanValues>• • • • •</SpanValues>
            <IconEye onClick={handleTroggleHidde} name="eye slash outline" />
          </div>
        )}
      </Child>
    </Container>
  );
};

export default TokenBalance;
