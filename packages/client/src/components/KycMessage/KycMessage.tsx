import React, { useState } from 'react';
import { Icon, Message } from 'semantic-ui-react';
import { OrangeMessage, KycMessageButton } from './KycMessage.styles';
import { Link } from 'react-router-dom';
import daggy from 'daggy';
import useRouter from '../../hooks/useRouter';
import { useRootContext } from '../../contexts/RootContext';
import { useEffect } from 'react';

const Status = daggy.taggedSum('UI', {
  Pending: [],
  Success: [],
  Error: [],
  PendingRegistry: [],
  Start: []
});

const StatusSet = {
  1: 'Error',
  2: 'Pending',
  3: 'Success',
  4: 'PendingRegistry',
  5: 'Start'
};

const KycMessage = () => {
  const { history }: any = useRouter();
  const {
    store: {
      user: {
        details: { kyc_status, accounttype_id }
      }
    }
  }: any = useRootContext();
  const [status, setStatus]: any = useState(Status.Start);

  const onKYC = () => history.push('/kyc');

  useEffect(() => {
    setStatus(Status[StatusSet[kyc_status ? kyc_status : 5]]);
  }, [kyc_status]);

  const getView = () =>
    status.cata({
      Start: () => null,
      Pending: () => (
        <OrangeMessage hidden={false} icon>
          <Icon name="info circle" />
          <Message.Content>
            <Message.Header>Your application is under review</Message.Header>
          </Message.Content>
        </OrangeMessage>
      ),
      PendingRegistry: () => (
        <OrangeMessage hidden={false} icon>
          <Icon name="info circle" />
          <Message.Content>
            <Message.Header>
              Give us a few more minutes. The blockchain needs to catch up 🍆.
            </Message.Header>
          </Message.Content>
        </OrangeMessage>
      ),
      Error: () => (
        <OrangeMessage hidden={false} icon>
          <Icon name="info circle" />
          <Message.Content as={Link} to="/kyc">
            <Message.Header>
              Someting went wrong, please
              <KycMessageButton onClick={onKYC}>reinit your application</KycMessageButton>
            </Message.Header>
          </Message.Content>
        </OrangeMessage>
      ),
      Success: () => null
    });

  return accounttype_id === 2 && getView();
};

export default KycMessage;
