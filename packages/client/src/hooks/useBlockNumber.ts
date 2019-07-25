import { useRef } from 'react';
import useWeb3 from './useWeb3';
import useEffectAsync from './useAsyncEffect';

const networks = {
  kovan: 4,
  ropstein: 15
};

const useBlockNumber = () => {
  const { web3 } = useWeb3();
  const blockNumber = useRef({ averageMiningTime: 0, current: 0 });

  useEffectAsync(async () => {
    if (web3) {
      const network = await web3.eth.net.getNetworkType();
      const current = await web3.eth.getBlockNumber();

      blockNumber.current = {
        averageMiningTime: networks[network],
        current
      };
    }
  }, [web3]);

  return blockNumber;
};

export default useBlockNumber;
