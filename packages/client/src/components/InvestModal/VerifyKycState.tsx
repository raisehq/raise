import React from 'react';
import { useHistory } from 'react-router-dom';
import { ConfirmButton } from './InvestModal.styles';

const VerifyKycState = () => {
  const history: any = useHistory();

  return (
    <>
      <h3>Please verify your account to continue.</h3>
      <ConfirmButton onClick={() => history.push('/kyc')}>Verify</ConfirmButton>
    </>
  );
};

export default VerifyKycState;
