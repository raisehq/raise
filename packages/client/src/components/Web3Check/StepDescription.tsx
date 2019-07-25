import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Card } from 'semantic-ui-react';
import Web3Address from './Web3Address';
import { ButtonGreen } from '../Referral/Referral.styles';
import useWeb3 from '../../hooks/useWeb3';

const ProviderErrorNotice = () => (
  <Card.Description>
    <p>Install a Web3 provider like Metamask. You must have Metamask to use Raise.</p>
    <ButtonGreen  target="_blank" href='https://metamask.io/' content='Install Metamask extension' />
  </Card.Description>
);

const AccountLockedNotice = () => {
  const { enableWeb3 } = useWeb3();
  return (
    <Card.Description>
      <p>Provides us your consent in your Metamask wallet to access the platform.</p>
      <ButtonGreen onClick={enableWeb3} content='Approve' />
    </Card.Description>
  );
};

const NetworkNotMatch = ({targetNetwork, currentNetwork}) => (
  <Card.Description>
    <h6>Change the network to {targetNetwork}</h6>
    <p>Raise platform currently works on the <b>{targetNetwork}</b> network, you are currently at {currentNetwork}.</p>
  </Card.Description>
);

const AccountNotVerified = ({uploadSignature}) => (
  <Card.Description>
    <p>Sign the next message with your Web3 provider to link your address with the platform.</p>
    <ButtonGreen onClick={uploadSignature} content='Sign message' />
  </Card.Description>
)

const AccountNotMatchNotice = ({verifiedAddress}) => (
  <Card.Description>
    <h6>Address does not match</h6>
    <p>Change your current address to your Raise address below.</p>
    <div>
      <Web3Address account={verifiedAddress} />
    </div>
  </Card.Description>
);

const Success = () => (
  <Card.Description textAlign='center' style={{ fontSize: '5em'}}>
    🎉🎉🎉
  </Card.Description>
);


const CurrentNotice = () => {
  const {
    web3Status: {
      hasProvider,
      unlocked,
      accountMatches,
      networkMatches,
      network,
      targetNetwork
    },
    actions: {
      blockchain: { uploadSignature }
    },
    store: { user: { cryptoAddress: { address: verifiedAddress } } }
  }: any = useContext(AppContext);

  if (!hasProvider) {
    return <ProviderErrorNotice />;
  }
  if (!unlocked) {
    return <AccountLockedNotice />
  }
  if (!networkMatches) {
    return <NetworkNotMatch targetNetwork={targetNetwork} currentNetwork={network} />
  }
  if (!verifiedAddress) {
    return <AccountNotVerified uploadSignature={uploadSignature} />
  }
  if (!accountMatches) {
    return <AccountNotMatchNotice verifiedAddress={verifiedAddress} />
  }
  return <Success />;
}

export default CurrentNotice;