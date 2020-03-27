import React from 'react';
import {
  CardTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  GreenActionButton,
  GreenActionText,
  WhiteActionButton,
  WhiteActionText,
  GreenActionTitleText,
  WhiteActionTitleText,
  ConnectFormSubtitle
} from './Web3Check.styles';

import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';

const WalletConnectForm = ({ onExists, onNotExists }: any) => {
  return (
    <Web3CheckWalletWrapper>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletTitle>
        <CardTitle>Connect Your Wallet</CardTitle>
        <ConnectFormSubtitle>
          To start using Raise, you need to connect a digital wallet
        </ConnectFormSubtitle>
      </SelectYourWalletTitle>
      <GreenActionButton onClick={onExists}>
        <GreenActionTitleText>Connect to my existing wallet</GreenActionTitleText>
        <GreenActionText>Metamask, Coinbase or Opera Wallet</GreenActionText>
      </GreenActionButton>
      <WhiteActionButton onClick={onNotExists}>
        <WhiteActionTitleText>I don't have a wallet</WhiteActionTitleText>
        <WhiteActionText>No problem, we can help you with that</WhiteActionText>
      </WhiteActionButton>
    </Web3CheckWalletWrapper>
  );
};

export default WalletConnectForm;
