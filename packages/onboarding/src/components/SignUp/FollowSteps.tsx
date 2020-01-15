import React from 'react';
import { InstructionsWrapper, FollowingStepsTitle } from '../styles';

const FollowSteps = ({ isMobile }) => {
  return (
    <InstructionsWrapper>
      <FollowingStepsTitle>Follow these steps:</FollowingStepsTitle>
      {!isMobile ? (
        <p>1. Scan QR Code with your Bloom mobile app</p>
      ) : (
        <p>1. Click on the button above</p>
      )}
      <p>2. Follow Bloom's instructions</p>
      <p>3. Make sure to have your Country registered at Bloom</p>
      <p>4. If you have any problem, send email to help@raise.it</p>
    </InstructionsWrapper>
  );
};

export default FollowSteps;
