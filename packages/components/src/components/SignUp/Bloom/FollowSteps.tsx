import React from 'react';
import { InstructionsWrapper, FollowingStepsTitle } from '../styles';

const FollowSteps = ({ isMobile }: { isMobile: boolean }) => (
  <InstructionsWrapper>
    <FollowingStepsTitle>Follow these steps:</FollowingStepsTitle>
    {!isMobile ? (
      <p>1. Scan the QR Code with your Bloom mobile app</p>
    ) : (
      <p>1. Tap on the button above</p>
    )}
    <p>2. Follow Bloom&apos;s instructions</p>
    <p>3. If you have any problem, send email to help@raise.it</p>
  </InstructionsWrapper>
);

export default FollowSteps;
