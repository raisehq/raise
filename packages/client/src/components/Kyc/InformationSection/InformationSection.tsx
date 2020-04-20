import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { Title, Container } from './styles';
import InstructionStep from './InstructionStep/index';

const InformationSection = ({ title, steps }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Container>
      <Accordion>
        <Title active={activeIndex === 0} index={0} onClick={handleClick}>
          <Icon name={activeIndex ? 'plus' : 'minus'} />
          <span>{title}</span>
        </Title>

        {steps.map((item, index) => (
          <InstructionStep
            activeIndex={activeIndex === 0}
            number={index + 1}
            text={
              'Click to verify with Sum&Sub. You won’t be asked to create an account or to download anything. You will stay inside Raise app'
            }
          />
        ))}
      </Accordion>
    </Container>
  );
};

export default InformationSection;
