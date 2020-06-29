import React from 'react';
import { Icon } from 'semantic-ui-react';
import { HelpWithBloomWrapper, FollowingStepsTitle, IconWrapper } from '../styles';

const HelpWithBloom = ({ setIsOpenHelp, setIsScreenIdle }: any) => (
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
    <FollowingStepsTitle>Experiencing any problem?</FollowingStepsTitle>
    <p>Contact us at help@raise.it</p>
  </HelpWithBloomWrapper>
);

export default HelpWithBloom;
