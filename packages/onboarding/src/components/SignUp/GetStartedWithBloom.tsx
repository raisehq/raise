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
import { RequestElement, QROptions, Action } from '@bloomprotocol/share-kit-react';
import { isMobile } from 'react-device-detect';

const GetStartedWithBloom = ({onBack}) => {
  //const requestData: RequestData = { url: 'ss' };
  const requestData = {
    action: Action.attestation,
    token: '284a54f2-79ec-4056-8347-5c29a4b32070',
    org_name: 'Bloom',
    url: 'https://receive-kit.bloom.co/api/receive',
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: ['phone','email']
  }
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
            buttonCallbackUrl="https://bloom.co?token=284a54f2-79ec-4056-8347-5c29a4b32070"
          />
        </GetStartedBloomQRSection>
        <GetStartedBloomInstructionsSection>
          <FollowSteps isMobile={isMobile} />
        </GetStartedBloomInstructionsSection>
      </GetStartedBloomWrapper>
      <GetStartedBloomFooter>
        <Button basic color="black" onClick={onBack}>
          Go back
        </Button>
      </GetStartedBloomFooter>
    </ChooseSignUpWrapper>
  );
};

export default GetStartedWithBloom;
