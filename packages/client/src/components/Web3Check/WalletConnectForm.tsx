import React from 'react';
import { isMobile } from 'react-device-detect';
import { Button } from '@raisehq/components';
import {
  CardTitle,
  SelectYourWalletTitle,
  Web3CheckWalletWrapper,
  ConnectFormSubtitle,
  ButtonContainer,
  ButtonBox
} from './Web3Check.styles';

import OnboardingProgressBar from '../OnboardingProgressBar';

const WalletConnectForm = ({ onExists, onNotExists }: any) => (
  <Web3CheckWalletWrapper>
    <OnboardingProgressBar step={1} isMobile={isMobile} />
    <SelectYourWalletTitle>
      <CardTitle>Connect your Ethereum wallet</CardTitle>
      <ConnectFormSubtitle>
        In order to invest with Raise you need to connect a wallet to your Raise account. If you
        don&apos;t have one, click on &quot;Create a new wallet&quot;
      </ConnectFormSubtitle>
    </SelectYourWalletTitle>
    <ButtonBox>
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
          text="Create a new wallet"
          type="tertiary"
          size="large"
          disabled={false}
          fullWidth
        />

        <ConnectFormSubtitle>No problem, we can help you with that</ConnectFormSubtitle>
      </ButtonContainer>
    </ButtonBox>
  </Web3CheckWalletWrapper>
);

export default WalletConnectForm;
