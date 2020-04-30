import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import daggy from 'daggy';
import { Icon, Message } from 'semantic-ui-react';
import { OrangeMessage, KycMessageButton } from './KycMessage.styles';

import useRouter from '../../hooks/useRouter';
import { useRootContext } from '../../contexts/RootContext';

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
        details: { kyc_status: kycStatus, accounttype_id: accountTypeId }
      }
    }
  }: any = useRootContext();
  const [status, setStatus]: any = useState(Status.Start);

  const onKYC = () => history.push('/kyc');

  useEffect(() => {
    setStatus(Status[StatusSet[kycStatus || 5]]);
  }, [kycStatus]);

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
      /* eslint-disable */
      PendingRegistry: () => (
        <OrangeMessage hidden={false} icon>
          <Icon name="info circle" />
          <Message.Content>
            <Message.Header>
              Give us a few more minutes. The blockchain needs to catch up 🍆.
            </Message.Header>
          </Message.Content>
        </OrangeMessage>
      ) /* eslint-enable */,
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

  return accountTypeId === 2 && getView();
};

export default KycMessage;
