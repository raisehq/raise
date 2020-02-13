import { useContext, useState, useEffect } from 'react';
import useWallet from '../../hooks/useWallet';
import { Stages } from './ClaimRepay';
import AppContext from '../AppContext';

const useRepayment = (loan, open) => {
  const { id }: any = loan;
  const {
    web3Status: { account }
  }: any = useContext(AppContext);
  const metamask = useWallet();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState();
  const [stage, setStage] = useState(Stages.Confirm);

  useEffect(() => {
    setError(null);
    setPending(false);
  }, [open]);

  const claimRepayment = async depositChecked => {
    console.log('deposit checked ===> ', depositChecked);
    setPending(true);
    const LoanContract = await metamask.addContractByAddress('LoanContract', id);
    try {
      // TODO: add checked status so sc knows what to do
      await LoanContract.methods.withdrawRepayment().send({ from: account });
      setStage(Stages.Success);
    } catch (err) {
      setPending(false);
      setStage(Stages.Error);
    }
  };

  return {
    error,
    setError,
    stage,
    setStage,
    claimRepayment,
    pending,
    setPending
  };
};

export default useRepayment;
