import React from 'react';
import { ProgressBarWrapper, ProgressBarStep, ProgressBarIcon, ProgressBarText } from './styles';
import { Icon } from 'semantic-ui-react';

export const OnboardingProgressBar = ({hasDeposit}) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarStep completed>
        <ProgressBarText>Get Started</ProgressBarText>
        <ProgressBarIcon>
          <Icon name="angle right"></Icon>
        </ProgressBarIcon>
      </ProgressBarStep>
      <ProgressBarStep current>
        <ProgressBarText>Connect Wallet</ProgressBarText>
        <ProgressBarIcon>
          <Icon name="angle right"></Icon>
        </ProgressBarIcon>
      </ProgressBarStep>
      <ProgressBarStep>
        <ProgressBarText>Membership</ProgressBarText>
        <ProgressBarIcon>
          <Icon name="angle right"></Icon>
        </ProgressBarIcon>
      </ProgressBarStep>
      <ProgressBarStep>
        <ProgressBarText>Verify Account</ProgressBarText>
        <ProgressBarIcon>
          <Icon name="angle right"></Icon>
        </ProgressBarIcon>
      </ProgressBarStep>
    </ProgressBarWrapper>
  );
};
