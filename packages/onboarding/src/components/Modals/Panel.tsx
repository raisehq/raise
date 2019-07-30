import React from 'react';
import {
  OnboardingModal,
  OnboardingWrapper,
  TwoPanelModal,
  MainImage
} from '../styles';
import { getRootNode } from '../../utils';
const PanelModal = ({ children }) => (
  <OnboardingModal
    style={TwoPanelModal}
    open
    dimmer="blurring"
    mountNode={getRootNode()}
  >
    <OnboardingWrapper>
      <div className="visuals">
        <MainImage src="https://static.herodev.es/images/img_signin.png" />
      </div>
      <div className="process">{children}</div>
    </OnboardingWrapper>
  </OnboardingModal>
);

export default PanelModal;
