import React from 'react';
import { Icon } from 'semantic-ui-react';
import { BackButton, CardHeader } from './Web3Check.styles';

const BackBtn = ({ onBack }: any) => (
  <CardHeader>
    <BackButton onClick={onBack} icon basic>
      <Icon name="long arrow alternate left" size="large" />
    </BackButton>
  </CardHeader>
);

export default BackBtn;
