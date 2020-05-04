import get from 'lodash/get';
import { COINS } from '../commons/constants';
import { CoinsType } from '../commons/coins';
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
  // return default object on case tokenAddress is undefined
  if (!tokenAddress) {
    return {
      address: '',
      text: '',
      value: '0.00',
      key: '',
      icon: '',
      decimals: 16
    };
  }
  const coin = getCoin(coins)(tokenAddress);
  return coin;
};

export default useGetCoinByAddress;
