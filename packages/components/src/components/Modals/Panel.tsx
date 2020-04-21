import React from 'react';
import { IMAGES_PATH } from '../../commons/constants';
import {
  OnboardingModal,
  OnboardingHeader,
  OnboardingCloseButton,
  OnboardingHeaderItemWrapper,
  OnboardingModalContent,
  OnboardingBloomContent,
} from './styles';

const PanelWithImage = ({
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
              <OnboardingCloseButton onClick={onClose} icon="cancel" />
            )}
          </OnboardingHeaderItemWrapper>
        </OnboardingHeader>
        <OnboardingBloomContent>{children}</OnboardingBloomContent>
      </OnboardingModalContent>
    </OnboardingModal>
  );
};

export default PanelWithImage;
