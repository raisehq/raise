import React from 'react';
import {
  OnboardingSimpleModal,
  OnboardingWrapper,
  commonModal,
  ConfirmHeaderWrapper, // X
  ConfirmLogo, // X
  ConfirmCros,
} from './styles';
import { IMAGES_PATH } from '../../commons/constants';

const SimpleModal = ({
  localClose,
  children,
  blur,
  mountNode,
  open,
  onClose,
  closeButton,
}: any) => {
  const dimmer = blur ? { dimmer: 'blurring' } : null;

  return (
    <OnboardingSimpleModal
      {...dimmer}
      style={commonModal}
      open={open}
      mountNode={mountNode}
    >
      <OnboardingWrapper>
        <div className="process">
          <ConfirmHeaderWrapper>
            <ConfirmLogo src={`${IMAGES_PATH}logo.svg`} />
            {(closeButton || localClose) && (
              <ConfirmCros link onClick={onClose} name="close" size="large" />
            )}
          </ConfirmHeaderWrapper>
          {children}
        </div>
      </OnboardingWrapper>
    </OnboardingSimpleModal>
  );
};

export default SimpleModal;
