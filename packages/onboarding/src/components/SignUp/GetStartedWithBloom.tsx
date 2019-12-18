import React, { useState, useEffect } from 'react';
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
import { Button, Image } from 'semantic-ui-react';
import FollowSteps from './FollowSteps';
import HelpWithBloom from './HelpWithBloom';
import { RequestElement, QROptions, Action } from '@bloomprotocol/share-kit-react';
import useInterval from '../../hooks/useInterval';
import { bloomSignIn } from '../../services';

const GetStartedWithBloom = ({ onBack }) => {
  const [isScreenIdle, setIsScreenIdle] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  useInterval(() => console.log('Haciendo polling'), 1000);

  useEffect(() => {
    if (isOpenHelp) return;
    const events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

    const resetTimeout = () => setIsScreenIdle(false);

    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }

    setTimeout(() => {
      setIsScreenIdle(true);
      setIsOpenHelp(true);
    }, 3000);
  }, [isOpenHelp, isScreenIdle]);

  const requestData = {
    action: Action.attestation,
    token: '284a54f2-79ec-4056-8347-5c29a4b32070',
    org_name: 'Raise',
    url: bloomSignIn(),
    //url: 'https://receive-kit.bloom.co/api/receive',
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: ['email']
  };
  console.log(JSON.stringify(requestData));

  const buttonOptions: ButtonOptions = {
    callbackUrl: bloomSignIn()
  };

  const qrOptions: Partial<QROptions> = {
    size: 250
  };

  return (
    <ChooseSignUpWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitle>Get Started</GetStartedBloomTitle>
        <GetStartedBloomSubtitle>
          <span>With</span>
          <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
        </GetStartedBloomSubtitle>
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
          {isOpenHelp ? <HelpWithBloom setIsOpenHelp={setIsOpenHelp} /> : <FollowSteps />}
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
