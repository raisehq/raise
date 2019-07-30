import React, { useContext } from 'react';
import {
  OnboardingSimpleModal,
  OnboardingWrapper,
  commonModal
} from '../styles';
import { AppContext } from '../App';

const SimpleModal = ({ children }) => {
  const { blur, mountNode }: any = useContext(AppContext);

  const dimmer = blur ? { dimmer: 'blurring' } : null;

  return (
    <OnboardingSimpleModal
      style={commonModal}
      open
      {...dimmer}
      mountNode={mountNode}
    >
      <OnboardingWrapper>
        <div className="process">{children}</div>
      </OnboardingWrapper>
    </OnboardingSimpleModal>
  );
};

export default SimpleModal;
