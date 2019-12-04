import React from 'react';
import { ProgressBarWrapper, ProgressBarStep, ProgressBarIcon, ProgressBarText } from './styles';
import { Icon } from 'semantic-ui-react';

export const OnboardingProgressBar = ({ step, isMobile = false }) => {
  const steps = [
    { 0: 'Get Started' },
    { 1: 'Connect Wallet' },
    { 2: 'Membership' },
    { 3: 'Verify Account' }
  ];
  return (
    <ProgressBarWrapper>
      {isMobile
        ? steps.map((item, index) => {
            return index === step ? (
              <>
                <div>
                  {`Step ${step + 1} of ${steps.length}`}
                </div>
                <ProgressBarStep completed current>
                  <ProgressBarText>{item[index]}</ProgressBarText>
                </ProgressBarStep>
              </>
            ) : null;
          })
        : steps.map((item, index) => (
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
