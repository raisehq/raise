import React from 'react';
import { WarningBanner, WarningLink } from '../KycTopBanner.styles';
import { WarningSight, RightArrow, StepButton } from '../misc';

export const getMessages = kcyStatus => {
  const messages = {
    2: 'Your application is under review',
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

  const getLink = () => {
    return <WarningLink onClick={goToKYC}>more information</WarningLink>;
  };

  if (kycStatus === 2 || kycStatus === 4) {
    return (
      <WarningBanner isMobile={isMobile}>
        {`${getMessages(kycStatus)} `}
        {getLink()}
      </WarningBanner>
    );
  } else {
    return (
      <WarningBanner isMobile={isMobile}>
        <StepButton id="kyc-verify-button" onClick={kycAction}>
          Verify Account
        </StepButton>
      </WarningBanner>
    );
  }
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
