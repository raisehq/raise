import React, { useState } from 'react';
import daggy from 'daggy';
import { Modal as SemanticModal } from 'semantic-ui-react';
import { InvestModalProps } from './types';
import RepayLoanContext from './RepayLoan.context';
// eslint-disable-next-line
import useRepayment from '../../hooks/useRepayment';
import ConfirmStage from './stages/Confirm';
import ProcessingStage from './stages/Processing';
import ErrorStage from './stages/Retry';
import SuccessStage from './stages/Success';

import { Modal } from '../ClaimLoan/ClaimLoan.styles';

import { BorrowerButton, ExitButton } from '../InvestModal/InvestModal.styles';

export const Stages = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  Success: [],
  Error: []
});

const RepayLoanCTA: React.SFC<InvestModalProps> = ({ loan }) => {
  const [open, setOpen] = useState(false);
  const { approved, stage, setStage, ...rest }: any = useRepayment(loan, open);

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
    <RepayLoanContext.Provider value={{ loan, setStage, closeModal, approved, ...rest }}>
      <BorrowerButton onClick={openModal}>Repay this loan</BorrowerButton>
      <Modal open={open} size="small" onClose={closeModal}>
        <SemanticModal.Content>
          {getStage(stage)}

          <ExitButton name="close" color="black" onClick={closeModal} />
        </SemanticModal.Content>
      </Modal>
    </RepayLoanContext.Provider>
  );
};

export default RepayLoanCTA;
