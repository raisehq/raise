import React, { useContext } from 'react';
import {
  OnboardingModal,
  OnboardingHeader,
  OnboardingContentWrapper,
  OnboardingHeaderItemWrapper,
  OnboardingModalContent,
  OnboardingCloseIcon
} from './styles';
import AppContext from '../App.context';
import { IMAGES_PATH } from '../../commons/constants';

const BigSimpleModal = ({ localClose, children }: any) => {
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
            {(closeButton || localClose) && (
              <OnboardingCloseIcon link onClick={onClose} name="close" size="large" />
            )}
          </OnboardingHeaderItemWrapper>
        </OnboardingHeader>
        <OnboardingContentWrapper>{children}</OnboardingContentWrapper>
      </OnboardingModalContent>
    </OnboardingModal>
  );
};

export default BigSimpleModal;
