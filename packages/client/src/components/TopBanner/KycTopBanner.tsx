import React from 'react';
import daggy from 'daggy';
import useRouter from '../../hooks/useRouter';

import { NotificationBar } from './banners/StepsReminder';

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

export interface KycTopBannerProps {
  enabled: boolean;
  kycStatus: number;
  kycAction?: Function;
  isMobile: boolean;
  kycBCStatus: boolean;
  kycProvider: number;
}

const KycTopBanner = ({
  enabled,
  kycStatus,
  kycAction,
  isMobile,
  kycBCStatus,
  kycProvider
}: KycTopBannerProps) => {
  const { history }: any = useRouter();

  const view = Status[StatusSet[kycStatus || 5]];

  const stepsForBanner = {
    kycAction,
    isMobile,
    kycStatus: kycStatus === 3 && kycBCStatus ? 3 : kycStatus === 3 ? 4 : kycStatus,
    history,
    kycProvider
  };

  const getStepsReminder = () => {
    return enabled && <NotificationBar {...stepsForBanner} />;
  };

  const getView = () =>
    view.cata({
      Start: getStepsReminder,
      Pending: getStepsReminder,
      PendingRegistry: getStepsReminder,
      Error: getStepsReminder,
      Success: () => null
    });

  return getView();
};

export default KycTopBanner;
