import React from 'react';
import { VerifyButton } from '../KycTopBanner.styles';

// eslint-disable-next-line
export const StepButton = props => <VerifyButton {...props}>{props.children}</VerifyButton>;
export default StepButton;
