import React from 'react';
import { SuccessStateProps } from './types';
import {
  Header,
  ConfirmButton
} from './InvestModal.styles';


const SuccessState: React.SFC<SuccessStateProps> = ({ setStage, ui, closeModal }) => {
  const onOK = () => {
    closeModal();
    setStage(ui.Confirm);
  }

  return (
    <>
      <Header>Done!</Header>
      <ConfirmButton onClick={onOK}>OK</ConfirmButton>
    </>
  );
};

export default SuccessState;
