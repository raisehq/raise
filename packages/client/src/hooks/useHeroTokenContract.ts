import { useState } from 'react';
import { Either } from '../utils';
import useWallet from './useWallet';
import useAsyncEffect from './useAsyncEffect';

const useDepositContract = () => {
  const [activeContract, setActiveContract]: any = useState(null);
  const metamask = useWallet();
  console.log(' USE DEPOSIT ', metamask);
  useAsyncEffect(async () => {
    const ready = Either.either(metamask);

    ready.fold(
      () => null,
      async () => {
        const isActive = Either.either(activeContract);

        isActive.fold(
          async () => {
            try {
              const HeroTokenContract = await metamask.addContract('HeroToken');
              const DepositContract = await metamask.addContract('Deposit');
              setActiveContract({
                allowance: (account, spender) =>
                  HeroTokenContract.methods.allowance(account, spender).call(),
                balance: account => HeroTokenContract.methods.balanceOf(account).call(),
                approveDeposit: async (account, amount) => {
                  return HeroTokenContract.methods
                    .approve(
                      DepositContract.options.address,
                      metamask.utils.toWei(amount.toString(), 'ether')
                    )
                    .send({
                      from: account
                    });
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
  }, [metamask]);

  return activeContract;
};

export default useDepositContract;
