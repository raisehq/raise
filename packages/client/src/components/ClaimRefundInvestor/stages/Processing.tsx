import React, { useContext, useEffect } from 'react';
import Stages from '../ClaimRefund.stages';
import {
  Header,
  ClaimFundsResume,
  FlexSpacedLayout,
  StyledLink,
  Loader,
  ProcessingButton
} from '../ClaimRefund.styles';
import { ResumeItemBig } from './ResumeItemBig';
import ClaimRefundContext from '../ClaimRefund.Context';
import useGetCoin from '../../../hooks/useGetCoin';
import { useRootContext } from '../../../contexts/RootContext';

const Processing = () => {
  const { loan, calculatedLoan, setStage }: any = useContext(ClaimRefundContext);
  const coin = useGetCoin(loan);
  const { followTx }: any = useRootContext();
  const methodId = loan.state === 1 ? 'withdrawRefund' : 'withdrawFundsUnlocked';

  const onSuccess = ({ data }) => {
    if (data?.id?.includes(methodId)) {
      setStage(Stages.Success);
    }
  };

  const onError = ({ data }) => {
    if (data?.id?.includes(methodId)) {
      setStage(Stages.Error);
    }
  };

  useEffect(() => {
    const listenTxFinish = followTx.on('tx_finish', onSuccess);
    const listenTxError = followTx.on('tx_error', onError);
    return () => {
      listenTxFinish.removeListener('tx_finish', onSuccess);
      listenTxError.removeListener('tx_error', onError);
    };
  }, []);

  return (
    <>
      <ClaimFundsResume>
        <Header>Claim Refund</Header>
        <FlexSpacedLayout>
          <ResumeItemBig
            title="Invested amount"
            value={`${calculatedLoan.lenderAmount} ${coin && coin.text}`}
          />
        </FlexSpacedLayout>
        <StyledLink
          to="/"
          title="While we complete your refund, click here and check the new available loan with 16% APR"
        />
      </ClaimFundsResume>
      <ProcessingButton fullWidth disabled>
        <Loader active inline size="small" />
      </ProcessingButton>
    </>
  );
};

export default Processing;
