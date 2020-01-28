import React from 'react';
import { Button } from 'semantic-ui-react';

import {
  ChooseMethodWrapper,
  GetStartedBloomHeader,
  GetStartedBloomTitleError,
  GetStartedBloomWrapper,
  GetStartedBloomInfoErrorSection,
  GetStartedBloomFooter
} from '../styles';

const ErrorBloom = ({ onBack }: { onBack: any }) => {
  return (
    <ChooseMethodWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitleError>Ups! Something went wrong.</GetStartedBloomTitleError>
      </GetStartedBloomHeader>
      <GetStartedBloomWrapper>
        <GetStartedBloomInfoErrorSection>
          <p>
            Please, make sure to have your Country registered at Bloom or that you don't have an
            existing account with the same email.
          </p>
        </GetStartedBloomInfoErrorSection>
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
