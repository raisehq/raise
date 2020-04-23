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
<<<<<<< HEAD
=======

InstructionStep.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  activeIndex: PropTypes.bool
};

InstructionStep.defaultProps = {
  activeIndex: false
};
>>>>>>> 52d8b11dc2ce8e0a8d8722913c48ea044a7cab2d

export default InstructionStep;
