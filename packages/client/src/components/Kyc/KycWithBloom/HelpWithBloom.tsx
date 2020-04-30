import React from 'react';
import { Icon } from 'semantic-ui-react';
import {
  HelpWithBloomWrapper,
  FollowingStepsTitle,
  IconWrapper,
  HelpMessage,
  LinkToSumSub,
  BloomHelpRaise
} from './styles';

const HelpWithBloom = ({ setIsOpenHelp, setIsScreenIdle, kycUnsuccessful, history }: any) => {
  const kycUnsuccessfulMessage = (
    <HelpMessage>
      <p>It looks like there is some problem with your Id document attestation.</p>
      <p>Please, contact support@bloom.co to review your documentation.</p>
      <p>
        If this persists, you can also try our other verification provider
        <div>
          <LinkToSumSub onClick={() => history.push('/kyc-sumsub')}>Sum & Substance</LinkToSumSub>
        </div>
      </p>
    </HelpMessage>
  );

  const helpWithBloomMessage = (
    <HelpMessage>
      <p>Please make sure you registered your ID in your Bloom profile.</p>
      <p>
        If you need help send email to
        <BloomHelpRaise>help@raise.it</BloomHelpRaise>
      </p>
    </HelpMessage>
  );
  return (
    <HelpWithBloomWrapper kycUnsuccessful={kycUnsuccessful}>
      <IconWrapper>
        {!kycUnsuccessful && (
          <Icon
            name="close"
            onClick={() => {
              setIsOpenHelp(false);
              setIsScreenIdle(true);
            }}
          />
        )}
      </IconWrapper>
      <FollowingStepsTitle>Are you having problems to verify KYC with Bloom?</FollowingStepsTitle>
      {kycUnsuccessful ? kycUnsuccessfulMessage : helpWithBloomMessage}
    </HelpWithBloomWrapper>
  );
};

export default HelpWithBloom;
