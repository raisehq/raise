import React, { useEffect, useState, useContext } from 'react';

import {
  CardTitle,
  CardSubTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  SelectYourWalletContainer,
  SelectYourWalletList,
  SelectWalletOptionButton,
  SelectWalletOptionItem
} from './Web3Check.styles';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';
import CryptoWallets from '../../commons/cryptoWallets';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { getWalletName } from '../../utils';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';

const Wallet = ({ onNext }: any) => {
  const {
    store: {
      config: { network, networkId }
    }
  }: any = useContext(AppContext);
  const [defaultWallet, setDefaultWallet] = useState();
  const { web3, getDefaultWeb3, connectWallet }: any = useWeb3();
  const tagManager = useGoogleTagManager('Wallet');
  useEffect(() => {
    setDefaultWallet(getDefaultWeb3());
  }, [web3]);

  const handlerCoinbase = async () => {
    tagManager.sendEvent(
      TMEvents.Click,
      'wallet_attempt',
      getWalletName(CryptoWallets.Coinbase).toLowerCase()
    );
    await connectWallet(CryptoWallets.Coinbase, network, networkId);

    onNext();
  };

  const handlerMetamask = async () => {
    tagManager.sendEvent(
      TMEvents.Click,
      'wallet_attempt',
      getWalletName(CryptoWallets.Metamask).toLowerCase()
    );
    await connectWallet(CryptoWallets.Metamask, network, networkId);
    onNext();
  };

  const handlerOpera = async () => {
    tagManager.sendEvent(
      TMEvents.Click,
      'wallet_attempt',
      getWalletName(CryptoWallets.Opera).toLowerCase()
    );
    await connectWallet(CryptoWallets.Opera, network, networkId);
    onNext();
  };

  const handlerLink = wallet => {
    // console.log('-button name', wallet);
    // console.log('wallet name: ', defaultWallet.name);
    // console.log('default wallet: ', defaultWallet);
    switch (wallet) {
      case 'metamask':
        // console.log('scpecific name: ', CryptoWallets.Metamask);
        window.location.href = 'http://metamask.app.link/';
        break;
      case 'opera':
        // console.log('scpecific name: ', CryptoWallets.Opera);
        window.location.href = 'http://onelink.to/5xwf6x';
        break;
      default:
        break;
    }
  };

  return (
    <Web3CheckWalletWrapper>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletContainer>
        <SelectYourWalletTitle>
          <CardTitle>Select your wallet </CardTitle>
          <CardSubTitle>Get started by connecting one of the wallets below</CardSubTitle>
        </SelectYourWalletTitle>
        <SelectYourWalletList>
          <SelectWalletOptionItem key="coinbase">
            <SelectWalletOptionButton basic color="black" onClick={handlerCoinbase}>
              Coinbase (BETA)
            </SelectWalletOptionButton>
          </SelectWalletOptionItem>
          {defaultWallet && defaultWallet.name === CryptoWallets.Metamask && (
            <SelectWalletOptionItem key="metamask">
              <SelectWalletOptionButton basic color="black" onClick={handlerMetamask}>
                Metamask
              </SelectWalletOptionButton>
            </SelectWalletOptionItem>
          )}
          {defaultWallet && defaultWallet.name === CryptoWallets.Opera && (
            <SelectWalletOptionItem key="opera">
              <SelectWalletOptionButton basic color="black" onClick={handlerOpera}>
                Opera Wallet
              </SelectWalletOptionButton>
            </SelectWalletOptionItem>
          )}
          {(!defaultWallet ||
            (defaultWallet.name !== CryptoWallets.Opera &&
              defaultWallet.name !== CryptoWallets.Metamask)) && (
            <>
              <SelectWalletOptionItem key="metamask">
                <SelectWalletOptionButton
                  basic
                  color="black"
                  onClick={() => handlerLink('metamask')}
                >
                  Metamask
                </SelectWalletOptionButton>
              </SelectWalletOptionItem>
              <SelectWalletOptionItem key="opera">
                <SelectWalletOptionButton basic color="black" onClick={() => handlerLink('opera')}>
                  Opera Wallet
                </SelectWalletOptionButton>
              </SelectWalletOptionItem>
            </>
          )}
        </SelectYourWalletList>
      </SelectYourWalletContainer>
    </Web3CheckWalletWrapper>
  );
};
export default Wallet;
