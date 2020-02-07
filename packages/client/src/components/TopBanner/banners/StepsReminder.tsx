import React from 'react';
import { WarningBanner } from '../KycTopBanner.styles';
import { WarningSight, RightArrow, StepButton } from '../misc';

export const Steps = kycAction => <StepButton onClick={kycAction}>Verify Account</StepButton>;

export const getMessages = kcyStatus => {
  const messages = {
    2: 'Your application is under review',
    4: 'The blockchain is catching up 🍆'
  };
  return messages[kcyStatus];
};

export const NotificationBar = ({ kycStatus, kycAction, isMobile }) => {
  console.log(kycStatus);
  const showSteps = kycStatus === 1 || kycStatus === 5;
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
      {renderView(isMobile, kycAction, kycStatus)}
    </WarningBanner>
  );
};

export const renderView = (isMobile, kycAction, kycStatus) => {
  if (kycStatus !== 1 || kycStatus !== 5) {
    return <WarningBanner isMobile={isMobile}>{getMessages(kycStatus)}</WarningBanner>;
  } else {
    return Steps(kycAction);
  }
};
