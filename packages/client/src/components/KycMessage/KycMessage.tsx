import React, { Fragment, useContext, useState } from 'react';
import { Icon, Message } from 'semantic-ui-react';
import { OrangeMessage, KycMessageButton } from './KycMessage.styles';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import useAsyncEffect from '../../hooks/useAsyncEffect';

const KycMessage = () => {
  const {
    history,
    store: {
      blockchain: { hasKYC }
    },
    actions: {
      kyc: { onVerifyKYC }
    }
  }: any = useContext(AppContext);
  const [message, setMessage]: any = useState(true);

  const onKYC = () => history.push('/kyc');

  useAsyncEffect(async () => {
    //const verified = await onVerifyKYC();
    console.log(setMessage, onVerifyKYC);

    //setMessage(verified);
  }, []);

  return (
    <Fragment>
      {message && (
        <OrangeMessage hidden={hasKYC} icon>
          <Icon name="info circle" />
          <Message.Content as={Link} to="/kyc">
            <Message.Header>
              Before you can lend money you first need to verify you account
            </Message.Header>
          </Message.Content>
          <KycMessageButton onClick={onKYC}>Verify your account</KycMessageButton>
        </OrangeMessage>
      )}
    </Fragment>
  );
};

export default KycMessage;
