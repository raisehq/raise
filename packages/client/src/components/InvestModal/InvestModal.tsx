import React, { useState, useContext } from 'react';
import daggy from 'daggy';
// import { Modal as SemanticModal } from 'semantic-ui-react';
import { InvestModalProps } from './types';
import { fromWei } from 'web3-utils';
import AppContext from '../AppContext';
import InvestState from './InvestState';
import ProcessingState from './ProcessingState';
import SuccessState from './SuccessState';

import { LenderButton, Modal, ModalContent } from './InvestModal.styles';
import { match, ANY } from 'pampy';

const UI = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  Success: []
});

const InvestModal: React.SFC<InvestModalProps> = ({ loan, className }) => {
  const {
    web3Status: { hasProvider, unlocked, accountMatches, networkMatches }
  }: any = useContext(AppContext);
  const {
    modalRefs,
    store: {
      user: {
        details: { kyc_status }
      }
    }
  }: any = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(UI.Confirm);
  const [investment, setInvestment] = useState(0);

  const invested = loan.lenderAmount && Number(fromWei(loan.lenderAmount));
  const notConnected = !hasProvider || !unlocked || !accountMatches || !networkMatches;

  const buttonText = match(
    [!!notConnected, !!invested],
    [true, ANY],
    () => 'Connect wallet',
    [false, true],
    () => 'INVEST MORE',
    [false, false],
    () => 'INVEST',
    ANY,
    () => 'INVEST'
  );

  const openModal = () => {
    setStage(UI.Confirm);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const getInvestAction = stage => {
    return stage.cata({
      Confirm: () => (
        <InvestState loan={loan} setStage={setStage} setInvestment={setInvestment} ui={UI} />
      ),
      Processing: () => (
        <ProcessingState loan={loan} investment={investment} ui={UI} setStage={setStage} />
      ),
      Success: () => <SuccessState setStage={setStage} ui={UI} closeModal={closeModal} />
    });
  };
  return (
    <>
      <LenderButton
        id="btn-lender-open"
        className={className}
        fluid
        onClick={openModal}
        disabled={notConnected || kyc_status !== 3}
      >
        {buttonText}
      </LenderButton>
      <Modal open={open} onClose={closeModal} size="small" mountNode={modalRefs.current}>
        <ModalContent>{getInvestAction(stage)}</ModalContent>
      </Modal>
    </>
  );
};

export default InvestModal;
