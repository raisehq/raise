import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import URLSearchParams from '@ungap/url-search-params';
import { Dimmer, Loader } from 'semantic-ui-react';

import Wallet from './Web3Check.Wallet';
import List from './Web3Check.List';
import WalletConnect from './Web3Check.WalletConnect';
import WalletConnectForm from './WalletConnectForm';
import WalletSetUp from './WalletSetUp';
import Stages from './Web3Check.stages';
import useWeb3 from '../../hooks/useWeb3';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { getWalletName } from '../../utils';

const tagLabelMapping = {
  coinbase: 'coinbase_success',
  opera: 'opera_success',
  metamask: 'metamask_success'
};

const getStage = (
  stage,
  handleNext,
  handleBack,
  handleSuccess,
  backToConnectForm,
  onExists,
  onNotExists
) =>
  stage.cata({
    WalletConnectForm: () => <WalletConnectForm onExists={onExists} onNotExists={onNotExists} />,
    WalletSetUp: () => <WalletSetUp onNext={handleNext} onBack={backToConnectForm} />,
    WalletSelector: () => <Wallet onNext={handleNext} onBack={backToConnectForm} />,
    WalletConnect: (hasWallet) => <WalletConnect onBack={handleBack} hasWallet={hasWallet} />,
    Checks: () => <List onSuccess={handleSuccess} onBack={handleBack} />
  });

const Web3Check = () => {
  const {
    store: {
      user: {
        cryptoAddress: { cryptotypeId }
      },
      config: { network, networkId },
      auth: {
        login: { logged: isLogged }
      }
    }
  }: any = useRootContext();
  const {
    web3Status: { unlocked, hasProvider, accountMatches }
  }: any = useAppContext();
  const { history }: any = useRouter();
  const [loading, setLoading] = useState(true);
  const redirect = new URLSearchParams(history.location.search).get('redirect');
  const { connectWallet, web3, getCurrentProviderName }: any = useWeb3();
  const tagManager = useGoogleTagManager('Wallet');
  const [ui, setUI] = useState(isMobile ? Stages.WalletSelector : Stages.WalletConnectForm);
  const [prevStage, setPrevStage] = useState(isMobile ? 'WalletSelector' : 'WalletConnectForm');

  const handleSuccess = () => {
    history.push(redirect || '/');
  };

  useEffect(() => {
    if (web3 && unlocked) {
      const walletName = getWalletName(getCurrentProviderName()).toLowerCase();
      tagManager.sendEvent(TMEvents.Submit, 'wallet_success', walletName);
      tagManager.sendEvent(TMEvents.Submit, tagLabelMapping[walletName], walletName);
      setLoading(false);
      setUI(Stages.Checks);
    } else if (!hasProvider && isLogged && !unlocked && !web3) {
      // Check the type of wallet and try to connect to the provider
      connectWallet(cryptotypeId, network, networkId, true)
        .catch(() => setLoading(false))
        .then(() => handleSuccess());
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (
      web3 &&
      unlocked &&
      ui !== Stages.Checks &&
      ui !== Stages.WalletConnectForm &&
      ui !== Stages.WalletSelector &&
      ui !== Stages.WalletSetUp
    ) {
      const walletName = getWalletName(cryptotypeId).toLowerCase();
      tagManager.sendEvent(TMEvents.Submit, 'wallet_success', walletName);
      tagManager.sendEvent(TMEvents.Submit, tagLabelMapping[walletName], walletName);

      setUI(Stages.Checks);
    } else if (web3 && unlocked && accountMatches) {
      handleSuccess();
    }
  }, [unlocked, web3, accountMatches, ui]);

  const onExists = () => {
    setUI(Stages.WalletSelector);
  };

  const onNotExists = () => {
    setUI(Stages.WalletSetUp);
  };

  const backToConnectForm = () => {
    setUI(Stages.WalletConnectForm);
  };

  const handleBack = () => {
    switch (prevStage) {
      case 'WalletSelector':
        setUI(Stages.WalletSelector);
        break;
      case 'WalletSetUp':
        setUI(Stages.WalletSetUp);
        break;
      default:
        setUI(Stages.WalletConnectForm);
        break;
    }
  };

  const handleNext = (step, hasWallet) => {
    setUI(Stages.WalletConnect(hasWallet));
    setPrevStage(step);
  };
  if (loading)
    return (
      <Dimmer active inverted>
        <Loader>Loading app</Loader>
      </Dimmer>
    );
  return getStage(
    ui,
    handleNext,
    handleBack,
    handleSuccess,
    backToConnectForm,
    onExists,
    onNotExists
  );
};

export default Web3Check;
