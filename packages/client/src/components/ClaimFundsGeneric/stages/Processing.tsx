import React, { useContext, useEffect } from 'react';
import ClaimFundsGenericContext from '../Context';
import { useRootContext } from '../../../contexts/RootContext';
import Stages from '../stages';
import {
  Header,
  ClaimFundsResume,
  FlexSpacedLayout,
  StyledLink,
  Loader,
  ProcessingButton
} from '../styles';
import { ResumeItemBig } from './ResumeItemBig';

const Processing = ({ methodId, copies }) => {
  const { setStage, monthlyLoanAPR }: any = useContext(ClaimFundsGenericContext);
  const { followTx }: any = useRootContext();

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
        <Header>{copies.processing.header}</Header>
        <FlexSpacedLayout>
          <ResumeItemBig
            title={copies.processing.resume.title}
            value={copies.processing.resume.value}
          />
        </FlexSpacedLayout>
        <StyledLink
          to="/"
          title={`While we complete the transaction, click here and check the new available loan with ${monthlyLoanAPR} APR`}
        />
      </ClaimFundsResume>
      <ProcessingButton fullWidth disabled>
        <Loader active inline size="small" />
      </ProcessingButton>
    </>
  );
};

export default Processing;
