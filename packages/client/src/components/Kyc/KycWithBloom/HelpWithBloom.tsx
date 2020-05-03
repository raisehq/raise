import React from 'react';
import { Icon } from 'semantic-ui-react';
import {
  HelpWithBloomWrapper,
  FollowingStepsTitle,
  IconWrapper,
  HelpMessage,
  BloomHelpRaise
} from './styles';

const HelpWithBloom = ({ setIsOpenHelp, setIsScreenIdle, kycUnsuccessful, history }: any) => {
  const helpWithBloomMessage = (
    <HelpMessage>
      <FollowingStepsTitle>We detected some inactivity, is everything OK?</FollowingStepsTitle>
      <span className="bloomInstructions">
        Make sure you have uploaded your ID and your address in Bloom.{' '}
      </span>
      <span className="bloomInstructions">
        If you need help use our chat or send an email to
        <BloomHelpRaise> help@raise.it</BloomHelpRaise>
      </span>
    </HelpMessage>
  );
  return (
    <HelpWithBloomWrapper kycUnsuccessful={kycUnsuccessful}>
      <IconWrapper>
        <Icon
          name="close"
          onClick={() => {

            setIsOpenHelp(false);
            setIsScreenIdle(true);
          }}
        />
      </IconWrapper>

      {helpWithBloomMessage}
    </HelpWithBloomWrapper>
  );
};

export default HelpWithBloom;
