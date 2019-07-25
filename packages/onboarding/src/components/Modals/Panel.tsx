import React from 'react';
import { Modal } from 'semantic-ui-react';
import { OnboardingWrapper, TwoPanelModal, MainImage } from '../styles';

const PanelModal = ({ children }) => (
  <Modal style={TwoPanelModal} open dimmer="blurring">
    <OnboardingWrapper>
      <div className="visuals">
        <MainImage src="https://static.herodev.es/images/img_signin.png" />
      </div>
      <div className="process">{children}</div>
    </OnboardingWrapper>
  </Modal>
);

export default PanelModal;
