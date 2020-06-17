import React, { useState } from 'react';
import { GroupButton } from '@raisehq/components';
import { Icon } from 'semantic-ui-react';
import useAsyncEffect from '../../hooks/useAsyncEffect';

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
  IconWrapper,
  Image
} from './styles';
import Step from './Step';

const BenefitsSection = ({ benefitsInvestors, benefitsBorrowers }): any => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [stepsBorrowers, setStepsBorrowers] = useState([]);
  const [stepsInvestors, setStepsInvestors] = useState([]);
  const [mainTitle, setMainTitle] = useState('');
  const [linkText, setLinkText] = useState('');
  const [slides, setSlides] = useState([
    { id: 0, url: '' },
    { id: 1, url: '' }
  ]);
  useAsyncEffect(async () => {
    if (benefitsInvestors && benefitsBorrowers) {
      const {
        main_title,
        step_one,
        step_two,
        step_three,
        text_link_to_app,
        image: image_investor
      } = benefitsInvestors;
      const {
        step_one: step_one_borrower,
        step_two: step_two_borrower,
        step_three: step_three_borrower,
        image: image_borrower
      } = benefitsBorrowers;

      setMainTitle(main_title);
      setLinkText(text_link_to_app);

      setStepsInvestors([
        { number: 1, text: step_one },
        { number: 2, text: step_two },
        { number: 3, text: step_three }
      ]);

      setStepsBorrowers([
        { number: 1, text: step_one_borrower },
        { number: 2, text: step_two_borrower },
        { number: 3, text: step_three_borrower }
      ]);

      setSlides([
        { id: 0, url: image_investor },
        { id: 1, url: image_borrower }
      ]);
    }
  }, [benefitsInvestors, benefitsBorrowers]);

  return (
    <Wrapper>
      <Row>
        <Title>{mainTitle}</Title>
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
        <ImageWrapper>
          <Image src={slides[0].url} alt="11" visible={selectedOption === 1} />
          <Image src={slides[1].url} alt="11" visible={selectedOption !== 1} />
        </ImageWrapper>
        <Column>
          <StepWrapper>
            {stepsInvestors.map((item) => (
              <Step
                number={`0${item.number}`}
                text={item.text}
                key={item.number + 1}
                visible={selectedOption === 1}
              />
            ))}
            {stepsBorrowers.map((item) => (
              <Step
                number={`0${item.number}`}
                text={item.text}
                key={item.number}
                visible={selectedOption !== 1}
              />
            ))}
          </StepWrapper>
          <CheckLoanText href={`${process.env.REACT_APP_HOST_URL}`}>
            <span>{linkText}</span>
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
