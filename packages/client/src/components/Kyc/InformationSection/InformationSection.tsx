import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Title, Container } from './styles';
import InstructionStep from './InstructionStep/index';
import { requestPage } from '../../../helpers/butter';
import useAsyncEffect from '../../../hooks/useAsyncEffect';

const InformationSection = ({ title, slug }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [steps, setSteps] = useState([]);

  useAsyncEffect(async () => {
    try {
      const response = await requestPage('kyc_instructions', slug);
      setSteps(response.steps);
    } catch (error) {
      console.log(error);
    }
  }, []);

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

        {steps.map((item: any, index) => (
          <InstructionStep
            key={index}
            activeIndex={activeIndex === 0}
            number={item.step}
            text={item.step_description}
          />
        ))}
      </Accordion>
    </Container>
  );
};

InformationSection.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default InformationSection;
