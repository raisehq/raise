import React from 'react';
import { OnboardingModal, OnboardingWrapper, OnePanelModal } from '../styles';

const SimpleModal = ({ children }) => (
  <OnboardingModal style={OnePanelModal} open dimmer="blurring">
    <OnboardingWrapper>
      <div className="process">{children}</div>
    </OnboardingWrapper>
  </OnboardingModal>
);

export default SimpleModal;
