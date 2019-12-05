import React from 'react';
import { WarningBanner } from '../KycTopBanner.styles';
import { WarningSight, RightArrow, VerifyButton } from '../misc';

export const MissingKycMobile = ({ action }) => (
  <WarningBanner mobile>
    <WarningSight />
    <div>
      Step 4 of 4
    </div>
    <VerifyButton onClick={action} />
  </WarningBanner >
)

export const MissingKyc = ({ action }) => (
  <WarningBanner>
    <WarningSight />
    <div>Get Started</div>
    <RightArrow />
    <div>Connect Wallet</div>
    <RightArrow />
    <div>Membership</div>
    <RightArrow />
    <VerifyButton onClick={action} />
  </WarningBanner>
)