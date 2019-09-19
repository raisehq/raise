import React, { useState, createContext } from 'react';
import daggy from 'daggy';
import { Modal as SemanticModal } from 'semantic-ui-react';
import { InvestModalProps } from './types';

import useClaimRepay from './useClaimRepay';
import ConfirmStage from './stages/Confirm';
import ErrorStage from './stages/Retry';
import SuccessStage from './stages/Success';

import { Modal } from '../ClaimLoan/ClaimLoan.styles';

import { LenderButton, ExitButton } from '../InvestModal/InvestModal.styles';

export const ClaimRepayContext = createContext({});

export const Stages = daggy.taggedSum('UI', {
  Confirm: [],
  Success: [],
  Error: []
});

const ClaimRepayCTA: React.SFC<InvestModalProps> = ({ loan }) => {
  const [open, setOpen] = useState(false);
  const { stage, setStage, ...rest }: any = useClaimRepay(loan, open);

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
      Success: () => <SuccessStage />,
      Error: () => <ErrorStage />
    });
  };

  return (
    <ClaimRepayContext.Provider value={{ loan, setStage, closeModal, ...rest }}>
      <LenderButton onClick={openModal}>Withdraw</LenderButton>
      <Modal open={open} size="small" onClose={closeModal}>
        <SemanticModal.Content>
          {getStage(stage)}

          <ExitButton name="close" color="black" onClick={closeModal} />
        </SemanticModal.Content>
      </Modal>
    </ClaimRepayContext.Provider>
  );
};

export default ClaimRepayCTA;
