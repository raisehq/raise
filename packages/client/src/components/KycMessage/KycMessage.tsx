import React, { useContext } from 'react';
import { Icon, Message } from 'semantic-ui-react';
import { OrangeMessage } from './KycMessage.styles';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
const KycMessage = () => {
  const {
    store: {
      blockchain: { hasKYC }
    }
  }: any = useContext(AppContext);
  return (
    <OrangeMessage hidden={hasKYC} icon>
      <Icon name="info circle" />
      <Message.Content as={Link} to="/kyc">
        <Message.Header>
          Before you can lend money you first need to verify you account
        </Message.Header>
      </Message.Content>
      <Icon name="caret right" />
    </OrangeMessage>
  );
};

export default KycMessage;
