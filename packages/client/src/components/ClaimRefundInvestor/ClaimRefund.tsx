import React, { useState, createContext } from 'react';
import daggy from 'daggy';
import { Modal as SemanticModal } from 'semantic-ui-react';
import { InvestModalProps } from './types';

import ConfirmStage from './stages/Confirm';
import ProcessingStage from './stages/Processing';
import SuccessStage from './stages/Success';
import ErrorStage from './stages/Error';
import { RefundButton } from './ClaimRefund.styles';
// import { Modal, ExitButton } from '../InvestModal/InvestModal.styles';
import { Modal, ExitButton } from './ClaimRefund.styles';
import { getCalculations } from '../../utils/loanUtils';

export const ClaimRefundContext = createContext({});

export const Stages = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  Success: [],
  Error: []
});

const ClaimRefundCTA: React.SFC<InvestModalProps> = ({ loan }) => {
  const calculatedLoan = getCalculations(loan);
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(Stages.Confirm);

  const openModal = () => {
    setStage(Stages.Confirm);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const getStage = stage => {
    return stage.cata({
      Confirm: () => <ConfirmStage />,
      Processing: () => <ProcessingStage />,
      Success: () => <SuccessStage />,
      Error: () => <ErrorStage />
    });
  };

  return (
    <ClaimRefundContext.Provider value={{ loan, setStage, closeModal, calculatedLoan }}>
      <RefundButton onClick={openModal}>get refund</RefundButton>
      <Modal open={open} size="small" onClose={closeModal}>
        <SemanticModal.Content>
          {getStage(stage)}

          <ExitButton size="normal" name="close" color="black" onClick={closeModal} />
        </SemanticModal.Content>
      </Modal>
    </ClaimRefundContext.Provider>
  );
};

export default ClaimRefundCTA;
