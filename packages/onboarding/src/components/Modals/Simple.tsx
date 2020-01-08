import React, { useContext } from 'react';
import {
  OnboardingSimpleModal,
  OnboardingWrapper,
  commonModal,
  ConfirmHeaderWrapper,
  ConfirmLogo,
  ConfirmCros
} from '../styles';
import AppContext from '../App.context';
import { IMAGES_PATH } from '../../commons/constants';

const SimpleModal = ({ localClose, children }: any) => {
  const { blur, mountNode, open, onClose, closeButton }: any = useContext(AppContext);

  const dimmer = blur ? { dimmer: 'blurring' } : null;

  return (
    <OnboardingSimpleModal {...dimmer} style={commonModal} open={open} mountNode={mountNode}>
      <OnboardingWrapper>
        <div className="process">
          <ConfirmHeaderWrapper>
            <ConfirmLogo src={`${IMAGES_PATH}logo.svg`} />
            {(closeButton || localClose) && (
              <ConfirmCros link onClick={onClose} name="close" size="large" />
            )}
          </ConfirmHeaderWrapper>
          {children}
        </div>
      </OnboardingWrapper>
    </OnboardingSimpleModal>
  );
};

export default SimpleModal;
