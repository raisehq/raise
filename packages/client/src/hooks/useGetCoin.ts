import { useEffect, useState } from 'react';
import { COINS } from '../commons/constants';
import { CoinsType } from '../commons/coins';
import { getCoin, getCoinsFromContract } from '../utils/loanUtils';
import get from 'lodash/get';
import { useRootContext } from '../contexts/RootContext';
import { useAppContext } from '../contexts/AppContext';

const useGetCoin = auction => {
  const [coin, setCoin] = useState<any>(null);

  const {
    web3Status: { walletNetworkId }
  }: any = useAppContext();
  const {
    store: {
      blockchain: { contracts }
    }
  }: any = useRootContext();

  useEffect(() => {
    const contract = get(contracts, `address.${walletNetworkId}`);
    const coins: CoinsType[] = getCoinsFromContract(COINS)(contract);
    setCoin(getCoin(coins)(auction.tokenAddress));
  }, [auction]);
  return { coin };
};

export default useGetCoin;
