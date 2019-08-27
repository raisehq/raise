import React, { Fragment } from 'react';
import { SuccessStateProps } from './types';
import {
  CardCenteredText,
  CardTitle,
  CardSubtitle,
  ButtonGreen
} from './InvestModal.styles';


const SuccessState: React.SFC<SuccessStateProps> = ({ setStage, ui, closeModal }) => {
  const onOK = () => {
    closeModal();
    setStage(ui.Confirm);
  }

  return (
    <>
      <Fragment>
        <CardCenteredText>
          <CardTitle>Your investment has been placed</CardTitle>
          <CardSubtitle>Follow the auction progress and check new investment opportunities in your dashboard.</CardSubtitle>
        </CardCenteredText>
        <ButtonGreen onClick={onOK}>OK</ButtonGreen>
      </Fragment>
    </>
  );
};

export default SuccessState;
