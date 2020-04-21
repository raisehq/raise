import React, { useContext } from 'react';
import { Header, ConfirmButton } from '../../InvestModal/InvestModal.styles';
import ClaimRepayContext from '../ClaimRepay.context';
import Stages from '../ClaimRepay.stages';

const Processing = () => {
  const { setStage, setError, setPending }: any = useContext(ClaimRepayContext);

  const reset = () => {
    setError(false);
    setPending(false);
    setStage(Stages.Confirm);
  };
  return (
    <>
      <Header>Something went wrong</Header>
      <ConfirmButton onClick={reset}>Go back</ConfirmButton>
    </>
  );
};

export default Processing;
