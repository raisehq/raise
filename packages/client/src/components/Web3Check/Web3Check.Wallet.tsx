import React, { useEffect, useState } from 'react';
import { ButtonLink } from '@raisehq/components';
import { isMobile } from 'react-device-detect';
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
import { useRootContext } from '../../contexts/RootContext';
import GoBackButton from '../GoBackButton';
import CryptoWallets from '../../commons/cryptoWallets';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { getWalletName } from '../../utils';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { IWallet } from '../../commons/IWallet';

const tagLabelMapping = {
  coinbase: 'coinbase_attempt',
  opera: 'opera_attempt',
  metamask: 'metamask_attempt'
};

const Wallet = ({ onNext, onBack }: any) => {
  const {
    store: {
      config: { network, networkId }
    }
  }: any = useRootContext();
  const { web3, getDefaultWeb3, connectWallet }: any = useWeb3();
  const [defaultWallet, setDefaultWallet] = useState<IWallet>(getDefaultWeb3());
  const tagManager = useGoogleTagManager('Wallet');

  useEffect(() => {
    setDefaultWallet(getDefaultWeb3());
  }, [web3]);

  const handlerWallet = walletSelected => async () => {
    const walletName = getWalletName(walletSelected).toLowerCase();
    tagManager.sendEvent(TMEvents.Click, 'wallet_attempt', walletName);
    tagManager.sendEvent(TMEvents.Click, tagLabelMapping[walletName], walletName);

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
    } else if (
      (defaultWallet?.name === -1 && walletName === 'metamask') ||
      (walletName === 'metamask' && defaultWallet?.name !== CryptoWallets.Metamask)
    ) {
      window.open('http://metamask.app.link/', '_blank');
    } else if (
      (defaultWallet?.name === -1 && walletName === 'opera') ||
      (walletName === 'opera' && defaultWallet?.name !== CryptoWallets.Opera)
    ) {
      window.open('http://onelink.to/5xwf6x', '_blank');
    } else {
      try {
        await connectWallet(walletSelected, network, networkId);
        onNext('WalletSelector', true);
      } catch (error) {
        // aconsole.log(error)
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
          <SelectWalletOptionItem key="metamask">
            <ButtonLink
              onClick={handlerWallet(CryptoWallets.Metamask)}
              text="Metamask"
              type="tertiary"
              size="large"
              disabled={false}
              icon="external_link.svg"
              logo="metamask.png"
              fullWidth
            />
          </SelectWalletOptionItem>
          <SelectWalletOptionItem key="opera">
            <ButtonLink
              onClick={handlerWallet(CryptoWallets.Opera)}
              text="Opera Wallet"
              type="tertiary"
              size="large"
              disabled={false}
              icon="external_link.svg"
              logo="opera.png"
              fullWidth
            />
          </SelectWalletOptionItem>
          <SelectWalletOptionItem key="coinbase">
            <ButtonLink
              onClick={handlerWallet(CryptoWallets.Coinbase)}
              text="Coinbase Wallet"
              type="tertiary"
              size="large"
              disabled={false}
              icon="external_link.svg"
              logo="coinbase.png"
              fullWidth
            />
          </SelectWalletOptionItem>
          {!isMobile && (
            <GoBack>
              <GoBackButton onClickAction={onBack} />
            </GoBack>
          )}
        </SelectYourWalletList>
      </SelectYourWalletContainer>
    </Web3CheckWalletWrapper>
  );
};
export default Wallet;
