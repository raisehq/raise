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
  TextDescription
} from './Web3Check.styles';
import useWeb3 from '../../hooks/useWeb3';
import { isMobile } from 'react-device-detect';

const getMessage = walletId => {
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
          <CardTitle>Following Coinbase Instructions</CardTitle>
          <p>You may need to scan the wallet link QR Code</p>
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
  const { enableWeb3, getCurrentProviderName } = useWeb3();

  useEffect(() => {
    enableWeb3();
  }, []);

  return (
    <>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletContainer>
        <SelectYourWalletTitle>{getMessage(getCurrentProviderName())}</SelectYourWalletTitle>
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
