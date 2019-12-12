import React, { useContext, useState } from 'react';
import { IMAGES_PATH } from '../../commons/constants';
import AppContext from '../App.context';
import {
  OnboardingModal,
  OnboardingHeader,
  OnboardingFormContent,
  OnboardingCloseButton,
  OnboardingHeaderItemWrapper,
  OnboardingModalContent,
  OnboardingBloomContent
} from './styles';

const PanelWithImage = ({ children }) => {
  const { blur, mountNode, open, onClose, closeButton }: any = useContext(AppContext);

  const dimmer = blur ? { dimmer: 'blurring' } : null;

  return (
    <OnboardingModal {...dimmer} open={open} mountNode={mountNode}>
      <OnboardingModalContent>
        <OnboardingHeader>
          <OnboardingHeaderItemWrapper>
            <img src={`${IMAGES_PATH}logo.svg`} />
          </OnboardingHeaderItemWrapper>
          <OnboardingHeaderItemWrapper>
            {closeButton && <OnboardingCloseButton onClick={onClose} icon="cancel" />}
          </OnboardingHeaderItemWrapper>
        </OnboardingHeader>
        <OnboardingBloomContent>{children}</OnboardingBloomContent>
      </OnboardingModalContent>
    </OnboardingModal>
  );
};

export default PanelWithImage;
