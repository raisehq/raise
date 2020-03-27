import React, { useState, useEffect, useContext, useRef } from 'react';
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
import { Button, Image } from 'semantic-ui-react';
import FollowSteps from './FollowSteps';
import HelpWithBloom from './HelpWithBloom';
import {
  RequestElement,
  QROptions,
  Action,
  RequestData
} from '@bloomprotocol/share-kit-react/dist/index';
import useInterval from '../../hooks/useInterval';
import { bloomSignIn, verifyBloomLogin, redirectFromBloomApp } from '../../services';
import bloomToken from 'uuid';
import AppContext from '../App.context';
import { isMobile } from 'react-device-detect';

const GetStartedWithBloom = ({ onBack, method, token = null }) => {
  const [isScreenIdle, setIsScreenIdle] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [tokenBloom, setTokenBloom] = useState(token !== null && token.length > 0 ? token : null);
  const checkerTimeout = useRef(null);
  const { onLoginWithBloom }: any = useContext(AppContext);

  const watchBloom = async () => {
    const response = await verifyBloomLogin(tokenBloom);
    response.fold(
      error => {
        console.error('Error Watch Bloom : ', error);
        onLoginWithBloom(error, method);
      },
      resp => {
        const {
          data: {
            data: { result }
          }
        } = resp;

        if (result.id) {
          onLoginWithBloom(result, method);
        } else {
          checkerTimeout.current = setTimeout(watchBloom, 3000);
        }
      }
    );
  };

  useEffect(() => {
    if (tokenBloom === null || tokenBloom.length === 0) {
      setTokenBloom(bloomToken());
    }
    setIsScreenIdle(true);
  }, []);

  useEffect(() => {
    if (tokenBloom !== null) {
      // Start check bloom
      checkerTimeout.current = setTimeout(watchBloom, 3000);
      return () => {
        clearTimeout(checkerTimeout.current);
      };
    }
  }, [tokenBloom]);

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
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isScreenIdle]);

  const requestData: RequestData = {
    action: Action.attestation,
    token: tokenBloom,
    org_name: 'Raise',
    url: bloomSignIn(),
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: ['email']
  };

  const qrOptions: Partial<QROptions> = {
    size: 250
  };

  return (
    <ChooseMethodWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitle>{method}</GetStartedBloomTitle>
        <GetStartedBloomSubtitle>
          <span>with</span>
          <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
        </GetStartedBloomSubtitle>
      </GetStartedBloomHeader>
      <GetStartedBloomWrapper>
        <GetStartedBloomQRSection>
          <RequestElement
            requestData={requestData}
            buttonOptions={{ callbackUrl: redirectFromBloomApp(tokenBloom) }}
            qrOptions={qrOptions}
          />
        </GetStartedBloomQRSection>
        <GetStartedBloomInstructionsSection>
          {isOpenHelp ? (
            <HelpWithBloom
              setIsOpenHelp={setIsOpenHelp}
              setIsScreenIdle={setIsScreenIdle}
              method={method === 'Sign In' ? 'Sign In' : 'Sign Up'}
            />
          ) : (
            <FollowSteps isMobile={isMobile} />
          )}
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

export default GetStartedWithBloom;
