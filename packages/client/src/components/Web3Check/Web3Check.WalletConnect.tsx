import React, { useEffect } from 'react';
import GoBackButton from '../GoBackButton';
import { Loader } from 'semantic-ui-react';
import CryptoWallets from '../../commons/cryptoWallets';
import OnboardingProgressBar from '../OnboardingProgressBar';
import {
  CardCenteredText,
  CardTitle,
  LoaderContainer,
  SelectYourWalletTitle,
  SelectYourWalletContainer,
  BackContainer,
  TextDescription,
  ConnectWalletButton
} from './Web3Check.styles';
import useWeb3 from '../../hooks/useWeb3';
import { isMobile } from 'react-device-detect';
import { useRootContext } from '../../contexts/RootContext';

const getMessage = (walletId, network, networkId, connectWallet) => {
  const connectCoinbase = async () => {
    try {
      console.log('-------------------');
      await connectWallet(walletId, network, networkId);
    } catch (error) {
      // console.log('');
    }
  };

  switch (walletId) {
    case CryptoWallets.Metamask:
      return (
        <CardCenteredText>
          <CardTitle>Following Metamask Instructions</CardTitle>
          <TextDescription>Raise needs to connect with your MetaMask wallet</TextDescription>
        </CardCenteredText>
      );
    case CryptoWallets.Opera:
      return (
        <CardCenteredText>
          <CardTitle>Following Opera Instructions</CardTitle>
          <p>You may need to scan the wallet link QR Code</p>
        </CardCenteredText>
      );
    case CryptoWallets.Coinbase:
      return (
        <CardCenteredText>
          <CardTitle>Following Coinbase Wallet Instructions</CardTitle>
          <p>You may need to scan the wallet link QR Code</p>
          <ConnectWalletButton onClick={connectCoinbase}>test button</ConnectWalletButton>
        </CardCenteredText>
      );
    case CryptoWallets.WebWallet:
      return (
        <CardCenteredText>
          <CardTitle>Following the Web Wallet Instructions</CardTitle>
          <TextDescription>Raise needs to connect with your web wallet</TextDescription>
        </CardCenteredText>
      );
    default:
      return null;
  }
};

const WalletConnect = ({ onBack }: any) => {
  const { enableWeb3, getCurrentProviderName, connectWallet } = useWeb3();
  const {
    store: {
      config: { network, networkId }
    }
  }: any = useRootContext();

  useEffect(() => {
    enableWeb3();
  }, []);

  return (
    <>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletContainer>
        <SelectYourWalletTitle>
          {getMessage(getCurrentProviderName(), network, networkId, connectWallet)}
        </SelectYourWalletTitle>
        <LoaderContainer>
          <Loader active inline="centered" />
        </LoaderContainer>
        <BackContainer>
          <GoBackButton onClickAction={onBack} />
        </BackContainer>
      </SelectYourWalletContainer>
    </>
  );
};

export default WalletConnect;
