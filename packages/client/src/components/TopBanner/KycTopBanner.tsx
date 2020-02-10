import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { NotificationBar } from './banners/StepsReminder';
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
  isMobile: boolean;
}

const KycTopBanner = ({ enabled, kycStatus, kycAction, isMobile }: KycTopBannerProps) => {
  const [path, setPath] = useState('');
  const { history }: any = useContext(AppContext);

  useEffect(() => {
    setPath(history.location.pathname);
  }, [history.location.pathname]);

  const view = Status[StatusSet[kycStatus || 5]];

  const stepsForBanner = {
    kycAction,
    isMobile,
    kycStatus: kycStatus === null ? 5 : kycStatus
  };

  const showNotificationBar = () => path === '/' || path === '/account';

  const getStepsReminder = () => {
    return enabled && showNotificationBar() && <NotificationBar {...stepsForBanner} />;
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
