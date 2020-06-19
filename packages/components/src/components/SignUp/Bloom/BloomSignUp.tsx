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
  BloomLogo,
  DimmerQR,
  LoaderQR
} from '../styles';
import FollowSteps from './FollowSteps';
import HelpWithBloom from './HelpWithBloom';
import ErrorBloom from './ErrorBloom';
import { AccountType } from '../../../types';
import { getIP } from '../../../utils';

const BloomSignUp = ({
  SignUpId,
  onBack,
  isUserSignedUp,
  redirectFromBloomApp,
  bloomSignIn,
  onBloomSignUp,
  onBloomError,
  hutk
}: any) => {
  const [isScreenIdle, setIsScreenIdle] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [tokenBloom, setTokenBloom] = useState('');
  const [bloomTokenString, setBloomTokenString]: any = useState();
  const [errorStage, setErrorStage] = useState(false);
  const checkerTimeout = useRef(null);

  const watchBloom = useCallback(async () => {
    const response = await isUserSignedUp(tokenBloom);
    response.fold(
      (error) => {
        console.error('Error Watch Bloom : ', error);
        onBloomError();
        setErrorStage(true);
      },
      (resp) => {
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

  const createBloomTokenInfo = async () => {
    try {
      const ip = await getIP();
      let bloomTokenID = tokenBloom;
      if (tokenBloom === null || tokenBloom.length === 0) {
        bloomTokenID = bloomToken();
        setTokenBloom(bloomTokenID);
      }

      const bloomObject = {
        clientIP: ip,
        crm: {
          signupId: SignUpId,
          signupType: 'bloom',
          hutk,
          uri: window.location.href
        },
        bloomTokenID,
        accountTypeId: AccountType.Lender
      };

      const query = new URLSearchParams(window.location.search);
      const refCode = query.get('referralCode');

      if (refCode && refCode !== '') {
        // eslint-disable-next-line dot-notation
        bloomObject['referrerCode'] = refCode;
      }

      const bloomObjectStringified = JSON.stringify(bloomObject);
      setBloomTokenString(bloomObjectStringified);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    createBloomTokenInfo();
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
    token: bloomTokenString, // tokenBloom,
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
            {bloomTokenString ? (
              <RequestElement
                requestData={requestData}
                buttonOptions={{ callbackUrl: redirectFromBloomApp(bloomToken) }}
                qrOptions={qrOptions}
              />
            ) : (
              <DimmerQR active inverted>
                <LoaderQR inverted>Generating QR</LoaderQR>
              </DimmerQR>
            )}
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
