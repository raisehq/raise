import React from 'react';
import { WarningBanner } from '../KycTopBanner.styles';
import { WarningSight, RightArrow, StepButton } from '../misc';

export const Steps = (kycAction, kyc, hasDeposit, hasDepositAction, mobile) => {
  if (!hasDeposit && !kyc) {
    return (
      <>
        <StepButton onClick={hasDepositAction}>Membership</StepButton>
        <RightArrow />
        <StepButton onClick={kycAction}>Verify Account</StepButton>
      </>
    );
  }
  if (hasDepositAction && !kyc && mobile) {
    return <StepButton onClick={kycAction}>Verify Account</StepButton>;
  }
  if (hasDepositAction && !kyc && !mobile) {
    return (
      <>
        <div>Membership</div>
        <RightArrow />
        <StepButton onClick={kycAction}>Verify Account</StepButton>
      </>
    );
  }
  if (!hasDepositAction && kyc) {
    return <StepButton onClick={hasDepositAction}>Membership</StepButton>;
  }
  return null;
};

export const StepsReminderMobile = ({ kycAction, kyc, hasDeposit, hasDepositAction }) => (
  <WarningBanner mobile>
    <WarningSight />
    {Steps(kycAction, kyc, hasDeposit, hasDepositAction, true)}
  </WarningBanner>
);

export const StepsReminder = ({ kycAction, kyc, hasDeposit, hasDepositAction }) => (
  <WarningBanner>
    <WarningSight />
    <div>Get Started</div>
    <RightArrow />
    <div>Connect Wallet</div>
    <RightArrow />
    {Steps(kycAction, kyc, hasDeposit, hasDepositAction, false)}
  </WarningBanner>
);
