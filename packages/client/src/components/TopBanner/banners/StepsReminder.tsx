import React from 'react';
import { WarningBanner } from '../KycTopBanner.styles';
import { WarningSight, RightArrow, StepButton } from '../misc';

export const Steps = (kycAction, kyc, mobile) => {
  if (!kyc) {
    return (
      <>
        {/* <StepButton onClick={hasDepositAction}>Deposit</StepButton>
        <RightArrow /> */}
        <StepButton onClick={kycAction}>Verify Account</StepButton>
      </>
    );
  }
  if (!kyc && mobile) {
    return <StepButton onClick={kycAction}>Verify Account</StepButton>;
  }
  // if (hasDepositAction && !kyc && !mobile) {
  //   return (
  //     <>
  //       <div>Deposit</div>
  //       <RightArrow />
  //       <StepButton onClick={kycAction}>Verify Account</StepButton>
  //     </>
  //   );
  // }
  // if (!hasDepositAction && kyc) {
  //   return <StepButton onClick={hasDepositAction}>Deposit</StepButton>;
  // }
  return null;
};

export const StepsReminderMobile = ({ kycAction, kyc }) => (
  <WarningBanner mobile>
    <WarningSight />
    {Steps(kycAction, kyc, true)}
  </WarningBanner>
);

export const StepsReminder = ({ kycAction, kyc }) => (
  <WarningBanner>
    <WarningSight />
    <div>Get Started</div>
    <RightArrow />
    <div>Connect Wallet</div>
    <RightArrow />
    {Steps(kycAction, kyc, false)}
  </WarningBanner>
);
