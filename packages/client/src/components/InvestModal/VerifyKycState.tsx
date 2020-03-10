import React from 'react';
import {
  //SmallModalContent,
  ConfirmButton
} from './InvestModal.styles';

const VerifyKycState = () => (
  <>
    Please verify your account to continue
    <ConfirmButton to="/kyc">Verify</ConfirmButton>
  </>
);

export default VerifyKycState;
