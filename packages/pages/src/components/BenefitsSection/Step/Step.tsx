import React from 'react';

import { StepWrapper, Number, Text } from './styles';

const Step = ({ number, text }: any) => {
  return (
    <StepWrapper>
      <Number>{number}</Number>
      <Text>{text}</Text>
    </StepWrapper>
  );
};

export default Step;
