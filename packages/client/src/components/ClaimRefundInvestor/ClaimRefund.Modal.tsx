import React, { useContext } from 'react';
import { Modal as SemanticModal } from 'semantic-ui-react';
import ConfirmStage from './stages/Confirm';
import ProcessingStage from './stages/Processing';
import SuccessStage from './stages/Success';
import ErrorStage from './stages/Error';
import { Modal, ExitButton } from './ClaimRefund.styles';
import ClaimRefundContext from './ClaimRefund.Context';

const ClaimRefundModal = () => {
  const { closeModal, stage, open } = useContext(ClaimRefundContext);

  const getStage = (current) =>
    current.cata({
      Confirm: () => <ConfirmStage />,
      Processing: () => <ProcessingStage />,
      Success: () => <SuccessStage />,
      Error: () => <ErrorStage />
    });

  return (
    <Modal open={open} size="small" onClose={closeModal}>
      <SemanticModal.Content>
        {getStage(stage)}
        <ExitButton size="normal" name="close" color="black" onClick={closeModal} />
      </SemanticModal.Content>
    </Modal>
  );
};

export default ClaimRefundModal;
