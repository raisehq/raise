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
import { URL } from '../../../services/kyc';
import LocalData from '../../../helpers/localData';
import useInterval from '../../../hooks/useInterval';
import { getUser } from '../../../services/auth';

const KycWithBloom = ({ onBack, token = '' }) => {
  const { history }: any = useContext(AppContext);
  const [isScreenIdle, setIsScreenIdle] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [tokenBloom, setTokenBloom] = useState('');
  const [attestations, setAttestations] = useState<any>([]);
  const [kycUnsuccessful, setKycUnsuccessful] = useState(false);

  useInterval(async () => {
    if (tokenBloom !== '') {
      const user = await getUser(tokenBloom);
      if (user.kyc_status === 3) {
        LocalData.setObj('user', {
          ...user,
          kyc_status: user.kyc_status
        });
        onBack();
        history.push('/');
      }
      if (user.kyc_status === 4 && user.kyc_provider === 2) {
        setKycUnsuccessful(true);
        LocalData.setObj('user', {
          ...user,
          kyc_status: user.kyc_status
        });
      }
    }
  }, 3000);

  useEffect(() => {
    setAttestations(
      process.env.REACT_APP_BLOOM_ATTESTATIONS
        ? process.env.REACT_APP_BLOOM_ATTESTATIONS.split(' ')
        : []
    );
    setIsScreenIdle(true);
    const user = LocalData.getObj('user');
    const userId = user.id;
    console.log('USERID: ', userId);
    setTokenBloom(userId);
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
    url: URL.BLOOM_KYC,
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: attestations
  };

  const qrOptions: Partial<QROptions> = {
    size: 250
  };

  return (
    <ChooseMethodWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitle>Verify KYC</GetStartedBloomTitle>
        <GetStartedBloomSubtitle>
          <span>with</span>
          <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
        </GetStartedBloomSubtitle>
      </GetStartedBloomHeader>
      <GetStartedBloomWrapper>
        <GetStartedBloomQRSection>
          <RequestElement
            requestData={requestData}
            buttonOptions={{ callbackUrl: `${process.env.REACT_APP_HOST}` }}
            qrOptions={qrOptions}
          />
        </GetStartedBloomQRSection>
        <GetStartedBloomInstructionsSection>
          {isOpenHelp || kycUnsuccessful? (
            <HelpWithBloom
              setIsOpenHelp={setIsOpenHelp}
              kycUnsuccessful={kycUnsuccessful}
              setIsScreenIdle={setIsScreenIdle}
            />
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
