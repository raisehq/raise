import React, { useContext } from 'react';
import {
  OnboardingSimpleModal,
  OnboardingWrapper,
  commonModal
} from '../styles';

import { AppContext } from '../App';
const SimpleModal = ({ children }) => {
  const { mountNode }: any = useContext(AppContext);
  return (
    <OnboardingSimpleModal
      style={commonModal}
      open
      dimmer="blurring"
      mountNode={mountNode}
    >
      <OnboardingWrapper>
        <div className="process">{children}</div>
      </OnboardingWrapper>
    </OnboardingSimpleModal>
  );
};

export default SimpleModal;
