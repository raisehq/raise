import React, { useContext } from 'react';
import AppContext from '../AppContext';
import { StepsReminder, StepsReminderMobile } from './banners/StepsReminder';
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

interface KycTopBannerProps {
  enabled: boolean;
  kycStatus: number;
  kycAction?: Function;
  mobile?: boolean;
}

const KycTopBanner = ({ enabled, kycStatus, kycAction, mobile }: KycTopBannerProps) => {
  const {
    history: {
      location: { pathname }
    }
  }: any = useContext(AppContext);
  const view = Status[StatusSet[kycStatus || 5]];
  const stepsForBanner = {
    kyc: kycStatus === 5,
    kycAction
  };
  if (!enabled) {
    return null;
  }

  const inDashboard = () => pathname === '/' || pathname === '/account';

  const getStepsReminder = () => {
    if (!inDashboard()) {
      return null;
    }
    if (mobile) {
      return <StepsReminderMobile {...stepsForBanner} />;
    }
    return <StepsReminder {...stepsForBanner} />;
  };

  const getView = () =>
    view.cata({
      Start: getStepsReminder,
      Pending: () => null,
      PendingRegistry: () => null,
      Error: getStepsReminder,
      Success: () => null
    });

  return getView();
};

export default KycTopBanner;
