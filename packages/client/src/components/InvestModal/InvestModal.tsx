import React, { useState, useContext } from 'react';
import daggy from 'daggy';
// import { Modal as SemanticModal } from 'semantic-ui-react';
import { InvestModalProps } from './types';
import { fromWei } from 'web3-utils';
import { AppContext } from '../App';
import InvestState from './InvestState';
import ProcessingState from './ProcessingState';
import SuccessState from './SuccessState';

import { LenderButton, Modal, ExitButton, ModalContet } from './InvestModal.styles';
import { match, ANY } from 'pampy';

const UI = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  Success: []
});

const InvestModal: React.SFC<InvestModalProps> = ({ loan }) => {
  const {
    web3Status: { hasProvider, unlocked, accountMatches, networkMatches }
  }: any = useContext(AppContext);
  const { modalRefs }: any = useContext(AppContext);
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
      // Error: () => (
      // )
    });
  };
  return (
    <>
      <LenderButton id="btn-lender-open" fluid onClick={openModal} disabled={notConnected}>
        {buttonText}
      </LenderButton>
      <Modal open={open} size="small" onClose={closeModal} mountNode={modalRefs.current}>
        <ModalContet>
          {getInvestAction(stage)}
          <ExitButton name="close" color="black" onClick={closeModal} />
        </ModalContet>
      </Modal>
    </>
  );
};

export default InvestModal;
