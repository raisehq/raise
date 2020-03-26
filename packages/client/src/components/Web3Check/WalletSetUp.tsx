import React, { useEffect, useState } from 'react';
import {
  CardTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  GoBack,
  WalletIcon,
  SetUpSubtitle,
  OtherWalletsText,
  SetUpSubSubSubtitle
} from './Web3Check.styles';

import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';
import { WalletButton } from '../WalletButton';
import GoBackButton from '../GoBackButton';
import { getWalletName } from '../../utils';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import useWeb3 from '../../hooks/useWeb3';
import { useRootContext } from '../../contexts/RootContext';
import CryptoWallets from '../../commons/cryptoWallets';
import { IWallet } from '../../commons/IWallet';

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
        onNext('WalletSetUp');
      } catch (error) {
        // console.log(error)
      }
    }
  };

  return (
    <Web3CheckWalletWrapper>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletTitle>
        <CardTitle>Let's create your wallet</CardTitle>
        <SetUpSubtitle>
          We recommend you to install Metamask wallet, it's fast, easy and secure. Just click on
          "Install Metamask" to download the web extension and follow the steps.
        </SetUpSubtitle>
        <SetUpSubSubSubtitle>
          Once you are all set up to connect your new wallet, refresh your browser.
        </SetUpSubSubSubtitle>
      </SelectYourWalletTitle>
      <WalletIcon src={`${process.env.REACT_APP_HOST_IMAGES}/images/metamask.png`} />
      <WalletButton
        onClickAction={handlerWallet(CryptoWallets.Metamask)}
        walletName="Install Metamask"
        green
      />
      <OtherWalletsText>You can also use:</OtherWalletsText>
      <WalletButton
        onClickAction={handlerWallet(CryptoWallets.Coinbase)}
        walletIcon={`${process.env.REACT_APP_HOST_IMAGES}/images/coinbase.png`}
        walletName="Coinbase"
      />
      <GoBack>
        <GoBackButton onClickAction={onBack} />
      </GoBack>
    </Web3CheckWalletWrapper>
  );
};

export default WalletSetUp;
