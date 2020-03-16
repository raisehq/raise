import React, { useState, useEffect } from 'react';
// URLSearchParams polyfill for IE 11
import URLSearchParams from '@ungap/url-search-params';
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
import { isMobile } from 'react-device-detect';

const getStage = (
  stage,
  handleNext,
  handleBack,
  handleSuccess,
  backToConnectForm,
  onExists,
  onNotExists
) => {
  return stage.cata({
    WalletConnectForm: () => <WalletConnectForm onExists={onExists} onNotExists={onNotExists} />,
    WalletSetUp: () => <WalletSetUp onNext={handleNext} onBack={backToConnectForm} />,
    WalletSelector: () => <Wallet onNext={handleNext} onBack={backToConnectForm} />,
    WalletConnect: () => <WalletConnect onBack={handleBack} />,
    Checks: () => <List onSuccess={handleSuccess} onBack={handleBack} />
  });
};

const Web3Check = () => {
  const {
    store: {
      user: {
        cryptoAddress: { cryptotypeId }
      }
    }
  }: any = useRootContext();
  const {
    web3Status: { unlocked }
  }: any = useAppContext();
  const { history }: any = useRouter();
  const redirect = new URLSearchParams(history.location.search).get('redirect');
  const { web3 }: any = useWeb3();
  const tagManager = useGoogleTagManager('Wallet');
  const [ui, setUI] = useState(isMobile ? Stages.WalletSelector : Stages.WalletConnectForm);
  const [prevStage, setPrevStage] = useState(isMobile ? 'WalletSelector' : 'WalletConnectForm');

  useEffect(() => {
    if (web3 && unlocked) {
      tagManager.sendEvent(
        TMEvents.Submit,
        'wallet_success',
        getWalletName(cryptotypeId).toLowerCase()
      );
      if (window.fbq) {
        window.fbq('trackCustom', 'wallet_success', {
          type: getWalletName(cryptotypeId).toLowerCase()
        });
      }
      setUI(Stages.Checks);
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
      tagManager.sendEvent(
        TMEvents.Submit,
        'wallet_success',
        getWalletName(cryptotypeId).toLowerCase()
      );
      if (window.fbq) {
        window.fbq('trackCustom', 'wallet_success', {
          type: getWalletName(cryptotypeId).toLowerCase()
        });
      }
      setUI(Stages.Checks);
      handleSuccess();
    }
  }, [unlocked, web3, ui]);

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

  const handleSuccess = () => {
    history.push(redirect);
  };

  const handleNext = step => {
    setUI(Stages.WalletConnect);
    setPrevStage(step);
  };

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
