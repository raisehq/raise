import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
// import Description from './Web3Check.Messages';
import { CardContent } from './Web3Check.styles';
import Web3CheckList from './Web3Check.List';
import { CardSized } from '../Layout/Layout.styles';
import Wallet from './Web3Check.Wallet';
import useWallet from '../../hooks/useWallet';

const Web3Check = () => {
  const [check, setCheck] = useState(false);
  const handleSelectProvider = () => {
    setCheck(true);
  };
  const wallet = useWallet();
  console.log('WALLET ', wallet);
  const Check = check ? <Web3CheckList /> : <Wallet onSelect={handleSelectProvider} />;
  return (
    <Grid.Row>
      <CardSized>
        <CardContent>{Check}</CardContent>
      </CardSized>
    </Grid.Row>
  );
};

export default Web3Check;
