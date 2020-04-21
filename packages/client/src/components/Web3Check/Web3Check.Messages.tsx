import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import Web3Address from '../Web3Address';
import useWeb3 from '../../hooks/useWeb3';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { Href } from '../Layout/Layout.styles';
import { getWalletName } from '../../utils';
import {
  StyledAddress,
  HelpMessage,
  AddressContainer,
  CardDescription,
  DescriptionText,
  ActionDescription,
  ButtonGreenSmall
} from './Web3Check.styles';

const tagLabelMapping = {
  coinbase: 'new_wallet_coinbase',
  opera: 'new_wallet_opera',
  metamask: 'new_wallet_metamask'
};

const NeedHelp = ({ href }: any) => (
  <HelpMessage>
    <Href target="_blank" href={href}>
      Need help?
    </Href>
  </HelpMessage>
);

// @ts-ignore
const NetworkNotMatch = (
  { targetNetwork }: any // prettier-ignore
) => (
  <ActionDescription>
    <h3>Change the network</h3>
    <DescriptionText>
      Please switch to one of the following networks in your wallet:
      <b>{targetNetwork.join(', ')}</b>
    </DescriptionText>
    <NeedHelp href="https://www.raise.it/help" />
  </ActionDescription>
);
// @ts-ignore
const AccountNotVerified = ({ currentAddress, uploadSignature }: any) => (
  <ActionDescription>
    <DescriptionText>
      Check your Wallet and sign a message to bind this address to your Raise account. You will be
      able to operate only with this address.
    </DescriptionText>
    <AddressContainer>
      <StyledAddress account={currentAddress} />
    </AddressContainer>
    <ButtonGreenSmall onClick={uploadSignature}>Click to confirm</ButtonGreenSmall>
    <NeedHelp href="https://www.raise.it/help" />
  </ActionDescription>
);
// @ts-ignore
const AccountNotMatchNotice = ({ verifiedAddress, walletId }: any) => (
  <ActionDescription>
    <h3>Address does not match</h3>
    <DescriptionText>
      {`Make sure you are using ${getWalletName(walletId)} with your registered address:`}
    </DescriptionText>
    <Web3Address account={verifiedAddress} />
    <NeedHelp href="https://www.raise.it/help" />
  </ActionDescription>
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
  const {
    web3Status: { networkMatches, accountMatches, walletNetwork, targetNetwork, walletAccount }
  }: any = useAppContext();
  const {
    actions: {
      blockchain: { uploadSignature }
    },
    store: {
      user: {
        cryptoAddress: { address: verifiedAddress, cryptotypeId }
      }
    }
  }: any = useRootContext();
  const tagManager = useGoogleTagManager('Wallet');
  const { getCurrentProviderName, requestSignature } = useWeb3();

  const handleUploadSignature = async () => {
    try {
      const { address, signature } = await requestSignature();
      await uploadSignature(address, getCurrentProviderName(), signature);
      const walletName = getWalletName(getCurrentProviderName()).toLowerCase();
      tagManager.sendEvent(TMEvents.Submit, 'new_wallet', walletName);
      tagManager.sendEvent(TMEvents.Submit, tagLabelMapping[walletName], walletName);
    } catch (error) {
      console.error('[Web3Check.Message][HandleUploadSignature] Error : ', error);
    }
  };

  if (!verifiedAddress) {
    return (
      <AccountNotVerified currentAddress={walletAccount} uploadSignature={handleUploadSignature} />
    );
  }
  if (!networkMatches) {
    return <NetworkNotMatch targetNetwork={targetNetwork} currentNetwork={walletNetwork} />;
  }
  if (!accountMatches) {
    return <AccountNotMatchNotice verifiedAddress={verifiedAddress} walletId={cryptotypeId} />;
  }
  return <Success />;
};

export default CurrentNotice;
