import React, { useState, useEffect, useContext, useRef } from 'react';
import { Button, Image, Loader } from 'semantic-ui-react';
import * as Cookies from 'js-cookie';
import { AccountType } from '@raisehq/components';
import {
  RequestElement,
  QROptions,
  Action,
  RequestData
} from '@bloomprotocol/share-kit-react/dist/index';
import bloomToken from 'uuid';
import { isMobile } from 'react-device-detect';

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
import FollowSteps from './FollowSteps';
import HelpWithBloom from './HelpWithBloom';
import { bloomSignIn, verifyBloomLogin, redirectFromBloomApp } from '../../services';
import AppContext from '../App.context';
import { getIP } from '../../utils';

const GetStartedWithBloom = ({ onBack, method, token = null }: any) => {
  const [isScreenIdle, setIsScreenIdle] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [tokenBloom, setTokenBloom] = useState(token !== null && token.length > 0 ? token : null);
  const [bloomTokenString, setBloomTokenString]: any = useState();
  const checkerTimeout = useRef(null);
  const { onLoginWithBloom }: any = useContext(AppContext);

  const watchBloom = async () => {
    const response = await verifyBloomLogin(tokenBloom);
    response.fold(
      (error) => {
        console.error('Error Watch Bloom : ', error);
        onLoginWithBloom(error, method);
      },
      (resp) => {
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

  const createBloomTokenInfo = async () => {
    try {
      const ip = await getIP();
      const hutk = Cookies.get('hubspotutk');
      let bloomTokenID = tokenBloom;
      if (tokenBloom === null || tokenBloom.length === 0) {
        bloomTokenID = bloomToken();
        setTokenBloom(bloomTokenID);
      }

      const bloomObject = {
        clientIP: ip,
        crm: {
          signupId: 'Onboarding_signup_form',
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
  }, []);

  useEffect(() => {
    if (tokenBloom !== null) {
      // Start check bloom
      checkerTimeout.current = setTimeout(watchBloom, 3000);
    }
    return () => checkerTimeout && clearTimeout(checkerTimeout.current);
  }, [tokenBloom]);

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

  console.log('request data:::: ', requestData);

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
          {bloomTokenString && (
            <RequestElement
              requestData={requestData}
              buttonOptions={{ callbackUrl: redirectFromBloomApp(tokenBloom) }}
              qrOptions={qrOptions}
            />
          )}
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
