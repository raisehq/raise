import React, { Fragment, useContext } from 'react';
import { Button } from '@raisehq/components';
import { CardCenteredText, CardTitle, RefundInfo } from '../ClaimRefund.styles';
import ClaimRefundContext from '../ClaimRefund.Context';
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
        <RefundInfo>
          Try again to proceed with the refund. If you need to contact us, click in the Help button
          at the bottom left of this page.
        </RefundInfo>
      </CardCenteredText>
      <Button onClick={onRetry} fullWidth>
        RETRY
      </Button>
    </Fragment>
  );
};

export default Processing;
