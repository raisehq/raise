import React, { useContext } from 'react';
import { Modal as SemanticModal } from 'semantic-ui-react';
import ConfirmStage from './stages/Confirm';
import ProcessingStage from './stages/Processing';
import SuccessStage from './stages/Success';
import ErrorStage from './stages/Error';
import { Modal, ExitButton } from './styles';
import ClaimFundsGenericContext from './Context';

const ClaimFundsGenericModal = ({ confirmContractAction, methodId, copies, onSuccessAction }) => {
  const { closeModal, stage, open } = useContext(ClaimFundsGenericContext);

  const getStage = (current) =>
    current.cata({
      Confirm: () => <ConfirmStage contractAction={confirmContractAction} copies={copies} />,
      Processing: () => (
        <ProcessingStage methodId={methodId} copies={copies} onSuccessAction={onSuccessAction} />
      ),
      Success: () => <SuccessStage />,
      Error: () => <ErrorStage />
    });

  return (
    <Modal open={open} size="small" onClose={closeModal}>
      <SemanticModal.Content>
        {getStage(stage)}
        <ExitButton size="large" name="close" color="black" onClick={closeModal} />
      </SemanticModal.Content>
    </Modal>
  );
};

export default ClaimFundsGenericModal;
