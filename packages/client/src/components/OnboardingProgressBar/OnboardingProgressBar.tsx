import React from 'react';
import {
  ProgressBarWrapper,
  ProgressBarStep,
  ProgressBarIcon,
  ProgressBarText,
  MobileProgressSteps,
  MobileProgressBarWrapper
} from './styles';
import { Icon } from 'semantic-ui-react';

export const OnboardingProgressBar = ({ step, isMobile }) => {
  const steps = [
    { 0: 'Get Started' },
    { 1: 'Connect Wallet' },
    { 2: 'Membership' },
    { 3: 'Verify Account' }
  ];
  return (
    <>
      {isMobile ? (
        steps.map((item, index) => {
          return index === step ? (
            <MobileProgressBarWrapper>
              <MobileProgressSteps>{`Step ${step + 1} of ${steps.length}`}</MobileProgressSteps>
              <ProgressBarStep completed current>
                <ProgressBarText>{item[index]}</ProgressBarText>
              </ProgressBarStep>
            </MobileProgressBarWrapper>
          ) : null;
        })
      ) : (
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
      )}
    </>
  );
};
