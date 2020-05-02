import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Title, Container, Wrapper } from './styles';
import InstructionStep from './InstructionStep/index';
import { requestPage } from '../../../helpers/butter';
import useAsyncEffect from '../../../hooks/useAsyncEffect';

const InformationSection = ({ title, slug, insideMethod = false }) => {
  const [activeIndex, setActiveIndex] = useState(insideMethod ? 0 : -1);
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
      <Wrapper>
        <Accordion>
          <Title active={activeIndex === 0} index={0} onClick={handleClick}>
            <Icon name={activeIndex ? 'plus' : 'minus'} />
            <div>
              <span>{title}</span>
            </div>
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
      </Wrapper>
    </Container>
  );
};

InformationSection.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default InformationSection;
