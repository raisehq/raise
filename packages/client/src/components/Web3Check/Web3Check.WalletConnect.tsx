import React, { useEffect } from 'react';
import { Image, Loader } from 'semantic-ui-react';
import CryptoWallets from '../../commons/cryptoWallets';
import { IMAGES_PATH } from '../../commons/constants';
import BackButton from './Web3Check.BackButton';
import {
  CardContent,
  CardCenteredText,
  CardTitle,
  CardPadded,
  ImageContainer
} from './Web3Check.styles';
import useWeb3 from '../../hooks/useWeb3';

const getMessage = walletId => {
  switch (walletId) {
    case CryptoWallets.Metamask:
      return (
        <CardCenteredText>
          <CardTitle>Following Metamask Instructions</CardTitle>
          <p>Raise needs to connect with your MetaMask wallet</p>
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
      <BackButton onBack={onBack} />
      <CardContent box="separated">
        {getMessage(getCurrentProviderName())}
        <CardPadded>
          <ImageContainer>
            <Loader active />

            <Image src={`${IMAGES_PATH}wallet_connection.png`} />
          </ImageContainer>
        </CardPadded>
      </CardContent>
    </>
  );
};

export default WalletConnect;
