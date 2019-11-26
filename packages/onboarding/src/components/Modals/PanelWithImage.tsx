import React, { useContext } from 'react';
import useImages from '../../hooks/useImages';
import { AppContext } from '../App';
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
  OnboardingCloseButton
} from './styles';

const PanelWithImage = ({ children }) => {
  const { blur, mountNode, open, onClose, closeButton }: any = useContext(AppContext);

  const dimmer = blur ? { dimmer: 'blurring' } : null;
  const getImagesUrl = useImages();

  return (
    <OnboardingModal {...dimmer} open={open} mountNode={mountNode}>
      <OnboardingHeader>
        <img src={`${getImagesUrl}logo.svg`} />
        {true && <OnboardingCloseButton onClick={onClose} icon="cancel" />}
      </OnboardingHeader>
      <OnboardingContentWrapper>
        <OnboardingImageWrapper>
          <OnboardingTitleWrapper>
            <OnboardingTitle>Get started</OnboardingTitle>
            <OnboardingSubTitle>The only marketplace that makes your money grow</OnboardingSubTitle>
          </OnboardingTitleWrapper>
          <OnboardingImage src={`${getImagesUrl}img_signin_raise.png`} />
        </OnboardingImageWrapper>
        <OnboardingFormContent>{children}</OnboardingFormContent>
      </OnboardingContentWrapper>
    </OnboardingModal>
  );
};

export default PanelWithImage;
