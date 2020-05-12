/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Icon } from 'semantic-ui-react';

import {
  ProgressBarWrapper,
  ProgressBarStep,
  ProgressBarIcon,
  ProgressBarText,
  MobileProgressSteps,
  MobileProgressBarWrapper
} from './styles';

export const OnboardingProgressBar = ({ step, isMobile }: any) => {
  const steps = [{ 0: 'Get Started' }, { 1: 'Connect Wallet' }, { 2: 'Verify Account' }];
  return (
    <>
      {isMobile ? (
        steps.map((item, index) => {
          const resp =
            index === step ? (
              <MobileProgressBarWrapper key={index}>
                <MobileProgressSteps>{`Step ${step + 1} of ${steps.length}`}</MobileProgressSteps>
                <ProgressBarStep completed current>
                  <ProgressBarText>{item[index]}</ProgressBarText>
                </ProgressBarStep>
              </MobileProgressBarWrapper>
            ) : null;
          return resp;
        })
      ) : (
        <ProgressBarWrapper>
          {steps.map((item, index) => (
            <ProgressBarStep completed={index < step} current={step === index} key={index}>
              <ProgressBarText>{item[index]}</ProgressBarText>
              {index + 1 < steps.length && (
                <ProgressBarIcon>
                  <Icon name="angle right" />
                </ProgressBarIcon>
              )}
            </ProgressBarStep>
          ))}
        </ProgressBarWrapper>
      )}
    </>
  );
};
export default OnboardingProgressBar;
