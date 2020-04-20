import React, { useState } from 'react';
import BN from 'bn.js';
import useGetCoinByAddress from '../../hooks/useGetCoinByAddress';
import { fromDecimalFixed, fromDecimal } from '../../utils/web3-utils';
import {
  TokenImage,
  TokenName,
  Container,
  Child,
  IconEye,
  SpanValues,
  Balance
} from './TokenBalance.styles';
import { useAddressBalance } from '../../contexts/BalancesContext';
import { useRootContext } from '../../contexts/RootContext';
import { useAppContext } from '../../contexts/AppContext';

const TokenBalance = ({ imageUrl, name, value, hider, ...props }: any) => {
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
  const coin = useGetCoinByAddress(contractAddresses[chainId]?.[name]);
  const stringBalance: string = fromDecimalFixed(balance.toString(10), coin.decimals) || '0.00';
  const stringBalanceDos: string = fromDecimal(balance.toString(10), coin.decimals) || '0.00';
  console.log(stringBalance, stringBalanceDos);

  const handleTroggleHidde = e => {
    e.stopPropagation();
    setHidde(!hidde);
  };
  /* eslint-disable */
  // TODO : Refactor this ternary condition
  return (
    <Container {...props}>
      <Child>
        <TokenImage src={imageUrl} />
        <TokenName>{name}</TokenName>
      </Child>
      <Child>
        {hider ? (
          hidde ? (
            <div>
              <SpanValues>{stringBalance}</SpanValues>
              <IconEye onClick={handleTroggleHidde} name="eye" />
            </div>
          ) : (
            <div>
              <SpanValues>• • • • •</SpanValues>
              <IconEye onClick={handleTroggleHidde} name="eye slash outline" />
            </div>
          )
        ) : (
          <>
            Balance: <Balance> {stringBalance}</Balance>
          </>
        )}
      </Child>
    </Container>
  );
  /* eslint-enable */
};

export default TokenBalance;
