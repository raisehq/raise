import React from 'react';
import { MissingKyc, MissingKycMobile } from './banners/MissingKyc';
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
  action?: Function;
  mobile?: boolean;
}

const KycTopBanner = ({ enabled, kycStatus, action, mobile }: KycTopBannerProps) => {
  const view = Status[StatusSet[kycStatus || 5]];

  console.log(enabled, kycStatus);

  if (!enabled) {
    return null;
  }

  const getView = () =>
    view.cata({
      Start: () => {
        if (mobile) {
          return <MissingKycMobile action={action} />;
        }
        return <MissingKyc action={action} />;
      },
      Pending: () => null,
      PendingRegistry: () => null,
      Error: () => null,
      Success: () => null
    });

  return getView();
};

export default KycTopBanner;
