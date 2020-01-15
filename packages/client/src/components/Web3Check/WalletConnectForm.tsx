import React from 'react';
import {
  CardTitle,
  CardSubTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  GreenActionButton,
  GreenActionText,
  WhiteActionButton,
  WhiteActionText,
  GreenActionTitleText,
  WhiteActionTitleText,
  TextWrapper
} from './Web3Check.styles';

import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';

const WalletConnectForm = ({ onExists, onNotexists }: any) => {
  return (
    <Web3CheckWalletWrapper>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletTitle>
        <CardTitle>Connect Your Wallet</CardTitle>
        <CardSubTitle>To start using Raise, you need to connect a digital wallet</CardSubTitle>
      </SelectYourWalletTitle>
      <GreenActionButton>
        <TextWrapper>
          <GreenActionTitleText>Connect to my existing wallet</GreenActionTitleText>
          <GreenActionText>Metamask, Coinbase or Opera Wallet</GreenActionText>
        </TextWrapper>
      </GreenActionButton>
      <WhiteActionButton>
        <TextWrapper>
          <WhiteActionTitleText>Don't have a wallet</WhiteActionTitleText>
          <WhiteActionText>No problem, we can help you with that</WhiteActionText>
        </TextWrapper>
      </WhiteActionButton>
    </Web3CheckWalletWrapper>
  );
};

export default WalletConnectForm;
