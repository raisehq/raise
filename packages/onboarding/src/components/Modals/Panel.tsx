import React, { useContext } from 'react';
import {
  OnboardingModal,
  OnboardingWrapper,
  TwoPanelModal,
  MainImage
} from '../styles';
import { AppContext } from '../App';
const PanelModal = ({ children }) => {
  const { mountNode }: any = useContext(AppContext);
  return (
    <OnboardingModal
      style={TwoPanelModal}
      open
      dimmer="blurring"
      mountNode={mountNode}
    >
      <OnboardingWrapper>
        <div className="visuals">
          <MainImage src="https://static.herodev.es/images/img_signin.png" />
        </div>
        <div className="process">{children}</div>
      </OnboardingWrapper>
    </OnboardingModal>
  );
};

export default PanelModal;
