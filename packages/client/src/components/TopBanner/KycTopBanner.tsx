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
  hasDeposit: boolean;
  kycAction?: Function;
  hasDepositAction?: Function;
  mobile?: boolean;
}

const KycTopBanner = ({
  enabled,
  kycStatus,
  kycAction,
  hasDeposit,
  hasDepositAction,
  mobile
}: KycTopBannerProps) => {
  const {
    history: {
      location: { pathname }
    }
  }: any = useContext(AppContext);
  const view = Status[StatusSet[(hasDeposit && kycStatus) || 5]];
  const stepsForBanner = {
    kyc: kycStatus === 5,
    kycAction,
    hasDeposit,
    hasDepositAction
  };
  if (!enabled) {
    return null;
  }

  const inDashboard = () =>
    pathname === '/' ||
    pathname === '/account' ||
    pathname === '/kyc' ||
    pathname === '/kyc-bloom' ||
    pathname === '/kyc-sumsub';

  const getView = () =>
    view.cata({
      Start: () => {
        if (!inDashboard()) {
          return null;
        }
        if (mobile) {
          return <StepsReminderMobile {...stepsForBanner} />;
        }
        return <StepsReminder {...stepsForBanner} />;
      },
      Pending: () => null,
      PendingRegistry: () => null,
      Error: () => null,
      Success: () => null
    });

  return getView();
};

export default KycTopBanner;
