import React, { useState, useEffect, useContext } from 'react';
import {
  ChooseMethodWrapper,
  GetStartedBloomHeader,
  GetStartedBloomTitle,
  GetStartedBloomSubtitle,
  GetStartedBloomWrapper,
  GetStartedBloomQRSection,
  GetStartedBloomInstructionsSection,
  GetStartedBloomFooter
} from './styles';
import { isMobile } from 'react-device-detect';
import { Button, Image } from 'semantic-ui-react';
import FollowSteps from './FollowSteps';
import HelpWithBloom from './HelpWithBloom';
import { RequestElement, QROptions, Action, RequestData } from '@bloomprotocol/share-kit-react';
import AppContext from '../../AppContext';
//import LocalData from '../../../helpers/localData';

const KycWithBloom = ({ onBack, token = '' }) => {
  const { history }: any = useContext(AppContext);
  const [isScreenIdle, setIsScreenIdle] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [tokenBloom, setTokenBloom] = useState('');

  useEffect(() => {
    setIsScreenIdle(true);
    //const user = LocalData.get('user');
    //const userId = user ? user.id : null;
    setTokenBloom('');
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
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isScreenIdle]);

  const requestData: RequestData = {
    action: Action.attestation,
    token: tokenBloom,
    org_name: 'Raise',
    url: 'https://lp-996.api.herodev.es/kyc/bloom/verification',
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: ['email', 'id-document', 'full-name', 'address']
  };

  const qrOptions: Partial<QROptions> = {
    size: 250
  };

  return (
    <ChooseMethodWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitle>Verify KYC</GetStartedBloomTitle>
        <GetStartedBloomSubtitle>
          <span>With</span>
          <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
        </GetStartedBloomSubtitle>
      </GetStartedBloomHeader>
      <GetStartedBloomWrapper>
        <GetStartedBloomQRSection>
          <RequestElement
            requestData={requestData}
            buttonOptions={{ callbackUrl: ''}}
            qrOptions={qrOptions}
          />
        </GetStartedBloomQRSection>
        <GetStartedBloomInstructionsSection>
          {isOpenHelp ? (
            <HelpWithBloom setIsOpenHelp={setIsOpenHelp} setIsScreenIdle={setIsScreenIdle} />
          ) : (
            <FollowSteps isMobile={isMobile} />
          )}
        </GetStartedBloomInstructionsSection>
      </GetStartedBloomWrapper>
      <GetStartedBloomFooter>
        <Button basic color="black" onClick={() => history.push('/kyc')}>
          Go back
        </Button>
      </GetStartedBloomFooter>
    </ChooseMethodWrapper>
  );
};

export default KycWithBloom;
