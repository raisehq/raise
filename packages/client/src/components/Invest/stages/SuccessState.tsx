import React from 'react';
import { Link } from 'react-scroll';

import { SuccessStateProps } from '../types';
import { HEADER_MENU_SIZE } from '../../../commons/constants';
import { CardTitle, CardSubtitle, ButtonPink, ButtonWrapper, Content } from '../styles';
import useGoogleTagManager, { TMEvents } from '../../../hooks/useGoogleTagManager';
import useRouter from '../../../hooks/useRouter';

const SuccessState: React.SFC<SuccessStateProps> = ({ setStage, ui, closeModal }: any) => {
  const { history } = useRouter();

  const tagManager = useGoogleTagManager('Card');
  const onOK = () => {
    tagManager.sendEvent(TMEvents.Submit, 'invest_success');

    if (closeModal) {
      closeModal();
    }
    setStage(ui.Confirm);
    history.push('/account');
  };

  return (
    <Content id="modal-success">
      <CardTitle>Your funds are safe in escrow until the auction is over</CardTitle>
      <CardSubtitle>
        Your investment will be active when the auction ends. In the meantime you can check other
        investment opportunities from your dashboard.
      </CardSubtitle>

      <ButtonWrapper>
        <Link to="myActivity" spy smooth duration={500} offset={HEADER_MENU_SIZE.myActivity}>
          <ButtonPink onClick={onOK}>OK</ButtonPink>
        </Link>
      </ButtonWrapper>
    </Content>
  );
};

export default SuccessState;
