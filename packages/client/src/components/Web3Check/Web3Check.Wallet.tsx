import React, { useContext, useEffect, useState } from 'react';

import {
  CardTitle,
  CardSubTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  SelectYourWalletContainer,
  SelectYourWalletList,
  SelectWalletOptionItem,
  GoBack
} from './Web3Check.styles';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';
import { WalletButton } from '../WalletButton';
import GoBackButton from '../GoBackButton';
import CryptoWallets from '../../commons/cryptoWallets';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { getWalletName } from '../../utils';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';

const Wallet = ({ onNext, onBack }: any) => {
  const {
    store: {
      config: { network, networkId }
    }
  }: any = useContext(AppContext);
  const { web3, getDefaultWeb3, connectWallet }: any = useWeb3();
  const [defaultWallet, setDefaultWallet] = useState();
  const tagManager = useGoogleTagManager('Wallet');

  useEffect(() => {
    setDefaultWallet(getDefaultWeb3());
  }, [web3]);

  const handlerWallet = walletSelected => async () => {
    const walletName = getWalletName(walletSelected).toLowerCase();
    tagManager.sendEvent(TMEvents.Click, 'wallet_attempt', walletName);

    if (isMobile) {
      switch (walletName) {
        case 'metamask':
          window.open('http://metamask.app.link/', '_blank');
          break;
        case 'opera':
          window.open('http://onelink.to/5xwf6x', '_blank');
          break;
        case 'coinbase':
          window.open('http://onelink.to/mn3hhr', '_blank');
          break;
        default:
          break;
      }
    } else {
      if ((defaultWallet.name === -1 && walletName === 'metamask') || (walletName === 'metamask' && defaultWallet.name !== CryptoWallets.Metamask)) {
        window.open('http://metamask.app.link/', '_blank');
      } else if ((defaultWallet.name === -1 && walletName === 'opera') || (walletName === 'opera' && defaultWallet.name !== CryptoWallets.Opera)) {
        window.open('http://onelink.to/5xwf6x', '_blank');
      } else {
        try {
          await connectWallet(walletSelected, network, networkId);
          onNext('WalletSelector');
        } catch (error) {
          // console.log(error)
        }
      }
    }
  };

  return (
    <Web3CheckWalletWrapper>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletContainer>
        <SelectYourWalletTitle>
          <CardTitle>Select your wallet</CardTitle>
          <CardSubTitle>Get started by connecting one of the wallets below</CardSubTitle>
        </SelectYourWalletTitle>
        <SelectYourWalletList>
          <SelectWalletOptionItem key="coinbase">
            <WalletButton
              onClickAction={handlerWallet(CryptoWallets.Coinbase)}
              walletName="Coinbase"
              walletIcon={`${process.env.REACT_APP_HOST_IMAGES}/images/coinbase.png`}
            />
          </SelectWalletOptionItem>
          <SelectWalletOptionItem key="metamask">
            <WalletButton
              onClickAction={handlerWallet(CryptoWallets.Metamask)}
              walletName="Metamask"
              walletIcon={`${process.env.REACT_APP_HOST_IMAGES}/images/metamask.png`}
            />
          </SelectWalletOptionItem>
          <SelectWalletOptionItem key="opera">
            <WalletButton
              onClickAction={handlerWallet(CryptoWallets.Opera)}
              walletName="Opera Wallet"
              walletIcon={`${process.env.REACT_APP_HOST_IMAGES}/images/opera.png`}
            />
          </SelectWalletOptionItem>
          {!isMobile && (
            <GoBack>
              <GoBackButton
                onClickAction={onBack}
              />
            </GoBack>
          )}
        </SelectYourWalletList>
      </SelectYourWalletContainer>
    </Web3CheckWalletWrapper>
  );
};
export default Wallet;

