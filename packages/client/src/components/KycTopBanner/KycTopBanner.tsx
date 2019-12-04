import React from 'react';
import { Icon } from 'semantic-ui-react';
import { WarningBanner, VerifyButton, WarningSignWrapper, BlackFill } from './KycTopBanner.styles';
import daggy from 'daggy';

export const Status = daggy.taggedSum('UI', {
  Pending: [],
  Success: [],
  Error: [],
  PendingRegistry: [],
  Start: []
});

export const StatusSet = {
  1: 'Error',
  2: 'Pending',
  3: 'Success',
  4: 'PendingRegistry',
  5: 'Start'
};

const WarningSight = () => (
  <WarningSignWrapper>
    <div>
      <BlackFill />
    </div>
    <div>
      <Icon name="warning sign" inverted />
    </div>
  </WarningSignWrapper>
);
const RightArrow = () => <Icon name="chevron right" />;

const KycTopBanner = ({ enabled, kycStatus, action }) => {
  const view = Status[StatusSet[kycStatus || 5]];

  if (!enabled) {
    return null;
  }

  const getView = () =>
    view.cata({
      Start: () => (
        <WarningBanner>
          <WarningSight />
          <div>Get Started</div>
          <RightArrow />
          <div>Connect Wallet</div>
          <RightArrow />
          <div>Membership</div>
          <RightArrow />
          <VerifyButton onClick={action}>
            <div>Verify Account</div>
            <RightArrow />
          </VerifyButton>
        </WarningBanner>
      ),
      Pending: () => null,
      PendingRegistry: () => null,
      Error: () => null,
      Success: () => null
    });

  return getView();
};

export default KycTopBanner;
