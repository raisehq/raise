import React, { useContext } from 'react';
import { AppContext } from '../App';
import Web3Address from './Web3Address';
import useWeb3 from '../../hooks/useWeb3';
import { Href } from '../LayoutV2/Layout.styles';
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

const ProviderErrorNotice = () => (
  <CardDescription>
    <p>Install a digital wallet like Metamask to continue.</p>
    <ButtonGreen
      target="_blank"
      href="https://metamask.io/"
      content="Install Metamask extension"
    />
    <NeedHelp href="/faq" />
  </CardDescription>
);

const AccountLockedNotice = () => {
  const { enableWeb3 } = useWeb3();
  return (
    <CardDescription>
      <p>Raise needs to connect with your MetaMask wallet</p>
      <ButtonGreen onClick={enableWeb3} content="Approve" />
      <NeedHelp href="/faq" />
    </CardDescription>
  );
};

const NetworkNotMatch = ({ targetNetwork, currentNetwork }) => (
  <CardDescription>
    <h6>Change the network to {targetNetwork}</h6>
    <p>
      Raise currently works on the <b>{targetNetwork}</b> network, please switch
      to this network in MetaMask.
    </p>
    <NeedHelp href="/faq" />
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
    <NeedHelp href="/faq" />
  </CardDescription>
);

const AccountNotMatchNotice = ({ verifiedAddress }) => (
  <CardDescription>
    <h6>Address does not match</h6>
    <p>Change your current address to your binded Raise address below.</p>
    <div>
      <Web3Address account={verifiedAddress} />
    </div>
    <NeedHelp href="/faq" />
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
