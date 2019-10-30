import React from 'react';
import { Grid } from 'semantic-ui-react';
// import Description from './Web3Check.Messages';
import { CardContent } from './Web3Check.styles';
//import Web3CheckList from './Web3Check.List';
import { CardSized } from '../Layout/Layout.styles';
import Wallet from './Web3Check.Wallet';
const Web3Check = () => (
  <Grid.Row>
    <CardSized>
      <CardContent>
        <Wallet />
      </CardContent>
    </CardSized>
  </Grid.Row>
);

export default Web3Check;
