import React, { useState } from 'react';
import {
  Modal,
  WarningImage,
  WarningName,
  WarningDescription,
  WarningButton,
  // WarningCheckbox,
  ButtonText,
  WarningContent,
  OnboardDisclaimerBorrower,
  OnboardCheckbox,
  OnboardingCell,
  WarningLink
} from './warning.styles';
import { WarningModalProps } from './types';

const WarningModal: React.SFC<WarningModalProps> = ({ warning, open, closeModal, setCookie }) => {
  const [checked, setChecked] = useState(false);

  const checkboxToggle = (e, data) => {
    setChecked(data.checked);
  };

  const storeCookie = () => {
    if (checked) {
      setCookie(warning.id);
    }

    closeModal();
  };

  return (
    <>
      <Modal open={open}>
        <WarningContent>
          {warning.image ? <WarningImage src={warning.image} /> : null}
          <WarningName>{warning.name}</WarningName>
          <WarningDescription>{warning.description}</WarningDescription>
          {warning.link ? (
            <WarningLink>
              <a href={warning.link}>{warning.image}</a>
            </WarningLink>
          ) : null}
          <OnboardDisclaimerBorrower>
            <OnboardingCell>
              <OnboardCheckbox onChange={checkboxToggle} />
            </OnboardingCell>
            <OnboardingCell>I'm aware. Don't show this again.</OnboardingCell>
          </OnboardDisclaimerBorrower>
          <WarningButton onClick={storeCookie} id="btn-warning-close">
            <ButtonText>Close</ButtonText>
          </WarningButton>
        </WarningContent>
      </Modal>
    </>
  );
};

export default WarningModal;
