import React, { useContext, useState } from 'react';
import { IMAGES_PATH } from '../../commons/constants';
import AppContext from '../App.context';
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
  OnboardingCloseButton,
  OnboardingHeaderItemWrapper
} from './styles';

const PanelWithImage = ({ children }) => {
  const { blur, mountNode, open, onClose, closeButton }: any = useContext(AppContext);

  const dimmer = blur ? { dimmer: 'blurring' } : null;

  return (
    <OnboardingModal {...dimmer} open={open} mountNode={mountNode}>
      <OnboardingHeader>
        <OnboardingHeaderItemWrapper>
          <img src={`${IMAGES_PATH}logo.svg`} />
        </OnboardingHeaderItemWrapper>
        <OnboardingHeaderItemWrapper>
          {closeButton && <OnboardingCloseButton onClick={onClose} icon="cancel" />}
        </OnboardingHeaderItemWrapper>
      </OnboardingHeader>
      <OnboardingContentWrapper>
        <OnboardingImageWrapper>
          <OnboardingTitleWrapper>
            <OnboardingTitle>Get started</OnboardingTitle>
            <OnboardingSubTitle>The only marketplace that makes your money grow</OnboardingSubTitle>
          </OnboardingTitleWrapper>
          <OnboardingImage className="visual" src={`${IMAGES_PATH}img_signin_raise.png`} />
        </OnboardingImageWrapper>
        <OnboardingFormContent>{children}</OnboardingFormContent>
      </OnboardingContentWrapper>
    </OnboardingModal>
  );
};

export default PanelWithImage;
