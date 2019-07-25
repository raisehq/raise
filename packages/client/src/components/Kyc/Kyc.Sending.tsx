import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { Sending } from './Kyc.styles';

const SendingCmp = () => (
  <Sending>
    <Dimmer active inverted>
      <Loader inverted />
    </Dimmer>
  </Sending>
);

export default SendingCmp;
