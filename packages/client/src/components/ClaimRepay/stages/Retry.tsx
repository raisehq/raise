import React, { useContext } from 'react';
import { Header, ConfirmButton } from '../../InvestModal/InvestModal.styles';
import { ClaimRepayContext, Stages } from '../ClaimRepay';

const Processing = () => {
  const { setStage, setError, setApproved }: any = useContext(ClaimRepayContext)

  const reset = () => {
    setError(false);
    setApproved(false);
    setStage(Stages.Confirm);
  }
  return (
    <>
    <Header>Something went wrong</Header>
    <ConfirmButton onClick={reset}>Go back</ConfirmButton>
    </>
  );
};

export default Processing;

