import get from 'lodash/get';
import { COINS } from '../commons/constants';
import { CoinsType } from '../interfaces/Coins';
import { getCoin, getCoinsFromContract } from '../utils/loanUtils';
import { useRootContext } from '../contexts/RootContext';
import { useAppContext } from '../contexts/AppContext';

const useGetCoinByAddress = (tokenAddress): CoinsType => {
  const {
    store: {
      blockchain: { contracts },
      config: { networkId }
    }
  }: any = useRootContext();
  const {
    web3Status: { walletNetworkId: currentNetworkId }
  }: any = useAppContext();

  const desiredNetwork = currentNetworkId > 0 ? currentNetworkId : networkId;
  const contract = get(contracts, `address.${desiredNetwork}`);
  const coins: CoinsType[] = getCoinsFromContract(COINS)(contract);
  const coin = getCoin(coins)(tokenAddress);
  return coin;
};

export default useGetCoinByAddress;
