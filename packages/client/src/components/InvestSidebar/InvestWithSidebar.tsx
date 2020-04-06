import React from 'react';
import { match, ANY } from 'pampy';
import { Button } from '@raisehq/components';
import { fromWei } from 'web3-utils';
import { InvestModalProps } from '../InvestModal/types';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { ButtonContainer } from '../InvestModal/InvestModal.styles';
import { useSidebarContext } from '../../contexts/SidebarContext';

const InvestWithSlider: React.SFC<InvestModalProps> = ({ loan, className }) => {
  const {
    actions: { setLoanId }
  } = useSidebarContext();
  const {
    web3Status: { hasProvider, unlocked, accountMatches, networkMatches }
  }: any = useAppContext();
  const { history }: any = useRouter();
  const {
    store: {
      user: {
        details: { kyc_status }
      },
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
  const userActivated = connected && kyc_status === 3;

  const buttonText = match(
    [connected, invested],
    [true, true],
    () => 'INVEST MORE',
    ANY,
    () => 'INVEST'
  );

  const openSlide = () => {
    if (isLogged && userActivated) {
      tagManager.sendEvent(TMEvents.Click, 'loan');
      setLoanId(loan?.id);
    } else if (isLogged && !userActivated) {
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
    <>
      <ButtonContainer>
        <Button
          idAttr="btn-lender-open"
          className={className}
          onClick={openSlide}
          text={buttonText}
          disabled={false}
          type={'primary'}
          size={'large'}
          fullWidth={true}
        />
      </ButtonContainer>
    </>
  );
};

export default InvestWithSlider;
