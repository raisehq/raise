import React, { useContext } from 'react';
import {
  OnboardingSimpleModal,
  OnboardingWrapper,
  commonModal,
  OnboardingCloseButton
} from '../styles';
import { AppContext } from '../App';

const SimpleModal = ({ children }) => {
  const { blur, mountNode, open, onClose, closeButton }: any = useContext(
    AppContext
  );

  const dimmer = blur ? { dimmer: 'blurring' } : null;

  return (
    <OnboardingSimpleModal
      {...dimmer}
      style={commonModal}
      open={open}
      mountNode={mountNode}
    >
      {closeButton && <OnboardingCloseButton onClick={onClose} icon="cancel" />}
      <OnboardingWrapper>
        <div className="process">{children}</div>
      </OnboardingWrapper>
    </OnboardingSimpleModal>
  );
};

export default SimpleModal;
