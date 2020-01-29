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

const ErrorBloom = ({ onBack }: any) => {
  return (
    <ChooseMethodWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitleError>Oops! Something went wrong</GetStartedBloomTitleError>
      </GetStartedBloomHeader>
      <GetStartedBloomWrapper>
        <GetStartedBloomInfoErrorSection>
          <p>
            Please check that you don't have an existing account with the email address used in
            Bloom.
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
