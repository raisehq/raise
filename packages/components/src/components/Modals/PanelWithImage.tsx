import React from 'react';
import { IMAGES_PATH } from '../../commons/constants';

import {
  OnboardingModal,
  OnboardingHeader,
  OnboardingContentWrapper,
  OnboardingImageWrapper,
  OnboardingImage,
  OnboardingTitleWrapper,
  OnboardingTitle,
  OnboardingSubTitle,
  OnboardingFormContent,
  OnboardingHeaderItemWrapper,
  OnboardingModalContent,
  OnboardingCloseIcon,
} from './styles';

const PanelWithImage = ({
  children,
  title,
  blur,
  mountNode,
  open,
  onClose,
  closeButton,
}: any) => {
  const dimmer = blur ? { dimmer: 'blurring' } : null;

  return (
    <OnboardingModal {...dimmer} open={open} mountNode={mountNode || undefined}>
      <OnboardingModalContent id="process">
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
        <OnboardingContentWrapper>
          <OnboardingImageWrapper>
            <OnboardingTitleWrapper>
              <OnboardingTitle>{title}</OnboardingTitle>
              <OnboardingSubTitle>
                The only marketplace that makes your money grow
              </OnboardingSubTitle>
            </OnboardingTitleWrapper>
            <OnboardingImage
              className="visual"
              src={`${IMAGES_PATH}img_signin_raise.png`}
            />
          </OnboardingImageWrapper>
          <OnboardingFormContent>{children}</OnboardingFormContent>
        </OnboardingContentWrapper>
      </OnboardingModalContent>
    </OnboardingModal>
  );
};

export default PanelWithImage;
