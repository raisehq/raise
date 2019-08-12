import React, { useContext } from 'react';
import { AppContext } from '../App';
import Web3Address from './Web3Address';
import useWeb3 from '../../hooks/useWeb3';
import { Href } from '../LayoutV2/Layout.styles';
import { browserName, MobileView, BrowserView } from "react-device-detect";
import { ButtonGreen, AddressContainer } from './Web3Check.styles';
import {
  StyledAddress,
  CardDescription,
  HelpMessage,
  SuccessMessage
} from './Web3Check.styles';

const NeedHelp = ({ href }) => (
  <HelpMessage>
    <Href target="_blank" href={href}>
      Need help?
    </Href>
  </HelpMessage>
);
export const isSupportedBrowser = () => ['brave', 'chrome', 'chromium', 'firefox'].some(supportedBrowser => (browserName.toLowerCase().includes(supportedBrowser)));

const BrowserCompatible = () => (
  <CardDescription>
    <p>To access Raise you will need a browser that supports MetaMask:
      <BrowserView>
        <span>
          <a href='https://www.mozilla.org/firefox'> Firefox</a>
          <span>, </span>
          <a href='https://www.google.com/chrome'>Chrome</a>
          <span> and </span>
          <a href='https://brave.com/'>Brave</a>.
        </span>
      </BrowserView>
      <MobileView>
        <span> <a href='https://mobile.metamask.io/Metamask'>Metamask Mobile</a></span>
      </MobileView>
    </p>
    <NeedHelp href="https://www.raise.it/help" />
  </CardDescription>
);

const ProviderErrorNotice = () => (
  <CardDescription>
    <p>Install a digital wallet like Metamask to continue.</p>
    <ButtonGreen
      target="_blank"
      href="https://metamask.io/"
      content="Install Metamask extension"
    />
    <NeedHelp href="https://www.raise.it/help" />
  </CardDescription>
);

const AccountLockedNotice = () => {
  const { enableWeb3 } = useWeb3();
  return (
    <CardDescription>
      <p>Raise needs to connect with your MetaMask wallet</p>
      <ButtonGreen onClick={enableWeb3} content="Approve" />
      <NeedHelp href="https://www.raise.it/help" />
    </CardDescription>
  );
};

const NetworkNotMatch = ({ targetNetwork, currentNetwork }) => (
  <CardDescription>
    <h6>Change the network</h6>
    <p>
      Please switch to one of the following networks in Metamask wallet:
      <b> {targetNetwork.join(', ')}</b>
    </p>
    <NeedHelp href="https://www.raise.it/help" />
  </CardDescription>
);

const AccountNotVerified = ({ currentAddress, uploadSignature }) => (
  <CardDescription>
    <p>
      Check MetaMask and sign a message to bind this address to your Raise
      account. You will be able to operate only with this address.
    </p>
    <div />
    <ButtonGreen onClick={uploadSignature} double>
      Sign message with
      <AddressContainer>
        <StyledAddress account={currentAddress} />
      </AddressContainer>
    </ButtonGreen>
    <NeedHelp href="https://www.raise.it/help" />
  </CardDescription>
);

const AccountNotMatchNotice = ({ verifiedAddress }) => (
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
    <SuccessMessage>🎉🎉🎉</SuccessMessage>
    All set!
  </CardDescription>
);

const CurrentNotice = () => {
  const {
    web3Status: {
      hasProvider,
      unlocked,
      accountMatches,
      networkMatches,
      network,
      targetNetwork,
      account
    },
    actions: {
      blockchain: { uploadSignature }
    },
    store: {
      user: {
        cryptoAddress: { address: verifiedAddress }
      }
    }
  }: any = useContext(AppContext);
  
  if (!isSupportedBrowser()) {
    return <BrowserCompatible />
  }

  if (!hasProvider) {
    return <ProviderErrorNotice />;
  }
  if (!unlocked) {
    return <AccountLockedNotice />;
  }
  if (!networkMatches) {
    return (
      <NetworkNotMatch targetNetwork={targetNetwork} currentNetwork={network} />
    );
  }
  if (!verifiedAddress) {
    return (
      <AccountNotVerified
        currentAddress={account}
        uploadSignature={uploadSignature}
      />
    );
  }
  if (!accountMatches) {
    return <AccountNotMatchNotice verifiedAddress={verifiedAddress} />;
  }
  return <Success />;
};

export default CurrentNotice;
