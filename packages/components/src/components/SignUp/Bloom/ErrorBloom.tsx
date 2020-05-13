import React from 'react';

import {
  GetStartedBloomHeader,
  GetStartedBloomTitleError,
  GetStartedBloomWrapper,
  GetStartedBloomInfoErrorSection,
  GetStartedBloomFooter,
  BackButton
} from '../styles';

const ErrorBloom = ({ onBack }: any) => (
  <>
    <GetStartedBloomHeader>
      <GetStartedBloomTitleError>Oops! Something went wrong</GetStartedBloomTitleError>
    </GetStartedBloomHeader>
    <GetStartedBloomWrapper>
      <GetStartedBloomInfoErrorSection>
        <p>
          Please check that you don&apos;t have an existing account with the email address used in
          Bloom.
        </p>
      </GetStartedBloomInfoErrorSection>
    </GetStartedBloomWrapper>
    <GetStartedBloomFooter>
      <BackButton
        disabled={false}
        onClick={onBack}
        idAttr="singup_error_back"
        text="Back"
        type="tertiary"
        size="small"
      />
    </GetStartedBloomFooter>
  </>
);

export default ErrorBloom;
