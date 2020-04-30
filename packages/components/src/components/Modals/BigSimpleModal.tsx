import React from 'react';
import { IMAGES_PATH } from '../../commons/constants';

import {
  OnboardingModal,
  OnboardingHeader,
  OnboardingContentWrapper,
  OnboardingHeaderItemWrapper,
  OnboardingModalContent,
  OnboardingCloseIcon,
} from './styles';

const BigSimpleModal = ({
  children,
  blur,
  mountNode,
  open,
  onClose,
  closeButton,
}: any) => {
  const dimmer = blur ? { dimmer: 'blurring' } : null;

  return (
    <OnboardingModal {...dimmer} open={open} mountNode={mountNode}>
      <OnboardingModalContent>
        <OnboardingHeader>
          <OnboardingHeaderItemWrapper>
            <img src={`${IMAGES_PATH}logo.svg`} alt="Raise.it" />
          </OnboardingHeaderItemWrapper>
          <OnboardingHeaderItemWrapper>
            {closeButton && (
              <OnboardingCloseIcon
                link
                onClick={onClose}
                name="close"
                size="large"
              />
            )}
          </OnboardingHeaderItemWrapper>
        </OnboardingHeader>
        <OnboardingContentWrapper>{children}</OnboardingContentWrapper>
      </OnboardingModalContent>
    </OnboardingModal>
  );
};

export default BigSimpleModal;
