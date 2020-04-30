import React, { useState } from 'react';

import { Modal as SemanticModal } from 'semantic-ui-react';
import { InvestModalProps } from '../InvestModal/types';
import ClaimLoanContext from './ClaimLoan.context';
import Stages from './ClaimLoan.stages';
import { getCalculations } from '../../utils/loanUtils';
import ConfirmStage from './stages/Confirm';
import SuccessStage from './stages/Success';
import Error from './stages/Error';
import { Modal } from './ClaimLoan.styles';

import { BorrowerButton, ExitButton } from '../InvestModal/InvestModal.styles';
import useGetCoin from '../../hooks/useGetCoin';

const ClaimLoanCTA: React.SFC<InvestModalProps> = ({ loan }: any) => {
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

  const getStage = (current: any) =>
    current.cata({
      Confirm: () => <ConfirmStage />,
      Success: () => <SuccessStage />,
      Error: () => <Error />
    });

  return (
    <ClaimLoanContext.Provider value={{ loan, calculatedLoan, setStage, closeModal }}>
      <BorrowerButton onClick={openModal}>Claim funds</BorrowerButton>
      <Modal open={open} size="small" onClose={closeModal}>
        <SemanticModal.Content>
          {getStage(stage)}

          <ExitButton name="close" color="black" onClick={closeModal} />
        </SemanticModal.Content>
      </Modal>
    </ClaimLoanContext.Provider>
  );
};

export default ClaimLoanCTA;
