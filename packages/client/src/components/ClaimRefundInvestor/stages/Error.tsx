import React, { Fragment, useContext } from 'react';
import { CardCenteredText, CardTitle, RetryButton } from '../ClaimRefund.styles';
import ClaimRefundContext from '../ClaimRefund.context';
import Stages from '../ClaimRefund.stages';

const Processing = () => {
  const { setStage }: any = useContext(ClaimRefundContext);
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
