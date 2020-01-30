import React from 'react';
import { InstructionsWrapper, FollowingStepsTitle, BloomParagraph } from './styles';

const FollowSteps = ({ isMobile }) => {
  return (
    <InstructionsWrapper>
      <FollowingStepsTitle>Follow these steps:</FollowingStepsTitle>
      {!isMobile ? (
        <p>1. Scan the QR Code with your Bloom mobile app</p>
      ) : (
        <p>1. Tap on the button above</p>
      )}
      <p>2. Follow Bloom's instructions</p>
      <BloomParagraph>3. Make sure you have uploaded your ID and address in Bloom</BloomParagraph>
      <p>4. If you have any problem, send email to help@raise.it</p>
    </InstructionsWrapper>
  );
};

export default FollowSteps;
