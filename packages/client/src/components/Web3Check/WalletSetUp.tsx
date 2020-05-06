import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { ButtonLink } from '@raisehq/components';
import {
  CardTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  GoBack,
  SetUpSubtitle,
  OtherWalletsText,
  ButtonContainer
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
  const tagManager = useGoogleTagManager('Wallet');
  const { web3, getDefaultWeb3, connectWallet }: any = useWeb3();
  const [defaultWallet, setDefaultWallet] = useState<IWallet>(getDefaultWeb3());

  useEffect(() => {
    setDefaultWallet(getDefaultWeb3());
  }, [web3]);

  const handlerWallet = walletSelected => async () => {
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
        <CardTitle>Let&apos;s create your wallet</CardTitle>
        <SetUpSubtitle>
          We recommend you to install Metamask wallet, it&apos;s fast, easy and secure. Just click
          on &quot;Install Metamask&quot; to download the web extension and follow the steps.
        </SetUpSubtitle>
        <SetUpSubtitle>
          Once you are all set up to connect your new wallet, refresh your browser.
        </SetUpSubtitle>
      </SelectYourWalletTitle>

      <ButtonContainer>
        <ButtonLink
          onClick={handlerWallet(CryptoWallets.Metamask)}
          size="large"
          text="Install Metamask"
          fullWidth
          icon="external_link.svg"
          type="secondary"
          logo="metamask.png"
        />
        <OtherWalletsText>You can also use:</OtherWalletsText>
        <ButtonLink
          onClick={handlerWallet(CryptoWallets.Coinbase)}
          size="large"
          text="Coinbase Wallet"
          fullWidth
          icon="external_link.svg"
          type="tertiary"
          logo="coinbase.png"
        />
      </ButtonContainer>

      <GoBack>
        <GoBackButton onClickAction={onBack} />
      </GoBack>
    </Web3CheckWalletWrapper>
  );
};

export default WalletSetUp;
