import React, { useState, useEffect } from 'react';
import { RequestElement, QROptions, Action, RequestData } from '@bloomprotocol/share-kit-react';
import { isMobile } from 'react-device-detect';
import { Button, Image } from 'semantic-ui-react';
import {
  ChooseMethodWrapper,
  GetStartedBloomHeader,
  GetStartedBloomTitle,
  GetStartedBloomSubtitle,
  GetStartedBloomWrapper,
  GetStartedBloomQRSection,
  GetStartedBloomInstructionsSection,
  GetStartedBloomFooter,
  GetStartedBloomDescription
} from './styles';
import FollowSteps from './FollowSteps';
import HelpWithBloom from './HelpWithBloom';
import useRouter from '../../../hooks/useRouter';
import { URL } from '../../../services/kyc';
import LocalData from '../../../helpers/localData';
import useInterval from '../../../hooks/useInterval';
import { getUser } from '../../../services/auth';

const KycWithBloom = ({ onBack }: any) => {
  const { history }: any = useRouter();
  const [isScreenIdle, setIsScreenIdle] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);
  const [tokenBloom, setTokenBloom] = useState('');
  const [attestations, setAttestations] = useState<any>([]);
  const [kycUnsuccessful, setKycUnsuccessful] = useState(false);

  useInterval(async () => {
    if (tokenBloom !== '') {
      const user = await getUser(tokenBloom);
      if (user.kyc_status === 1 && user.kyc_provider === 2) {
        setKycUnsuccessful(true);
        LocalData.setObj('user', {
          ...user
        });
        onBack();
      }
      if (user.kyc_status === 4 || user.kyc_status === 3) {
        history.push('/kyc-success');
        LocalData.setObj('user', {
          ...user
        });
        onBack();
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
    setTokenBloom(userId);
  }, []);

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
    url: URL.BLOOM_KYC,
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: attestations
  };

  const qrOptions: Partial<QROptions> = {
    size: 260
  };

  return (
    <ChooseMethodWrapper>
      <GetStartedBloomHeader>
        <GetStartedBloomTitle>Verify your account</GetStartedBloomTitle>
        <GetStartedBloomSubtitle>
          <span>with</span>
          <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
        </GetStartedBloomSubtitle>
        <GetStartedBloomDescription>
          <span>
            This process will take approximately 3 minutes to complete and it will be verified by a
            third-party organization. After submission, you will receive an email confirming your
            approval or to verify further information. The time-frame for approval can vary on a
            user to user basis.
          </span>
        </GetStartedBloomDescription>
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
          {isOpenHelp || kycUnsuccessful ? (
            <HelpWithBloom
              setIsOpenHelp={setIsOpenHelp}
              kycUnsuccessful={kycUnsuccessful}
              setIsScreenIdle={setIsScreenIdle}
              history={history}
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
