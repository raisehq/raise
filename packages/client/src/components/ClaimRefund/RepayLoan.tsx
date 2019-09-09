import React, { useState, createContext } from 'react';
import daggy from 'daggy';
import { Modal as SemanticModal } from 'semantic-ui-react';
import { InvestModalProps } from './types';

import ConfirmStage from './stages/Confirm';
import ProcessingStage from './stages/Processing';
import SuccessStage from './stages/Success';
import { RefundButton } from './ClaimRefund.styles';
import {
  Modal,
  ExitButton,
} from '../InvestModal/InvestModal.styles';

export const RepayLoanContext = createContext({});

export const Stages = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  Success: [],
});

const RepayLoanCTA: React.SFC<InvestModalProps> = ({ loan }) => {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(Stages.Confirm);

  const openModal = () => {
    setStage(Stages.Confirm)
    setOpen(true);
  }
  const closeModal = () => {
    setOpen(false);
  }

  const getStage = (stage) => {
    return stage.cata({
      Confirm: () => <ConfirmStage />,
      Processing: () => <ProcessingStage />,
      Success: () => <SuccessStage />
    });
  }



  return (
    <RepayLoanContext.Provider value={{ loan, setStage, closeModal }}>
      <RefundButton onClick={openModal}>Claim refund</RefundButton>
      <Modal open={open} size="small" onClose={closeModal}>

        <SemanticModal.Content>
          {getStage(stage)}

          <ExitButton name="close" color="black" onClick={closeModal} />

        </SemanticModal.Content>
      </Modal>
    </RepayLoanContext.Provider>
  );
}

export default RepayLoanCTA;
