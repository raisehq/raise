import React, { useContext } from 'react';
import { Experiment, Variant } from "react-optimize";
import AppContext from '../AppContext'
import { StepsReminder, StepsReminderMobile } from './banners/StepsReminder';
import daggy from 'daggy';

const EXPERIMENT_DEPOSIT_ID = process.env.REACT_APP_AB_TEST_SKIP_DEPOSIT;

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
  const { history }: any = useContext(AppContext);
  console.log(history)
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

  const getView = () =>
    view.cata({
      Start: () => {
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

  if (!EXPERIMENT_DEPOSIT_ID) {
    return getView();
  }
  return (
    <Experiment id={EXPERIMENT_DEPOSIT_ID}>
      <Variant id="0">
        {/* Do not show Top banner in banner */}
        {!history.location.pathname.includes('deposit') && getView()}
      </Variant>
      <Variant id="1">
        {getView()}
      </Variant>
    </Experiment>
  )
};

export default KycTopBanner;
