import { useContext, useState, useEffect } from 'react';
import useAsyncEffect from './useAsyncEffect';
import useWallet from './useWallet';
import useWeb3 from './useWeb3';
import ERC20 from '../commons/erc20';
import { MAX_VALUE } from '../commons/constants';
import { Stages } from '../components/RepayLoan/RepayLoan.context';
import AppContext from '../components/AppContext';

const useRepayment = (loan, open) => {
  const { borrowerDebt, id }: any = loan;
  const {
    web3Status: { account },
    followTx
  }: any = useContext(AppContext);
  const { web3 } = useWeb3();
  const wallet = useWallet();
  const [approved, setApproved] = useState(false);
  const [error, setError] = useState();
  const [stage, setStage] = useState(Stages.Confirm);
  const [hasBalance, setHasBalance] = useState(false);

  useEffect(() => {
    setApproved(false);
    setError(null);
  }, [open]);

  useAsyncEffect(async () => {
    if (open && stage === Stages.Confirm) {
      const {
        utils: { BN }
      } = web3;
      const DAI = await wallet.addContract('DAI');
      const DAIContract = new web3.eth.Contract(ERC20, DAI.options.address);
      const valueBN = new BN(borrowerDebt);

      const currentBalance = await DAIContract.methods.balanceOf(account).call({ from: account });
      if (new BN(currentBalance).gte(valueBN)) {
        setHasBalance(true);
      }
    }
  }, [open, stage, account]);

  useAsyncEffect(async () => {
    if (open && stage === Stages.Processing) {
      const {
        utils: { BN }
      } = web3;
      const DAIProxy = await wallet.addContract('DAIProxy');
      const DAI = await wallet.addContract('DAI');
      const DAIContract = new web3.eth.Contract(ERC20, DAI.options.address);
      const valueBN = new BN(borrowerDebt);

      const amountApproved = await DAIContract.methods
        .allowance(account, DAIProxy.options.address)
        .call({ from: account });

      if (valueBN.gt(new BN(amountApproved))) {
        try {
          await followTx.watchTx(
            DAIContract.methods
              .approve(DAIProxy.options.address, MAX_VALUE)
              .send({ from: account }),
            'approval'
          );
          setApproved(true);
        } catch (err) {
          console.error('[useRepayment] Error: ', err);
          setStage(Stages.Error);
        }
      } else {
        setApproved(true);
      }
    }
  }, [open, stage]);

  useAsyncEffect(async () => {
    if (open && approved) {
      const DAIProxy = await wallet.addContract('DAIProxy');

      try {
        await followTx.watchTx(
          DAIProxy.methods.repay(id, borrowerDebt).send({ from: account }),
          'repayLoan',
          [web3.utils.fromWei(borrowerDebt)]
        );
        setStage(Stages.Success);
      } catch (err) {
        console.error('[useRepayment] Error: ', err);
        setStage(Stages.Error);
      }
    }
  }, [open, approved]);

  return { hasBalance, approved, setApproved, error, setError, stage, setStage };
};

export default useRepayment;
