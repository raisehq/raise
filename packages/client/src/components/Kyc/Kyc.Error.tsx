import React from 'react';
import { Icon, Button, Grid } from 'semantic-ui-react';
import { ErrorMessage, ErrorGrid } from './Kyc.styles';
const ErrorSending = ({ reSubmit }) => (
  <ErrorGrid verticalAlign="middle" textAlign="center">
    <Grid.Column>
      <ErrorMessage>
        <Icon color="red" size="huge" name="warning circle" />
        <p>Something went wrong.</p>
        <Button basic onClick={reSubmit}>
          Retry
        </Button>
      </ErrorMessage>
    </Grid.Column>{' '}
  </ErrorGrid>
);

export default ErrorSending;
