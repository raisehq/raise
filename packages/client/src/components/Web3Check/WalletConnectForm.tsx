import React from 'react';
import { isMobile } from 'react-device-detect';
import { Button } from '@raisehq/components';
import {
  CardTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  ConnectFormSubtitle,
  ButtonContainer
} from './Web3Check.styles';

import OnboardingProgressBar from '../OnboardingProgressBar';

const WalletConnectForm = ({ onExists, onNotExists }: any) => (
  <Web3CheckWalletWrapper>
    <OnboardingProgressBar step={1} isMobile={isMobile} />
    <SelectYourWalletTitle>
      <CardTitle>Connect Your Wallet</CardTitle>
      <ConnectFormSubtitle>
        To start using Raise, you need to connect a digital wallet
      </ConnectFormSubtitle>
    </SelectYourWalletTitle>
    <ButtonContainer>
      <Button
        onClick={onExists}
        text="Connect my wallet"
        type="secondary"
        size="large"
        disabled={false}
        fullWidth
      />
      <ConnectFormSubtitle>Metamask, Coinbase or Opera Wallet</ConnectFormSubtitle>
    </ButtonContainer>
    <ButtonContainer>
      <Button
        onClick={onNotExists}
        text="I don't have a wallet"
        type="tertiary"
        size="large"
        disabled={false}
        fullWidth
      />
      <ConnectFormSubtitle>No problem, we can help you with that</ConnectFormSubtitle>
    </ButtonContainer>
  </Web3CheckWalletWrapper>
);

export default WalletConnectForm;
