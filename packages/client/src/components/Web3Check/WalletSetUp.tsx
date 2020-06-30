import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { ButtonLink } from '@raisehq/components';
import {
  CardTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  GoBack,
  SetUpSubtitle,
  HelpMessage,
  ButtonContainer,
  HelpLink
} from './Web3Check.styles';

import OnboardingProgressBar from '../OnboardingProgressBar';

import GoBackButton from '../GoBackButton';
import { getWalletName } from '../../utils';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import useWeb3 from '../../hooks/useWeb3';
import { useRootContext } from '../../contexts/RootContext';
import CryptoWallets from '../../commons/cryptoWallets';
import { IWallet } from '../../interfaces/IWallet';

const WalletSetUp = ({ onNext, onBack }: any) => {
  const {
    store: {
      config: { network, networkId }
    }
  }: any = useRootContext();
  const [hasMetamask, setHasMetamask] = useState({});
  const tagManager = useGoogleTagManager('Wallet');
  const { web3, getDefaultWeb3, connectWallet }: any = useWeb3();
  const [defaultWallet, setDefaultWallet] = useState<IWallet>(getDefaultWeb3());

  useEffect(() => {
    setDefaultWallet(getDefaultWeb3());

    if (defaultWallet?.name === -1 || defaultWallet?.name !== CryptoWallets.Metamask) {
      setHasMetamask({ icon: 'external_link.svg' });
    } else {
      setHasMetamask({ center: true });
    }
  }, [web3]);

  const handlerWallet = (walletSelected) => async () => {
    const walletName = getWalletName(walletSelected).toLowerCase();
    tagManager.sendEvent(TMEvents.Click, 'wallet_attempt', walletName);

    if (
      (defaultWallet?.name === -1 && walletName === 'metamask') ||
      (walletName === 'metamask' && defaultWallet?.name !== CryptoWallets.Metamask)
    ) {
      window.open('http://metamask.app.link/', '_blank');
    } else {
      try {
        await connectWallet(walletSelected, network, networkId);
        onNext('WalletSetUp', false);
      } catch (error) {
        // console.log(error)
      }
    }
  };

  return (
    <Web3CheckWalletWrapper>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletTitle>
        <CardTitle>Let&apos;s setup your new wallet</CardTitle>
        <SetUpSubtitle>
          Start by installing and setting up the Metamask browser extension, an easy, fast, and
          secure Ethereum wallet.
        </SetUpSubtitle>
        <SetUpSubtitle>
          Once your wallet is ready, refresh your browser and connect it to Raise.
        </SetUpSubtitle>
      </SelectYourWalletTitle>

      <ButtonContainer>
        <ButtonLink
          onClick={handlerWallet(CryptoWallets.Metamask)}
          size="large"
          text="Install Metamask"
          fullWidth
          type="secondary"
          logo="metamask.png"
          {...hasMetamask}
        />
      </ButtonContainer>
      <HelpMessage style={{ bottom: '65px' }}>
        Need help? Read our guide on{' '}
        <HelpLink
          href="https://raise.it/blog/how-to-install-and-use-metamask-with-raise"
          target="_black"
          rel="nofollow"
        >
          <em>How to install and connect Metamask</em>
        </HelpLink>
      </HelpMessage>
      <GoBack>
        <GoBackButton onClickAction={onBack} />
      </GoBack>
    </Web3CheckWalletWrapper>
  );
};

export default WalletSetUp;
