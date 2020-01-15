import React, { useState, useEffect, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
// URLSearchParams polyfill for IE 11
import URLSearchParams from '@ungap/url-search-params';
import ErrorConnection from './Web3Check.ErrorConnection';
import { CardSized } from '../Layout/Layout.styles';
import Wallet from './Web3Check.Wallet';
import List from './Web3Check.List';
import WalletConnect from './Web3Check.WalletConnect';
import WalletConnectForm from './WalletConnectForm';
import WalletSetUp from './WalletSetUp';
import Stages from './Web3Check.stages';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { getWalletName } from '../../utils';

const getStage = (stage, handleNext, handleBack, handleSuccess, backToConnectForm) => {
  return stage.cata({
    WalletConnectForm: () => <WalletConnectForm onExists={} onNotExists={} />,
    WalletSetUp: () => <WalletSetUp onBack={backToConnectForm} />,
    WalletSelector: () => <Wallet onNext={handleNext} onBack={backToConnectForm} />,
    WalletError: () => <ErrorConnection onBack={handleBack} />,
    WalletConnect: () => <WalletConnect onBack={handleBack} />,
    Checks: () => <List onSuccess={handleSuccess} onBack={handleBack} />
  });
};

const Web3Check = () => {
  const {
    web3Status: { unlocked },
    history,
    store: {
      user: {
        // @ts-ignore
        cryptoAddress: { cryptotypeId }
      }
    }
  }: any = useContext(AppContext);
  const redirect = new URLSearchParams(history.location.search).get('redirect');
  const { web3 }: any = useWeb3();
  const tagManager = useGoogleTagManager('Wallet');
  const [ui, setUI] = useState(Stages.WalletConnectForm);
  useEffect(() => {
    if (web3 && unlocked) {
      tagManager.sendEvent(
        TMEvents.Submit,
        'wallet_success',
        getWalletName(cryptotypeId).toLowerCase()
      );
      setUI(Stages.Checks);
    }
  }, []);

  useEffect(() => {
    // TODO: check this logic ???????????
    if (web3 && unlocked && ui !== Stages.Checks && ui !== Stages.WalletSelector) {
      tagManager.sendEvent(
        TMEvents.Submit,
        'wallet_success',
        getWalletName(cryptotypeId).toLowerCase()
      );
      setUI(Stages.Checks);
      handleSuccess();
    }
  }, [unlocked, web3, ui]);

  const backToConnectForm = () => {
    setUI(Stages.WalletConnectForm);
  };

  const handleBack = () => {
    setUI(Stages.WalletSelector);
  };

  const handleSuccess = () => {
    history.push(redirect);
  };

  const handleNext = () => {
    setUI(Stages.WalletConnect);
  };

  return (
    <Grid.Row>
      <CardSized>
        {getStage(ui, handleNext, handleBack, handleSuccess, backToConnectForm)}
      </CardSized>
    </Grid.Row>
  );
};

export default Web3Check;
