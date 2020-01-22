import React from 'react';
import { Button } from 'semantic-ui-react';
import { ErrorImage } from './styles';
import {
  ChooseMethodWrapper,
  GetStartedBloomHeader,
  GetStartedBloomTitle,
  GetStartedBloomSubtitle,
  GetStartedBloomWrapper,
  GetStartedBloomQRSection,
  GetStartedBloomInstructionsSection,
  GetStartedBloomFooter
} from '../styles';
import { IMAGES_PATH } from '../../commons/constants';
const ErrorBloom = ({ onBack, method }) => {
  return (
    <ChooseMethodWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitle>{method}</GetStartedBloomTitle>
        <GetStartedBloomSubtitle> Ups! Somoething went wrong with Bloom.</GetStartedBloomSubtitle>
      </GetStartedBloomHeader>
      <GetStartedBloomWrapper>
        <GetStartedBloomQRSection>
          <ErrorImage src={`${IMAGES_PATH}img_tokenerror.png`} />
        </GetStartedBloomQRSection>
        <GetStartedBloomInstructionsSection>
          <p>
            Please, make sure to have your Country registered at Bloom or already doesn't have an
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
