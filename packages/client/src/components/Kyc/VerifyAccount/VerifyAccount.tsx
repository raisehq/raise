import React from 'react';
import { Image } from 'semantic-ui-react';
import { ButtonLink } from '@raisehq/components';
import useGoogleTagManager, { TMEvents } from '../../../hooks/useGoogleTagManager';
import useRouter from '../../../hooks/useRouter';
import { BloomWrapper, Container, Title, SubTitle, VerifyWithBloom } from './styles';

const VerifyAccount = () => {
  const { history }: any = useRouter();
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
  return (
    <Container>
      <Title>Verify your account now</Title>

      <ButtonLink
        onClick={() => providerKYC('sumsub')}
        size="large"
        text="With Sum&Sub"
        fullWidth
        icon="arrow_right.png"
        type="secondary"
        logo="kyc/sumsub_icon_80x80.png"
      />
      <BloomWrapper onClick={() => providerKYC('bloom')}>
        <SubTitle>Do you have a Bloom account?</SubTitle>
        <VerifyWithBloom>
          <span>Verify with </span>
          <Image src={`${process.env.REACT_APP_HOST_IMAGES}/images/signup_bloom.png`} size="tiny" />
        </VerifyWithBloom>
      </BloomWrapper>
    </Container>
  );
};
export default VerifyAccount;
