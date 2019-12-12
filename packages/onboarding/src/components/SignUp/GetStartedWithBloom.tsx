import React from 'react';
//import AppContext from '../App.context';
import {
  ChooseSignUpWrapper,
  GetStartedBloomHeader,
  GetStartedBloomTitle,
  GetStartedBloomSubtitle,
  GetStartedBloomWrapper,
  GetStartedBloomQRSection,
  GetStartedBloomInstructionsSection,
  GetStartedBloomFooter
} from '../styles';
import { Button } from 'semantic-ui-react';
import FollowSteps from './FollowSteps';
import { RequestElement, QROptions } from '@bloomprotocol/share-kit-react';
import { isMobile } from 'react-device-detect';

const GetStartedWithBloom = () => {
  const requestData: RequestData = { url: 'ss' };
  const buttonOptions: ButtonOptions = {
    callbackUrl: 'https://mysite.com/bloom-callback'
  };
  const qrOptions: Partial<QROptions> = {
    size: 250
  };

  return (
    <ChooseSignUpWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitle>Get Started</GetStartedBloomTitle>
        <GetStartedBloomSubtitle>with Bloom</GetStartedBloomSubtitle>
      </GetStartedBloomHeader>
      <GetStartedBloomWrapper>
        <GetStartedBloomQRSection>
          <RequestElement
            requestData={requestData}
            buttonOptions={buttonOptions}
            qrOptions={qrOptions}
          />
        </GetStartedBloomQRSection>
        <GetStartedBloomInstructionsSection>
          <FollowSteps isMobile={isMobile} />
        </GetStartedBloomInstructionsSection>
      </GetStartedBloomWrapper>
      <GetStartedBloomFooter>
        <Button basic color="black" onClick={() => {}}>
          Go back
        </Button>
      </GetStartedBloomFooter>
    </ChooseSignUpWrapper>
  );
};

export default GetStartedWithBloom;
