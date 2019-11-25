import React, { useContext } from 'react';
import useImages from '../../hooks/useImages';
import { AppContext } from '../App';
import {
  OnboardingModal,
  OnboardingHeader,
  OnboardingContentWrapper,
  OnboardingImageWrapper
} from './styles';

const PanelWithImage = ({ children }) => {
  const { blur, mountNode, open, onClose, closeButton }: any = useContext(AppContext);

  const dimmer = blur ? { dimmer: 'blurring' } : null;
  const getImagesUrl = useImages();

  return (
    <OnboardingModal {...dimmer} open={open} mountNode={mountNode}>
      <OnboardingHeader>Header</OnboardingHeader>
      <OnboardingContentWrapper>
        <div>
          <OnboardingImageWrapper src={`${getImagesUrl}img_signin_raise.png`} />
        </div>
        <div>{children}</div>
      </OnboardingContentWrapper>
    </OnboardingModal>
  );
};

export default PanelWithImage;
