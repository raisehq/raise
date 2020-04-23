import React from 'react';
import { Accordion } from 'semantic-ui-react';
import { NumberWrapper, AccordionRow, AccordionText } from './styles';

const InstructionStep = ({ activeIndex, number, text }) => (
  <Accordion.Content active={activeIndex}>
    <AccordionRow>
      <NumberWrapper>
        <span>{number}</span>
      </NumberWrapper>
      <AccordionText>{text}</AccordionText>
    </AccordionRow>
  </Accordion.Content>
);

export default InstructionStep;
