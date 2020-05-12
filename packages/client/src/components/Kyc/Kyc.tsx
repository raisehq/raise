import React, { useState, useEffect } from 'react';
import { Image } from 'semantic-ui-react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import {
  KYCWrapper,
  GetStartedSumTitle,
  GetStartedSumSubtitle,
  InformationSection,
  HorizontalDivider,
  BloomWrapper,
  SubTitle,
  VerifyWithBloom,
  ContactUs
} from './Kyc.styles';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';
import useInterval from '../../hooks/useInterval';
import LocalData from '../../helpers/localData';
import { getUser } from '../../services/auth';
import InformationContainer from './InformationSection';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';

const KYC = () => {
  const {
    store,
    store: {
      kyc: { token }
    },
    actions: {
      kyc: { onConnect }
    }
  }: any = useRootContext();
  const { history }: any = useRouter();
  const [userObj, setUserObj] = useState<any>(null);

  const tagManager = useGoogleTagManager('Kyc');
  const kycLabelMapps = {
    sumsub: 'sumsub',
    bloom: 'bloom'
  };

  const providerKYC = provider => {
    tagManager.sendEvent(TMEvents.Click, kycLabelMapps[provider]);

    switch (provider) {
      case 'sumsub':
        history.push('/kyc-sumsub');
        break;
      case 'bloom':
        history.push('/kyc-bloom');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setUserObj(LocalData.getObj('user'));
  }, []);

  useAsyncEffect(async () => {
    if (history.location.pathname === '/kyc-sumsub' && token) {
      const { id } = store.user.details;

      await onConnect();
      // @ts-ignore
      window.idensic.init(
        '#idensic',
        {
          clientId: process.env.REACT_APP_SUMSUB_CLIENTID,
          externalUserId: id,
          accessToken: token,
          excludedCountries: [
            'IRN',
            'IRQ',
            'COD',
            'BIH',
            'SDN',
            'SYR',
            'ZWE',
            'LBR',
            'ALB',
            'MKD',
            'XKX',
            'SRB',
            'MNE',
            'BLR',
            'MMR',
            'CIV',
            'CUB',
            'USA',
            'UMI',
            'SSD',
            'PRK'
          ]
        },
        (messageType, payload) =>
          console.log('[IDENSIC DEMO] Idensic message:', messageType, payload)
      );
    }
  }, [history, token]);

  useInterval(async () => {
    if (userObj) {
      const { id } = userObj;

      const user = await getUser(id);
      if (user.kyc_status === 1 && user.kyc_provider === 2) {
        LocalData.setObj('user', {
          ...user
        });
      }
      if (user.kyc_status === 4 || user.kyc_status === 3) {
        history.push('/kyc-success');
        LocalData.setObj('user', {
          ...user
        });
      }
    }
  }, 3000);

  return (
    <KYCWrapper>
      <GetStartedSumTitle as="h2">Verify your account with Sum&Sub</GetStartedSumTitle>
      <GetStartedSumSubtitle>
        <Image
          src={`${process.env.REACT_APP_HOST_IMAGES}/images/sumsub_logo_417x76.png`}
          size="small"
        />
      </GetStartedSumSubtitle>
      <div id="idensic" />
      <BloomWrapper onClick={() => providerKYC('bloom')}>
        <SubTitle>Do you have a Bloom account?</SubTitle>
        <VerifyWithBloom>
          <span>Verify with </span>
          <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
        </VerifyWithBloom>
      </BloomWrapper>

      <InformationSection>
        <InformationContainer
          title="How to verify with Sum&Sub"
          slug="kyc-sumsub-instructions"
          insideMethod
        />
        <HorizontalDivider />
        <InformationContainer title="How to verify with Bloom" slug="kyc-bloom-instructions" />
      </InformationSection>

      <ContactUs>
        If you are having problems to verify your ID, please contact us through our chat or send an
        email to
        <span>&nbsp;help@raise.it</span>
      </ContactUs>
    </KYCWrapper>
  );
};

export default KYC;
