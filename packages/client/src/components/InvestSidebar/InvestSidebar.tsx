import React, { useMemo, Suspense } from 'react';
import { useRootContext } from '../../contexts/RootContext';
import { useSidebarContext } from '../../contexts/SidebarContext';
import { useAppContext } from '../../contexts/AppContext';
import Invest from '../Invest';
import { InvestWrapper } from './styles';

const InvestSidebar = () => {
  const {
    web3Status: { hasProvider, unlocked, accountMatches, networkMatches }
  }: any = useAppContext();
  const {
    actions: { setDisplay },
    state: { loanId }
  } = useSidebarContext();
  const {
    store: {
      loan: { suggested },
      user: {
        details: { kyc_status: kycStatus }
      },
      auth: {
        login: { logged: isLogged }
      }
    }
  }: any = useRootContext();

  const loan = useMemo(() => suggested.find(({ id }) => id === loanId), [loanId]);

  const connected = hasProvider && unlocked && accountMatches && networkMatches;
  const userActivated = connected && kycStatus === 3;

  const closeSidebar = () => {
    setDisplay(false);
  };

  return (
    <>
      <Suspense fallback={<div>...</div>}>
        <InvestWrapper>
          <Invest
            loan={loan}
            userActivated={userActivated}
            fullInfo
            isLogged={isLogged}
            onClose={closeSidebar}
          />
        </InvestWrapper>
      </Suspense>
    </>
  );
};

export default InvestSidebar;
