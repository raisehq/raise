import React, { useContext } from 'react';
import {
  OnboardingTwoModal,
  OnboardingWrapper,
  commonModal,
  MainImage
} from '../styles';
import { AppContext } from '../App';
import useImages from '../../hooks/useImages';

const PanelModal = ({ children }) => {
  const { blur, mountNode }: any = useContext(AppContext);

  const dimmer = blur ? { dimmer: 'blurring' } : null;
  const getImagesUrl = useImages();

  return (
    <OnboardingTwoModal
      style={commonModal}
      open
      {...dimmer}
      mountNode={mountNode}
    >
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
