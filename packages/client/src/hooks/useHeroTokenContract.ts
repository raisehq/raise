import { useState } from 'react';
import { toWei } from 'web3-utils';
import { Either } from '../utils';
import useWallet from './useWallet';
import useAsyncEffect from './useAsyncEffect';
import { useRootContext } from '../contexts/RootContext';

const useDepositContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const wallet = useWallet();
  const { followTx }: any = useRootContext();

  useAsyncEffect(async () => {
    const ready = Either.either(wallet);

    ready.fold(
      () => null,
      async () => {
        const isActive = Either.either(activeContract);

        isActive.fold(
          async () => {
            try {
              const HeroTokenContract = await wallet.addContract('HeroToken');
              const DepositContract = await wallet.addContract('Deposit');
              setActiveContract({
                address: () => HeroTokenContract.options.address,
                allowance: (account, spender) =>
                  HeroTokenContract.methods.allowance(account, spender).call(),
                balance: (account) => HeroTokenContract.methods.balanceOf(account).call(),
                approveDeposit: async (account, amount) =>
                  followTx.watchTx(
                    HeroTokenContract.methods
                      .approve(DepositContract.options.address, toWei(amount.toString(), 'ether'))
                      .send({
                        from: account
                      }),
                    { id: 'approval' },
                    'approval'
                  )
              });
            } catch (error) {
              console.error('Contract Hero not found in current network');
            }
          },
          () => activeContract
        );
      }
    );
  }, [wallet]);

  return activeContract;
};

export default useDepositContract;
