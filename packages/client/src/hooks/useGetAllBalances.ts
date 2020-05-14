import { useState, useEffect } from 'react';
import get from 'lodash/get';
import { fromDecimalFixed } from '../utils/web3-utils';
import { COINS } from '../commons/constants';
import { CoinsType } from '../interfaces/Coins';
import { useBalancesContext } from '../contexts/BalancesContext';
import { useRootContext } from '../contexts/RootContext';
import { getCoin, getCoinsFromContract } from '../utils/loanUtils';

const useGetAllBalances = (suportedCoins: string[]): CoinsType[] => {
  const {
    store: {
      config: { networkId: chainId },
      blockchain: {
        contracts,
        contracts: { address: contractAddresses }
      },
      user: {
        cryptoAddress: { address: account }
      }
    }
  }: any = useRootContext();

  const [balanceCoins, setBalanceCoins]: any = useState([]);
  const [state, { startListening, stopListening }] = useBalancesContext();
  const contract = get(contracts, `address.${chainId}`);
  const coins: CoinsType[] = getCoinsFromContract(COINS)(contract);

  useEffect(() => {
    if (typeof chainId === 'number' && account && contractAddresses) {
      // prettier-ignore
      suportedCoins.map(name =>
        startListening(chainId, account, get(contractAddresses, [chainId, name], name) || name));
    }

    return () => {
      // prettier-ignore
      suportedCoins.map(name =>
        stopListening(chainId, account, get(contractAddresses, [chainId, name], name) || name));
    };
  }, [chainId, account, contractAddresses, startListening, stopListening]);

  useEffect(() => {
    if (state) {
      const updatedBalance: CoinsType[] = suportedCoins.map((name) => {
        const value =
          typeof chainId === 'number'
            ? state?.[chainId]?.[account]?.[get(contractAddresses, [chainId, name], name)]?.value ||
              '0'
            : '0';

        const updatedCoin = getCoin(coins)(get(contractAddresses, [chainId, name], name));
        updatedCoin.value = fromDecimalFixed(value, updatedCoin.decimals);
        return updatedCoin;
      });

      setBalanceCoins(updatedBalance);
    }
  }, [state]);

  return balanceCoins;
};

export default useGetAllBalances;
