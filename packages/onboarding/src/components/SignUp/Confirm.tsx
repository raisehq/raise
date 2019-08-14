import React from 'react';
import {
  ConfirmWrapper,
  ConfirmHeader,
  MainImage,
  ConfirmText
} from '../styles';
import useImages from '../../hooks/useImages';
import useGoogleTagManager from '../../hooks/useGoogleTagManager';

const Confirm = () => {
  const getImagesUrl = useImages();
  useGoogleTagManager(
    'new user',
    'www.raise.it',
    'Signup',
    '/confirm',
    'RegisterConfirm',
    'dataLayer',
    'Submit',
    'signup_form_success'
  );

  return (
    <ConfirmWrapper>
      <div>
        <MainImage src={`${getImagesUrl}img_mail.png`} />
      </div>
      <ConfirmHeader>Check your inbox!</ConfirmHeader>
      <ConfirmText>
        We've sent a confirmation to your inbox to verify your email and
        instructions for the next steps.
      </ConfirmText>
    </ConfirmWrapper>
  );
};

export default Confirm;
