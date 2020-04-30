import React, { Fragment, useContext } from 'react';
import { CardCenteredText, CardTitle, RetryButton } from '../ClaimLoan.styles';
import ClaimLoanContext from '../ClaimLoan.context';
import Stages from '../ClaimLoan.stages';

const Processing = () => {
  const { setStage }: any = useContext(ClaimLoanContext);
  const onRetry = () => {
    setStage(Stages.Confirm);
  };

  return (
    <Fragment>
      <CardCenteredText>
        <CardTitle>Something went wrong</CardTitle>
      </CardCenteredText>
      <RetryButton onClick={onRetry}>RETRY</RetryButton>
    </Fragment>
  );
};

export default Processing;
