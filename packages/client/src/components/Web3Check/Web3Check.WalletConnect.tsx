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
  ConnectWalletButton,
  CoinbaseInstrucctions,
  ButtonText
} from './Web3Check.styles';
import useWeb3 from '../../hooks/useWeb3';
import { isMobile } from 'react-device-detect';

const getMessage = (walletId, enableWeb3, hasWallet) => {
  const connectCoinbase = async () => {
    try {
      enableWeb3();
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
          {hasWallet ? (
            <CoinbaseInstrucctions>
              {`Make sure you have Coinbase Wallet app in your mobile and have registered. You will be
              required to scan a QR code with the app`}
            </CoinbaseInstrucctions>
          ) : (
            <>
              <CoinbaseInstrucctions>
                {`Download Coinbase Wallet app in your phone and create a wallet. This process takes between 1 or 2 minutes`}
              </CoinbaseInstrucctions>
              <CoinbaseInstrucctions>
                {'Once you have your wallet, access ⚙️and click WalletLink.'}
              </CoinbaseInstrucctions>
              <CoinbaseInstrucctions>
                Click continue to scan the QR code that connects your new wallet to Raise.
              </CoinbaseInstrucctions>
            </>
          )}
          <ConnectWalletButton onClick={connectCoinbase}>
            <ButtonText>Continue</ButtonText>
          </ConnectWalletButton>
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

const WalletConnect = ({ onBack, hasWallet }: any) => {
  const { enableWeb3, getCurrentProviderName } = useWeb3();
  const currentProviderName = getCurrentProviderName();
  useEffect(() => {
    if (currentProviderName !== CryptoWallets.Coinbase) {
      enableWeb3();
    }
  }, []);

  return (
    <>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletContainer>
        <SelectYourWalletTitle>
          {getMessage(currentProviderName, enableWeb3, hasWallet)}
        </SelectYourWalletTitle>
        {CryptoWallets.Coinbase !== currentProviderName && (
          <LoaderContainer>
            <Loader active inline="centered" />
          </LoaderContainer>
        )}
        <BackContainer>
          <GoBackButton onClickAction={onBack} />
        </BackContainer>
      </SelectYourWalletContainer>
    </>
  );
};

export default WalletConnect;
