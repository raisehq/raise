import React from 'react';
import { ProgressBarWrapper, ProgressBarStep, ProgressBarIcon, ProgressBarText } from './styles';
import { Icon } from 'semantic-ui-react';

export const OnboardingProgressBar = ({ step }) => {
  const steps = [
    { 0: 'Get Started' },
    { 1: 'Connect Wallet' },
    { 2: 'Membership' },
    { 3: 'Verify Account' }
  ];
  return (
    <ProgressBarWrapper>
      {steps.map((item, index) => (
        <ProgressBarStep completed={index < step} current={step === index}>
          <ProgressBarText>{item[index]}</ProgressBarText>
          {index + 1 < steps.length && (
            <ProgressBarIcon>
              <Icon name="angle right"></Icon>
            </ProgressBarIcon>
          )}
        </ProgressBarStep>
      ))}
    </ProgressBarWrapper>
  );
};
