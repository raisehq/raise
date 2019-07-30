import React from 'react';
import { OnboardingModal, OnboardingWrapper, OnePanelModal } from '../styles';
import { getRootNode } from '../../utils';
const SimpleModal = ({ children }) => (
  <OnboardingModal
    style={OnePanelModal}
    open
    dimmer="blurring"
    mountNode={getRootNode()}
  >
    <OnboardingWrapper>
      <div className="process">{children}</div>
    </OnboardingWrapper>
  </OnboardingModal>
);

export default SimpleModal;
