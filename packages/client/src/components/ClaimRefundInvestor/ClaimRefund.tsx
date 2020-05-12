import React, { useState } from 'react';

import { Modal as SemanticModal } from 'semantic-ui-react';
import { InvestModalProps } from './types';

import ConfirmStage from './stages/Confirm';
import ProcessingStage from './stages/Processing';
import SuccessStage from './stages/Success';
import ErrorStage from './stages/Error';
import { RefundButton, Modal, ExitButton } from './ClaimRefund.styles';
import Stages from './ClaimRefund.stages';
import ClaimRefundContext from './ClaimRefund.context';
import { getCalculations } from '../../utils/loanUtils';
import useGetCoin from '../../hooks/useGetCoin';

const ClaimRefundCTA: React.SFC<InvestModalProps> = ({ loan }: any) => {
  const coin = useGetCoin(loan);
  const calculatedLoan = getCalculations(loan, coin.decimals);
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState(Stages.Confirm);

  const openModal = () => {
    setStage(Stages.Confirm);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const getStage = (current) =>
    current.cata({
      Confirm: () => <ConfirmStage />,
      Processing: () => <ProcessingStage />,
      Success: () => <SuccessStage />,
      Error: () => <ErrorStage />
    });

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
