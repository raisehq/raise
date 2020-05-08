import React from 'react';
import { match, ANY } from 'pampy';
import { Button } from '@raisehq/components';
import { fromWei } from 'web3-utils';
import { InvestModalProps } from '../../interfaces/Invest';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import ButtonContainer from './styles';

import { useSidebarContext } from '../../contexts/SidebarContext';

const InvestWithSlider: React.SFC<InvestModalProps> = ({ loan, className }: any) => {
  const {
    actions: { setLoanId }
  } = useSidebarContext();
  const {
    web3Status: { hasProvider, unlocked, accountMatches, networkMatches }
  }: any = useAppContext();
  const { history }: any = useRouter();
  const {
    store: {
      auth: {
        login: { logged: isLogged }
      }
    },
    actions: {
      onboarding: { showOnboarding }
    }
  }: any = useRootContext();
  const tagManager = useGoogleTagManager('Card');
  const invested = !!(loan.lenderAmount && Number(fromWei(loan.lenderAmount)));
  // prettier-ignore
  const connected = (hasProvider && unlocked && accountMatches && networkMatches);

  const buttonText = match(
    [connected, invested],
    [true, true],
    () => 'INVEST MORE',
    ANY,
    () => 'INVEST'
  );

  const openSlide = () => {
    if (isLogged) {
      tagManager.sendEvent(TMEvents.Click, 'loan');
      setLoanId(loan?.id);
    } else {
      const isBorrowerProfile = history.location.pathname.split('/').filter(pt => pt === 'c');
      tagManager.sendEventCategory(
        'Card',
        TMEvents.Click,
        isBorrowerProfile ? 'borrower_profile' : 'marketplace'
      );
      showOnboarding();
    }
  };

  return (
    <ButtonContainer>
      <Button
        idAttr="btn-lender-open"
        className={className}
        onClick={openSlide}
        text={buttonText}
        disabled={false}
        type="primary"
        size="large"
        fullWidth
      />
    </ButtonContainer>
  );
};

export default InvestWithSlider;
