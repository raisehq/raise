import React, { useState } from 'react';
import { GroupButton } from '@raisehq/components';
import { Icon } from 'semantic-ui-react';

import {
  Wrapper,
  Row,
  Title,
  ImageWrapper,
  StepWrapper,
  SpecialRow,
  ControlWrapper,
  Column,
  CheckLoanText,
  IconWrapper
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
        <Column>
          <StepWrapper>
            {steps.map((item) => (
              <Step number={item.number} text={item.text} key={item.number} />
            ))}
          </StepWrapper>
          <CheckLoanText href={`${process.env.REACT_APP_HOST_URL}`}>
            <span>Check our loan of the month</span>
            <IconWrapper>
              <Icon name="chevron right" />
            </IconWrapper>
          </CheckLoanText>
        </Column>
      </SpecialRow>
    </Wrapper>
  );
};

export default BenefitsSection;
