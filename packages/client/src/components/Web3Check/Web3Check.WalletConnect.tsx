import React, { useEffect } from 'react';
import { Image, Loader, Button } from 'semantic-ui-react';
import CryptoWallets from '../../commons/cryptoWallets';
import { IMAGES_PATH } from '../../commons/constants';
import OnboardingProgressBar from '../OnboardingProgressBar';
import {
  CardCenteredText,
  CardTitle,
  CardPadded,
  ImageContainer,
  SelectYourWalletTitle,
  SelectYourWalletContainer,
  SelectYourWalletList,
  SelectWalletOptionListItem,
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
        <SelectYourWalletList>
          <SelectWalletOptionListItem>
            <CardPadded>
              <ImageContainer>
                <Loader active />

                <Image src={`${IMAGES_PATH}wallet_connection.png`} />
              </ImageContainer>
            </CardPadded>
          </SelectWalletOptionListItem>
          <SelectWalletOptionListItem>
            <Button basic color="black" onClick={onBack}>
              Go back
            </Button>
          </SelectWalletOptionListItem>
        </SelectYourWalletList>
      </SelectYourWalletContainer>
    </>
  );
};

export default WalletConnect;
