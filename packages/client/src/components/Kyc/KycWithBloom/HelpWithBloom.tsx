import React from 'react';
import { HelpWithBloomWrapper, FollowingStepsTitle, IconWrapper, HelpMessage } from './styles';
import { Icon } from 'semantic-ui-react';

const HelpWithBloom = ({ setIsOpenHelp, setIsScreenIdle, kycUnsuccessful }) => {
  const kycUnsuccessfulMessage = (
    <HelpMessage>
      <p>It looks like there is some problem with your Id document attestation.</p>
      <p>Please, contact support@bloom.co to review your documentation.</p>
    </HelpMessage>
  );

  const helpWithBloomMessage = (
    <HelpMessage>
      <p>Please make sure you registered your ID in your Bloom profile.</p>
      <p>If you need help send email to help@raise.it</p>
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
