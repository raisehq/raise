import React from 'react';
import { Modal } from 'semantic-ui-react';
import { OnboardingWrapper, OnePanelModal } from '../styles';

const SimpleModal = ({ children }) => (
  <Modal style={OnePanelModal} open dimmer="blurring">
    <OnboardingWrapper>
      <div className="process">{children}</div>
    </OnboardingWrapper>
  </Modal>
);

export default SimpleModal;
