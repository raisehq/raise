import React, { useState } from 'react';
import daggy from 'daggy';
import BN from 'bn.js';
import { match, ANY } from 'pampy';
import { fromWei } from 'web3-utils';
import { InvestModalProps } from './types';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';
import InvestState from './InvestState';
import OldInvestState from './OldInvestState';
import ProcessingState from './ProcessingState';
import SuccessState from './SuccessState';
import VerifyKycModal from './VerifyKycState';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { LenderButton, Modal, ModalContent } from './InvestModal.styles';
import useGetCoin from '../../hooks/useGetCoin';

const FEATURE_FLAG_SWAP = process.env.REACT_APP_SWAP_ON === 'true';

const UI = daggy.taggedSum('UI', {
  Kyc: [],
  Confirm: [],
  Processing: [],
  Success: []
});

const InvestModal: React.SFC<InvestModalProps> = ({ loan, className }) => {
  const {
    modalRefs,
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
  const coin = useGetCoin(loan);
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(UI.Kyc);
  const [investment, setInvestment] = useState(0);
  const [inputTokenAmount, setInputTokenAmount] = useState<BN>(new BN('0'));

  const [selectedCoin, setCoin] = useState(coin.text);
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

  const stageModalWidth = match(stage, s => UI.Kyc.is(s), 'mini', ANY, 'small');

  const openModal = () => {
    if (isLogged && userActivated) {
      tagManager.sendEvent(TMEvents.Click, 'loan');
      setStage(UI.Confirm);
      setOpen(true);
    } else if (isLogged && !userActivated) {
      tagManager.sendEvent(TMEvents.Click, 'loan');
      setOpen(true);
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
  const closeModal = () => {
    setOpen(false);
  };

  const getInvestAction = stage => {
    return stage.cata({
      Kyc: () => <VerifyKycModal />,
      Confirm: () =>
        FEATURE_FLAG_SWAP ? (
          <InvestState
            loan={loan}
            loanCoin={coin}
            setStage={setStage}
            setInvestment={setInvestment}
            inputTokenAmount={inputTokenAmount}
            setInputTokenAmount={setInputTokenAmount}
            setCoin={setCoin}
            selectedCoin={selectedCoin}
            ui={UI}
          />
        ) : (
          <OldInvestState loan={loan} setStage={setStage} setInvestment={setInvestment} ui={UI} />
        ),
      Processing: () => (
        <ProcessingState
          loan={loan}
          loanCoin={coin}
          investment={investment}
          inputTokenAmount={inputTokenAmount}
          ui={UI}
          setStage={setStage}
          selectedCoin={selectedCoin}
        />
      ),
      Success: () => <SuccessState setStage={setStage} ui={UI} closeModal={closeModal} />
    });
  };
  return (
    <>
      <LenderButton id="btn-lender-open" className={className} fluid onClick={openModal}>
        {buttonText}
      </LenderButton>
      <Modal open={open} onClose={closeModal} size={stageModalWidth} mountNode={modalRefs.current}>
        <ModalContent>{getInvestAction(stage)}</ModalContent>
      </Modal>
    </>
  );
};

export default InvestModal;
