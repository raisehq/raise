import React, { useContext } from 'react';
import useImages from '../../hooks/useImages';
import { AppContext } from '../App';
import {
  OnboardingModal,
  OnboardingHeader,
  OnboardingContentWrapper,
  OnboardingImageWrapper,
  OnboardingImage,
  OnboardingTitle,
  OnboardingFormContent
} from './styles';

const PanelWithImage = ({ children }) => {
  const { blur, mountNode, open, onClose, closeButton }: any = useContext(AppContext);

  const dimmer = blur ? { dimmer: 'blurring' } : null;
  const getImagesUrl = useImages();

  return (
    <OnboardingModal {...dimmer} open={open} mountNode={mountNode}>
      <OnboardingHeader>
        <img src={`${getImagesUrl}/logo.svg`} />
      </OnboardingHeader>
      <OnboardingContentWrapper>
        <OnboardingImageWrapper>
          <OnboardingTitle>Get started</OnboardingTitle>
        </OnboardingImageWrapper>
        <OnboardingFormContent>{children}</OnboardingFormContent>
      </OnboardingContentWrapper>
    </OnboardingModal>
  );
};

export default PanelWithImage;
