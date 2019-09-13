import React, { useState, useContext } from 'react';
import daggy from 'daggy';
import { Modal as SemanticModal } from 'semantic-ui-react';
import { InvestModalProps } from './types';

import InvestState from './InvestState';
import ProcessingState from './ProcessingState';
import SuccessState from './SuccessState';

import { LenderButton, Modal, ExitButton } from './InvestModal.styles';
import { AppContext } from '../App';

const UI = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  Success: [],
});

const InvestModal: React.SFC<InvestModalProps> = ({ loan }) => {
  const {
    web3Status: { hasProvider, unlocked, accountMatches, networkMatches }
  }: any = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(UI.Confirm);
  const [investment, setInvestment] = useState(0);

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
      // Error: () => (
      // )
    });
  };

  return (
    <>
      <LenderButton fluid onClick={openModal} disabled={!hasProvider || !unlocked || !accountMatches || !networkMatches}>
        {!hasProvider || !unlocked || !accountMatches || !networkMatches ? 'Connect wallet' : 'Invest'}
      </LenderButton>
      <Modal open={open} size="small" onClose={closeModal}>
        <SemanticModal.Content>
          {getInvestAction(stage)}
          <ExitButton name="close" color="black" onClick={closeModal} />
        </SemanticModal.Content>
      </Modal>
    </>
  );
};

export default InvestModal;
