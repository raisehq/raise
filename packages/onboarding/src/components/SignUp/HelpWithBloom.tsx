import React from 'react';
import { Icon } from 'semantic-ui-react';
import { HelpWithBloomWrapper, FollowingStepsTitle, IconWrapper } from '../styles';

const HelpWithBloom = ({ setIsOpenHelp, setIsScreenIdle, method }: any) => (
  <HelpWithBloomWrapper>
    <IconWrapper>
      <Icon
        name="close"
        onClick={() => {
          setIsOpenHelp(false);
          setIsScreenIdle(true);
        }}
      />
    </IconWrapper>
    <FollowingStepsTitle>Are you having problems to{method} with Bloom?</FollowingStepsTitle>
    <p>If you need help send email to help@raise.it</p>
  </HelpWithBloomWrapper>
);

export default HelpWithBloom;
