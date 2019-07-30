import React, { useContext } from 'react';
import { OnboardingModal, OnboardingWrapper, OnePanelModal } from '../styles';
import { AppContext } from '../App';
const SimpleModal = ({ children }) => {
  const { mountNode }: any = useContext(AppContext);

  return (
    <OnboardingModal
      style={OnePanelModal}
      open
      dimmer="blurring"
      mountNode={mountNode}
    >
      <OnboardingWrapper>
        <div className="process">{children}</div>
      </OnboardingWrapper>
    </OnboardingModal>
  );
};

export default SimpleModal;
