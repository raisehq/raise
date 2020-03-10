import React, { useContext } from 'react';
import { ConfirmButton } from './InvestModal.styles';
import AppContext from '../AppContext';

const VerifyKycState = () => {
  const { history }: any = useContext(AppContext);

  return (
    <>
      <h3>Please verify your account to continue.</h3>
      <ConfirmButton onClick={() => history.push('/kyc')}>Verify</ConfirmButton>
    </>
  );
};

export default VerifyKycState;
