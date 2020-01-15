import React from 'react';
import {
  CardTitle,
  CardSubTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  SelectYourWalletContainer
} from './Web3Check.styles';

import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';
import { WalletButton } from '../WalletButton';
import GoBackButton from '../GoBackButton';

const WalletSetUp = ({ onBack }: any) => {
  return (
    <Web3CheckWalletWrapper>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletContainer>
        <SelectYourWalletTitle>
          <CardTitle>Set up your wallet</CardTitle>
          <CardSubTitle>
            If you don't have a wallet there is no problem, click on the button bellow and create an
            account in Coinbase. It's fast, easy and secure.
          </CardSubTitle>
        </SelectYourWalletTitle>
        {/* <WalletIcon />
        <GreenWalletButton>
          <GreenWalletButtonText></GreenWalletButtonText>
        </GreenWalletButton>
        <OtherWalletsText></OtherWalletsText> */}
        <WalletButton />
        <GoBackButton />
      </SelectYourWalletContainer>
    </Web3CheckWalletWrapper>
  );
};

export default WalletSetUp;
