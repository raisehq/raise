import React from 'react';
import { InstructionsWrapper, FollowingStepsTitle, BloomParagraph, BloomHelpRaise } from './styles';

const FollowSteps = ({ isMobile }: any) => (
  <InstructionsWrapper>
    <FollowingStepsTitle>Follow these steps:</FollowingStepsTitle>
    {!isMobile ? (
      <p>1. Scan the QR Code with your Bloom mobile app</p>
    ) : (
      <p>1. Tap on the button above</p>
    )}
    <p>2. Follow Bloom&apos;s instructions</p>
    <BloomParagraph>
      3. Make sure you&apos;ve
      <span>uploaded your ID in Bloom</span>
    </BloomParagraph>
    <p>
      4. If you have any problem, send email to
      <BloomHelpRaise>help@raise.it</BloomHelpRaise>
    </p>
  </InstructionsWrapper>
);

export default FollowSteps;
