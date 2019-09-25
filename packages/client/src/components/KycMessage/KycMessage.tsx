import React, { useState, useContext } from 'react';
import { Icon, Message } from 'semantic-ui-react';
import { OrangeMessage, KycMessageButton } from './KycMessage.styles';
import { Link } from 'react-router-dom';
import daggy from 'daggy';
import { AppContext } from '../App';
import { useEffect } from 'react';

const Status = daggy.taggedSum('UI', {
  Pending: [],
  Success: [],
  Error: [],
  Start: []
});

const StatusSet = {
  1: 'Pending',
  2: 'Error',
  3: 'Success',
  4: 'Error',
  5: 'Start'
};

const KycMessage = () => {
  const {
    history,
    store: {
      user: {
        details: { kyc_status }
      }
    }
  }: any = useContext(AppContext);
  const [status, setStatus]: any = useState(Status.Start);

  const onKYC = () => history.push('/kyc');

  useEffect(() => {
    setStatus(Status[StatusSet[kyc_status ? kyc_status : 5]]);
  }, [kyc_status]);

  const getView = () =>
    status.cata({
      Start: () => (
        <OrangeMessage hidden={false} icon>
          <Icon name="info circle" />
          <Message.Content as={Link} to="/kyc">
            <Message.Header>
              You need to verify your account before you can start investing
            </Message.Header>
          </Message.Content>
        </OrangeMessage>
      ),
      Pending: () => (
        <OrangeMessage hidden={false} icon>
          <Icon name="info circle" />
          <Message.Content>
            <Message.Header>Your application is under review</Message.Header>
          </Message.Content>
        </OrangeMessage>
      ),
      Error: () => (
        <OrangeMessage hidden={false} icon>
          <Icon name="info circle" />
          <Message.Content as={Link} to="/kyc">
            <Message.Header>Someting went wrong, please reinit the process</Message.Header>
          </Message.Content>
          <KycMessageButton onClick={onKYC}>Verify your account</KycMessageButton>
        </OrangeMessage>
      ),
      Success: () => null
    });

  return getView();
};

export default KycMessage;
