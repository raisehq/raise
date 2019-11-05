import React, { useContext } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import AppContext from '../AppContext';
import Web3Address from '../Web3Address';
import useWeb3 from '../../hooks/useWeb3';
import { Href } from '../Layout/Layout.styles';
import {
  StyledAddress,
  CardDescription,
  HelpMessage,
  ButtonGreen,
  AddressContainer
} from './Web3Check.styles';
import { isSupportedBrowser } from '../../utils';

const NeedHelp = ({ href }: any) => (
  <HelpMessage>
    <Href target="_blank" href={href}>
      Need help?
    </Href>
  </HelpMessage>
);

const BrowserCompatible = () => (
  <CardDescription>
    <BrowserView>
      <p>
        To access Raise you will need a browser that supports CryptoWallets:
        <span>
          <a href="https://www.mozilla.org/firefox"> Firefox</a>
          <span>, </span>
          <a href="https://www.google.com/chrome">Chrome</a>
          <span> and </span>
          <a href="https://brave.com/">Brave</a>.
        </span>
      </p>
    </BrowserView>
    <MobileView>
      <p>
        To access Raise on mobile please download{' '}
        <a href="https://mobile.metamask.io/Metamask">Metamask Mobile</a>.
      </p>
    </MobileView>
    <NeedHelp href="https://www.raise.it/help" />
  </CardDescription>
);

// @ts-ignore
const AccountLockedNotice = () => {
  const { getCurrentProviderName } = useWeb3();
  const providerName = getCurrentProviderName();
  if (providerName === 'opera-wallet') {
    return (
      <CardDescription>
        <p>Raise needs to connect with your wallet</p>
        <p>Please, pair the wallet mobile with Opera</p>
        <NeedHelp href="https://www.raise.it/help" />
        <ButtonGreen onClick={() => {}} content="Back to wallet selector" />
      </CardDescription>
    );
  }
  return (
    <CardDescription>
      <p>Raise needs to connect with your wallet</p>
      <ButtonGreen onClick={() => {}} content="Back to wallet selector" />
      <NeedHelp href="https://www.raise.it/help" />
    </CardDescription>
  );
};

// @ts-ignore
const NetworkNotMatch = ({ targetNetwork, currentNetwork }: any) => (
  <CardDescription>
    <h6>Change the network</h6>
    <p>
      Please switch to one of the following networks in your wallet:
      <b></b>
    </p>
    <NeedHelp href="https://www.raise.it/help" />
  </CardDescription>
);
// @ts-ignore
const AccountNotVerified = ({ currentAddress, uploadSignature }: any) => (
  <CardDescription>
    <p>
      Check you Wallet and sign a message to bind this address to your Raise account. You will be
      able to operate only with this address.
    </p>
    <div />
    <ButtonGreen onClick={uploadSignature}>
      Sign message with
      <AddressContainer>
        <StyledAddress account={currentAddress} />
      </AddressContainer>
    </ButtonGreen>
    <NeedHelp href="https://www.raise.it/help" />
  </CardDescription>
);
// @ts-ignore
const AccountNotMatchNotice = ({ verifiedAddress }: any) => (
  <CardDescription>
    <h6>Address does not match</h6>
    <p>Change your current address to your binded Raise address below.</p>
    <div>
      <Web3Address account={verifiedAddress} />
    </div>
    <NeedHelp href="https://www.raise.it/help" />
  </CardDescription>
);

const Success = () => (
  <CardDescription textAlign="center" style={{ fontSize: '24px' }}>
    <span role="img" aria-label="party" className="emojis">
      🎉🎉🎉
    </span>
    All set!
  </CardDescription>
);

const CurrentNotice = () => {
  // @ts-ignore
  const {
    actions: {
      // @ts-ignore
      blockchain: { uploadSignature }
    },
    store: {
      user: {
        // @ts-ignore
        cryptoAddress: { address: verifiedAddress }
      }
    },
    web3Status: {
      unlocked,
      networkMatches,
      accountMatches,
      walletNetwork,
      targetNetwork,
      walletAccount
    }
  }: any = useContext(AppContext);

  if (!isSupportedBrowser()) {
    return <BrowserCompatible />;
  }
  if (!unlocked) {
    return <AccountLockedNotice />;
  }
  if (!verifiedAddress) {
    return <AccountNotVerified currentAddress={walletAccount} uploadSignature={uploadSignature} />;
  }
  if (!networkMatches) {
    return <NetworkNotMatch targetNetwork={targetNetwork} currentNetwork={walletNetwork} />;
  }
  if (!accountMatches) {
    return <AccountNotMatchNotice verifiedAddress={verifiedAddress} />;
  }
  return <Success />;
};

export default CurrentNotice;
