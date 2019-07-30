import React, { useContext } from 'react';
import {
  OnboardingTwoModal,
  OnboardingWrapper,
  commonModal,
  MainImage
} from '../styles';
import { AppContext } from '../App';

const PanelModal = ({ children }) => {
  const { mountNode }: any = useContext(AppContext);
  return (
    <OnboardingTwoModal
      style={commonModal}
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
    </OnboardingTwoModal>
  );
};

export default PanelModal;
