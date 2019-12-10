import React from 'react';
import { VerifyButton as VerifyBtn } from '../KycTopBanner.styles'
import { RightArrow } from './index';

export const VerifyButton = (props) => (
  <VerifyBtn {...props} >
    <div>Verify Account</div>
    <RightArrow />
  </VerifyBtn>
)

