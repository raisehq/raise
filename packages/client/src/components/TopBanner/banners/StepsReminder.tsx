import React from 'react';
import { WarningBanner, WarningLink } from '../KycTopBanner.styles';
import { WarningSight, RightArrow, StepButton } from '../misc';

export const getMessages = kcyStatus => {
  const messages = {
    2: 'to start investing. If you already did, soon you will be able to invest 👍',
    4: 'Your account is being verified, this process won’t take long 🤓'
  };
  return messages[kcyStatus];
};

export const getView = (kycStatus, isMobile, kycAction, history, kycProvider) => {
  const goToKYC = () => {
    switch (kycProvider) {
      case 1:
        history.push('kyc-sumsub');
        break;
      case 2:
        history.push('kyc-bloom');
        break;
      default:
        history.push('kyc');
        break;
    }
  };

  if (kycStatus === 2) {
    return (
      <WarningBanner isMobile={isMobile}>
        <WarningLink onClick={goToKYC}>Complete your account verification </WarningLink>
        {`${getMessages(kycStatus)}`}
      </WarningBanner>
    );
  }
  if (kycStatus === 4) {
    return (
      <WarningBanner isMobile={isMobile}>
        {`${getMessages(kycStatus)} `}
        <WarningLink onClick={goToKYC}>more information</WarningLink>
      </WarningBanner>
    );
  }
  return (
    <WarningBanner isMobile={isMobile}>
      <StepButton id="kyc-verify-button" onClick={kycAction}>
        Verify Account
      </StepButton>
    </WarningBanner>
  );
};

export const NotificationBar = ({ kycStatus, kycAction, isMobile, history, kycProvider }) => {
  const showSteps = kycStatus === 1 || kycStatus === null;
  return (
    <WarningBanner isMobile={isMobile}>
      <WarningSight />
      {!isMobile && showSteps && (
        <>
          <div>Get Started</div>
          <RightArrow />
          <div>Connect Wallet</div>
          <RightArrow />
        </>
      )}
      {getView(kycStatus, isMobile, kycAction, history, kycProvider)}
    </WarningBanner>
  );
};
