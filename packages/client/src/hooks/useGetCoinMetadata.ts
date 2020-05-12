import get from 'lodash/get';
import { COINS } from '../commons/constants';
import { CoinsType } from '../interfaces/Coins';
import { getCoinsFromContract } from '../utils/loanUtils';
import { useRootContext } from '../contexts/RootContext';
import { useAppContext } from '../contexts/AppContext';

const useGetCoinMetadata = (name): CoinsType | null | undefined => {
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
  return coins.find((c) => c.text === name);
};

export default useGetCoinMetadata;
