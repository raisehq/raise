import React from 'react';
import { Icon } from 'semantic-ui-react';
import { WarningBanner, VerifyButton, WarningSignWrapper, BlackFill } from './KycTopBanner.styles'

const WarningSight = () => (
  <WarningSignWrapper>
    <div>
      <BlackFill />
    </div>
    <div>
      <Icon name="warning sign" inverted />
    </div>
  </WarningSignWrapper>
)
const RightArrow = () => <Icon name="chevron right" />

const KycTopBanner = () => {
  return (
    <WarningBanner>
      <WarningSight />
      <div>Get Started</div>
      <RightArrow />
      <div>Connect Wallet</div>
      <RightArrow />
      <div>Membership</div>
      <RightArrow />
      <VerifyButton>
        <div>Verify Account</div>
        <RightArrow />
      </VerifyButton>
    </WarningBanner>
  )
}

export default KycTopBanner;