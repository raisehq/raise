import { useContext, useState, useEffect } from 'react';
import useMetamask from '../../hooks/useMetaMask';


import { Stages } from './ClaimRepay';
import { AppContext } from '../App';

const useRepayment = (loan, open) => {
  const { id }: any = loan;
  const { web3Status: { account } }: any = useContext(AppContext);
  const metamask = useMetamask();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState();
  const [stage, setStage] = useState(Stages.Confirm);

  useEffect(() => {
    setError(null);
    setPending(false);
  }, [open])



  const claimRepayment = async () => {
    setPending(true);
    const LoanContract = await metamask.addContractByAddress('LoanContract', id);
    try {
      await LoanContract.methods.withdrawRepayment()
        .send({ from: account });
      setStage(Stages.Success);
    } catch (error) {
      setPending(false);
      setStage(Stages.Error);
    }
  };

  return { error, setError, stage, setStage, claimRepayment, pending};
}

export default useRepayment;