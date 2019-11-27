import React, { useContext, useState } from 'react';
import useImages from '../../hooks/useImages';
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
  const [open, setOpen] = useState(true);
  const { blur, mountNode }: any = useContext(AppContext);

  const dimmer = blur ? { dimmer: 'blurring' } : null;
  const getImagesUrl = useImages();

  const onCloseModal = () => setOpen(false);

  return (
    <OnboardingModal {...dimmer} open={open} mountNode={mountNode}>
      <OnboardingHeader>
        <OnboardingHeaderItemWrapper>
          <img src={`${getImagesUrl}logo.svg`} />
        </OnboardingHeaderItemWrapper>
        <OnboardingHeaderItemWrapper>
          <OnboardingCloseButton onClick={onCloseModal} icon="cancel" />
        </OnboardingHeaderItemWrapper>
      </OnboardingHeader>
      <OnboardingContentWrapper>
        <OnboardingImageWrapper>
          <OnboardingTitleWrapper>
            <OnboardingTitle>Get started</OnboardingTitle>
            <OnboardingSubTitle>The only marketplace that makes your money grow</OnboardingSubTitle>
          </OnboardingTitleWrapper>
          <OnboardingImage className="visual" src={`${getImagesUrl}img_signin_raise.png`} />
        </OnboardingImageWrapper>
        <OnboardingFormContent>{children}</OnboardingFormContent>
      </OnboardingContentWrapper>
    </OnboardingModal>
  );
};

export default PanelWithImage;
