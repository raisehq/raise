import React from 'react';
import { HelpWithBloomWrapper, FollowingStepsTitle, IconWrapper } from './styles';
import { Icon } from 'semantic-ui-react';

const HelpWithBloom = ({ setIsOpenHelp, setIsScreenIdle, kycUnsuccessful }) => {
  const kycUnsuccessfulMessage = (
    <div>
      <p>Your KYC validation has not passed.</p>
      <p>Please, send us email to help@raise.it so we can help you.</p>
    </div>
  );

  const helpWithBloomMessage = (
    <div>
      <p>Please make sure you registered your address and ID in your Bloom profile.</p>
      <p>If you need help send email to help@raise.it</p>
    </div>
  );
  return (
    <HelpWithBloomWrapper kycUnsuccessful>
      <IconWrapper>
        <Icon
          name="close"
          onClick={() => {
            setIsOpenHelp(false);
            setIsScreenIdle(true);
          }}
        />
      </IconWrapper>
      <FollowingStepsTitle>Are you having problems to verify KYC with Bloom?</FollowingStepsTitle>
      {kycUnsuccessful ? kycUnsuccessfulMessage : helpWithBloomMessage}
    </HelpWithBloomWrapper>
  );
};

export default HelpWithBloom;
