import React from 'react';
import {
  OnboardingSimpleModal,
  OnboardingWrapper,
  commonModal
} from '../styles';

const SimpleModal = ({ children }) => (
  <OnboardingSimpleModal style={commonModal} open dimmer="blurring">
    <OnboardingWrapper>
      <div className="process">{children}</div>
    </OnboardingWrapper>
  </OnboardingSimpleModal>
);

export default SimpleModal;
