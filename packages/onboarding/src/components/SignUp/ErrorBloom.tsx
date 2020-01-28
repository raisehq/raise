import React from 'react';
import { Button } from 'semantic-ui-react';
import { ErrorImage } from './styles';
import {
  ChooseMethodWrapper,
  GetStartedBloomHeader,
  GetStartedBloomTitleError,
  GetStartedBloomWrapper,
  GetStartedBloomErrorSection,
  GetStartedBloomInstructionsSection,
  GetStartedBloomFooter
} from '../styles';
import { IMAGES_PATH } from '../../commons/constants';
const ErrorBloom = ({ onBack, method }) => {
  return (
    <ChooseMethodWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitleError>Ups! Something went wrong with Bloom.</GetStartedBloomTitleError>
      </GetStartedBloomHeader>
      <GetStartedBloomWrapper>
        <GetStartedBloomErrorSection>
          <ErrorImage src={`${IMAGES_PATH}img_tokenerror.png`} />
        </GetStartedBloomErrorSection>
        <GetStartedBloomInstructionsSection>
          <p>
            Please, make sure to have your Country registered at Bloom or that you don't have an
            existing account with the same email.
          </p>
        </GetStartedBloomInstructionsSection>
      </GetStartedBloomWrapper>
      <GetStartedBloomFooter>
        <Button basic color="black" onClick={onBack}>
          Go back
        </Button>
      </GetStartedBloomFooter>
    </ChooseMethodWrapper>
  );
};

export default ErrorBloom;
