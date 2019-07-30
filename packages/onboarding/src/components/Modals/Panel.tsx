import React from 'react';
import {
  OnboardingTwoModal,
  OnboardingWrapper,
  commonModal,
  MainImage
} from '../styles';

const PanelModal = ({ children }) => (
  <OnboardingTwoModal style={commonModal} open dimmer="blurring">
    <OnboardingWrapper>
      <div className="visuals">
        <MainImage src="https://static.herodev.es/images/img_signin.png" />
      </div>
      <div className="process">{children}</div>
    </OnboardingWrapper>
  </OnboardingTwoModal>
);

export default PanelModal;
