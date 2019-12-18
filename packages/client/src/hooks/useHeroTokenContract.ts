import { useState, useContext } from 'react';
import { Either } from '../utils';
import useWallet from './useWallet';
import useWeb3 from './useWeb3';
import useAsyncEffect from './useAsyncEffect';
import AppContext from '../components/AppContext';

const useDepositContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const wallet = useWallet();
  const { web3 } = useWeb3();
  const {
    FollowTx: { watchTx }
  }: any = useContext(AppContext);

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
                allowance: (account, spender) =>
                  HeroTokenContract.methods.allowance(account, spender).call(),
                balance: account => HeroTokenContract.methods.balanceOf(account).call(),
                approveDeposit: async (account, amount) => {
                  return watchTx(
                    HeroTokenContract.methods
                      .approve(
                        DepositContract.options.address,
                        web3.utils.toWei(amount.toString(), 'ether')
                      )
                      .send({
                        from: account
                      })
                  );
                }
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
