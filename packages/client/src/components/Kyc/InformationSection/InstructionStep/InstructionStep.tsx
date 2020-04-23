import React from 'react';
import { Accordion } from 'semantic-ui-react';
import PropTypes from 'prop-types';

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

InstructionStep.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  activeIndex: PropTypes.bool
};

InstructionStep.defaultProps = {
  activeIndex: false
};

export default InstructionStep;
