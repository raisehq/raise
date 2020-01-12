import React, { useState, useEffect, useContext } from 'react';
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
import { bloomSignIn, verifyBloomLogin } from '../../services';
import bloomToken from 'uuid';
import AppContext from '../App.context';

const GetStartedWithBloom = ({ onBack }) => {
  const [isScreenIdle, setIsScreenIdle] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [tokenBloom, setTokenBloom] = useState('');
  const [pollingUserId, setPollingUserId] = useState('');

  const { onLoginWithBloom }: any = useContext(AppContext);

  useInterval(async () => {
    const response = await verifyBloomLogin(tokenBloom);
    response.fold(
      error => {
        console.log(error);
      },
      response => {
        const {
          data: {
            data: { result }
          }
        } = response;
        setPollingUserId(result.id);
        if (result.id) {
          onLoginWithBloom(result);
        }
      }
    );
  }, 3000);

  useEffect(() => {
    setTokenBloom(bloomToken());
  }, []);

  useEffect(() => {
    setIsScreenIdle(true);
  }, []);

  useEffect(() => {
    const events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

    const resetTimeout = () => {
      setIsScreenIdle(false);
    };

    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }

    const timeout = setTimeout(() => {
      if (isScreenIdle) {
        setIsOpenHelp(true);
      }
      setIsScreenIdle(true);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isScreenIdle]);

  const requestData = {
    action: Action.attestation,
    token: tokenBloom,
    org_name: 'Raise',
    url: 'https://lp-912.api.herodev.es/kyc/scan',
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
            buttonCallbackUrl="https://lp-912.api.herodev.es/kyc/scan"
          />
        </GetStartedBloomQRSection>
        <GetStartedBloomInstructionsSection>
          {isOpenHelp ? (
            <HelpWithBloom setIsOpenHelp={setIsOpenHelp} setIsScreenIdle={setIsScreenIdle} />
          ) : (
            <FollowSteps />
          )}
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
