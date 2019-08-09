import React, { useContext } from 'react';
import {
  OnboardingTwoModal,
  OnboardingWrapper,
  commonModal,
  MainImage,
  OnboardingCloseButton
} from '../styles';
import { AppContext } from '../App';
import useImages from '../../hooks/useImages';

const PanelModal = ({ children }) => {
  const { blur, mountNode, open, onClose, closeButton }: any = useContext(
    AppContext
  );

  const dimmer = blur ? { dimmer: 'blurring' } : null;
  const getImagesUrl = useImages();

  return (
    <OnboardingTwoModal
      {...dimmer}
      style={commonModal}
      open={open}
      mountNode={mountNode}
    >
      {closeButton && <OnboardingCloseButton onClick={onClose} icon="cancel" />}
      <OnboardingWrapper>
        <div className="visuals">
          <MainImage src={`${getImagesUrl}img_signin.png`} />
        </div>
        <div className="process">{children}</div>
      </OnboardingWrapper>
    </OnboardingTwoModal>
  );
};

export default PanelModal;
