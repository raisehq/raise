import React, { useEffect, useState, useCallback, useRef } from 'react';
import { v4 as bloomToken } from 'uuid';
import {
  RequestElement,
  QROptions,
  Action,
  RequestData
} from '@bloomprotocol/share-kit-react/dist/index';
import { isMobile } from 'react-device-detect';
import {
  BackButton,
  GetStartedBloomHeader,
  GetStartedBloomTitle,
  GetStartedBloomSubtitle,
  GetStartedBloomWrapper,
  GetStartedBloomQRSection,
  GetStartedBloomInstructionsSection,
  BackButtonWrapper,
  BloomLogo
} from '../styles';
import FollowSteps from './FollowSteps';
import HelpWithBloom from './HelpWithBloom';
import ErrorBloom from './ErrorBloom';

const BloomSignUp = ({
  SignUpId,
  onBack,
  isUserSignedUp,
  redirectFromBloomApp,
  bloomSignIn,
  onBloomSignUp,
  onBloomError
}: any) => {
  const [isScreenIdle, setIsScreenIdle] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [tokenBloom, setTokenBloom] = useState('');
  const [errorStage, setErrorStage] = useState(false);
  const checkerTimeout = useRef(null);

  const watchBloom = useCallback(async () => {
    const response = await isUserSignedUp(tokenBloom);
    response.fold(
      error => {
        console.error('Error Watch Bloom : ', error);
        onBloomError();
        setErrorStage(true);
      },
      resp => {
        const {
          data: {
            data: { result }
          }
        } = resp;

        if (result.id) {
          onBloomSignUp(result);
        } else {
          // @ts-ignore
          checkerTimeout.current = setTimeout(watchBloom, 3000);
        }
      }
    );
  }, [isUserSignedUp, onBloomError, onBloomSignUp, tokenBloom]);

  useEffect(() => {
    if (tokenBloom === null || tokenBloom.length === 0) {
      setTokenBloom(bloomToken());
    }
    setIsScreenIdle(true);
  }, [tokenBloom]);

  useEffect(() => {
    if (tokenBloom !== null) {
      // Start check bloom
      // @ts-ignore
      checkerTimeout.current = setTimeout(watchBloom, 3000);
    }
    // @ts-ignore
    return () => checkerTimeout && clearTimeout(checkerTimeout.current);
  }, [tokenBloom, watchBloom]);

  useEffect(() => {
    const events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

    const resetTimeout = () => {
      setIsScreenIdle(false);
    };
    // eslint-disable-next-line
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

  if (!errorStage) {
    return (
      <>
        <GetStartedBloomHeader>
          <GetStartedBloomTitle>Get Started</GetStartedBloomTitle>
          <GetStartedBloomSubtitle>
            <span>with</span>
            <BloomLogo src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} />
          </GetStartedBloomSubtitle>
        </GetStartedBloomHeader>
        <GetStartedBloomWrapper>
          <GetStartedBloomQRSection>
            <RequestElement
              requestData={requestData}
              buttonOptions={{ callbackUrl: redirectFromBloomApp(bloomToken) }}
              qrOptions={qrOptions}
            />
          </GetStartedBloomQRSection>
          <GetStartedBloomInstructionsSection>
            {isOpenHelp ? (
              <HelpWithBloom
                setIsOpenHelp={setIsOpenHelp}
                setIsScreenIdle={setIsScreenIdle}
                method="Sign Up"
              />
            ) : (
              <FollowSteps isMobile={isMobile} />
            )}
          </GetStartedBloomInstructionsSection>
        </GetStartedBloomWrapper>
        <BackButtonWrapper>
          <BackButton onClick={onBack} idAttr={SignUpId} size="small" text="Back" type="tertiary" />
        </BackButtonWrapper>
      </>
    );
  }
  return <ErrorBloom onBack={() => setErrorStage(false)} />;
};

export default BloomSignUp;
