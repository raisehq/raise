import React, { useState, useEffect, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import ErrorConnection from './Web3Check.ErrorConnection';
import { CardSized } from '../Layout/Layout.styles';
import Wallet from './Web3Check.Wallet';
import List from './Web3Check.List';
import WalletConnect from './Web3Check.WalletConnect';
import Stages from './Web3Check.stages';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';

const getStage = (stage, handleNext, handleBack, handleSuccess) => {
  return stage.cata({
    WalletSelector: () => <Wallet onSelect={handleNext} />,
    WalletError: () => <ErrorConnection onBack={handleBack} />,
    WalletConnect: () => <WalletConnect onBack={handleBack} />,
    Checks: () => <List onSuccess={handleSuccess} onBack={handleBack} />
  });
};

const Web3Check = () => {
  const {
    web3Status: { unlocked }
  }: any = useContext(AppContext);
  const { getWeb3 }: any = useWeb3();

  const web3 = getWeb3();

  const [ui, setUI] = useState(Stages.WalletSelector);
  useEffect(() => {
    if (web3 && unlocked) setUI(Stages.Checks);
  }, []);

  useEffect(() => {
    console.log(' Checks ');
    if (web3 && unlocked && ui !== Stages.Checks && ui !== Stages.WalletSelector) {
      setUI(Stages.Checks);
    }
  }, [unlocked, web3, ui]);

  const handleBack = () => {
    setUI(Stages.WalletSelector);
  };

  const handleSuccess = () => {
    return <Redirect to="/" />;
  };

  const handleNext = () => {
    setUI(Stages.WalletConnect);
  };

  return (
    <Grid.Row>
      <CardSized>{getStage(ui, handleNext, handleBack, handleSuccess)}</CardSized>
    </Grid.Row>
  );
};

export default Web3Check;
