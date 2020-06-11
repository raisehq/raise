import React, { useState } from 'react';
import { GroupButton } from '@raisehq/components';
import {
  Wrapper,
  Row,
  Title,
  ImageWrapper,
  StepWrapper,
  SpecialRow,
  ControlWrapper
} from './styles';
import Step from './Step';

const BenefitsSection = () => {
  const [selectedOption, setSelectedOption] = useState('1');
  const steps = [
    {
      number: '01',
      text: 'The following demo shows a very simple layout with Flexbox thanks to the flex property'
    },
    {
      number: '02',
      text: 'The following demo shows a very simple layout with Flexbox thanks to the flex property'
    },
    {
      number: '03',
      text: 'The following demo shows a very simple layout with Flexbox thanks to the flex property'
    }
  ];
  return (
    <Wrapper>
      <Row>
        <Title>Benefits</Title>
      </Row>
      <Row>
        <ControlWrapper>
          <GroupButton
            options={[
              { key: '1', value: 1, text: 'Investors' },
              { key: '2', value: 2, text: 'Borrowers' }
            ]}
            onClick={setSelectedOption}
            selectedIndex={selectedOption}
          />
        </ControlWrapper>
      </Row>
      <SpecialRow>
        <ImageWrapper />
        <StepWrapper>
          {steps.map((item, index) => (
            <Step number={item.number} text={item.text} key={index} />
          ))}
        </StepWrapper>
      </SpecialRow>
    </Wrapper>
  );
};

export default BenefitsSection;
