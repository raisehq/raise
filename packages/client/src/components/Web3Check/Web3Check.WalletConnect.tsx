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
  WalletLink,
  Web3CheckWalletWrapper,
  InstructionsContainer
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

  const getCoinbaseLink = () => {
    if (isMobile) {
      return 'https://onelink.to/dvu97k';
    }

    return 'https://wallet.coinbase.com/#signup';
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
          <TextDescription>You may need to scan the wallet link QR Code</TextDescription>
        </CardCenteredText>
      );
    case CryptoWallets.Coinbase:
      return (
        <CardCenteredText>
          <CardTitle>Following Coinbase Wallet Instructions</CardTitle>
          {hasWallet ? (
            <CoinbaseInstrucctions>
              Make sure you have
              <WalletLink href={getCoinbaseLink()} target="_blank">
                {' '}
                Coinbase Wallet{' '}
              </WalletLink>
              app in your mobile and have registered. You will be required to scan a QR code with
              the app
            </CoinbaseInstrucctions>
          ) : (
            <InstructionsContainer>
              <CoinbaseInstrucctions>
                1.
                <WalletLink href="https://onelink.to/dvu97k" target="_blank">
                  {' '}
                  Download Coinbase Wallet{' '}
                </WalletLink>
                app in your phone and create a wallet. This process takes between 1 or 2 minutes
              </CoinbaseInstrucctions>
              <CoinbaseInstrucctions>
                2. Once you have your wallet, access ⚙️and click WalletLink.
              </CoinbaseInstrucctions>
              <CoinbaseInstrucctions>
                3. Click continue to scan the QR code that connects your new wallet to Raise.
              </CoinbaseInstrucctions>
            </InstructionsContainer>
          )}
          <ConnectWalletButton onClick={connectCoinbase}>Continue</ConnectWalletButton>
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
    <Web3CheckWalletWrapper>
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
    </Web3CheckWalletWrapper>
  );
};

export default WalletConnect;
