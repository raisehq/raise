import React from 'react';
import {
  SignUpResponseContainer,
  SingUpResponseImage,
  SignUpResponseTitle,
  BackButton,
} from '../styles';
import Stages from './Stages';

const Error = ({ setStage }: any) => (
  <SignUpResponseContainer>
    <SingUpResponseImage
      src={`${process.env.REACT_APP_HOST_IMAGES}/images/warning.svg`}
    />
    <SignUpResponseTitle>
      Something went wrong, please try again later
    </SignUpResponseTitle>
    <BackButton
      disabled={false}
      onClick={() => setStage(Stages.Register)}
      idAttr="singup_error_back"
      text="Back"
      type="tertiary"
      size="small"
    />
  </SignUpResponseContainer>
);
export default Error;
