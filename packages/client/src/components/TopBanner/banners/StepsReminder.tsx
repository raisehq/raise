import React from 'react';
import { WarningBanner } from '../KycTopBanner.styles';
import { WarningSight, RightArrow, StepButton } from '../misc';

export const getMessages = kcyStatus => {
  const messages = {
    2: 'Your application is under review',
    4: 'The blockchain is catching up 🍆'
  };
  return messages[kcyStatus];
};

export const getView = (kycStatus, isMobile, kycAction) => {
  if (kycStatus === 2 || kycStatus === 4) {
    return <WarningBanner isMobile={isMobile}>{getMessages(kycStatus)}</WarningBanner>;
  } else {
    return (
      <WarningBanner isMobile={isMobile}>
        <StepButton onClick={kycAction}>Verify Account</StepButton>
      </WarningBanner>
    );
  }
};

export const NotificationBar = ({ kycStatus, kycAction, isMobile }) => {
  const showSteps = kycStatus === 1 || kycStatus === null ;
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
      {getView(kycStatus, isMobile, kycAction)}
    </WarningBanner>
  );
};
