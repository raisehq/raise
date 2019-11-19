import React from 'react';
import { Label, Button, Icon } from 'semantic-ui-react';
import { BackButton, CardHeader } from './Web3Check.styles';
const ErrorConnection = ({ onBack }: any) => {
  const handleReconnect = () => {};

  return (
    <>
      <CardHeader>
        <BackButton onClick={onBack} icon basic>
          <Icon name="long arrow alternate left" />
        </BackButton>
      </CardHeader>
      <Label>Connection Failed</Label>
      <Button basic color="black" fluid onClick={handleReconnect}>
        Try Again
      </Button>
    </>
  );
};

export default ErrorConnection;
