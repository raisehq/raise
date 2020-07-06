import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import find from 'lodash/find';
import { useTransition, animated } from 'react-spring';
import GroupButton from '../commons/ButtonControl/GroupButton';
import {
  Wrapper,
  Row,
  Title,
  ImageWrapper,
  StepWrapper,
  ControlWrapper,
  Column,
  CheckLoanWrapper,
  CheckLoanText,
  IconWrapper
} from './styles';
import Step from './Step';

const BenefitsSection = ({ benefits }) => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [stepsBorrowers, setStepsBorrowers] = useState<any>([]);
  const [stepsInvestors, setStepsInvestors] = useState<any>([]);
  const [mainTitle, setMainTitle] = useState('');
  const [linkTextInvestors, setLinkTextInvestors] = useState('');
  const [linkTextBorrowers, setLinkTextBorrowers] = useState('');
  const [linkToAppInvestors, setLinkToAppInvestors] = useState('');
  const [linkToAppBorrowers, setLinkToAppBorrowers] = useState('');
  const [slides, setSlides] = useState([
    { id: 0, url: '' },
    { id: 1, url: '' }
  ]);

  const transitions = useTransition(slides[selectedOption - 1], (item) => item.id, {
    unique: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  useEffect(() => {
    const {
      main_title,
      step_one,
      step_two,
      step_three,
      text_link_to_app: linkInvestors,
      image: image_investor,
      link_to_app: link_to_app_investors
    } = find(benefits, (role) => role.id === 'investors');
    const {
      step_one: step_one_borrower,
      step_two: step_two_borrower,
      step_three: step_three_borrower,
      text_link_to_app: linkBorrowers,
      image: image_borrower,
      link_to_app: link_to_app_borrowers
    } = find(benefits, (role) => role.id === 'borrowers');

    setMainTitle(main_title);
    setLinkTextInvestors(linkInvestors);
    setLinkTextBorrowers(linkBorrowers);
    setLinkToAppInvestors(link_to_app_investors);
    setLinkToAppBorrowers(link_to_app_borrowers);

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
  }, [benefits]);

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
      <Row>
        <Column>
          <ImageWrapper>
            {transitions.map(({ item, props, key }) => (
              <animated.div
                key={key}
                style={{
                  ...props,
                  backgroundImage: item.url
                }}
              >
                <img src={item.url} alt={selectedOption === 1 ? 'investors' : 'borrowers'} />
              </animated.div>
            ))}
          </ImageWrapper>
        </Column>
        <Column>
          <StepWrapper>
            {selectedOption === 1
              ? stepsInvestors.map((item) => (
                  <Step number={`0${item.number}`} text={item.text} key={item.number + 1} />
                ))
              : stepsBorrowers.map((item) => (
                  <Step number={`0${item.number}`} text={item.text} key={item.number} />
                ))}
          </StepWrapper>
          <CheckLoanWrapper>
            <CheckLoanText
              href={`${selectedOption === 1 ? linkToAppInvestors : linkToAppBorrowers}`}
            >
              <span>{selectedOption === 1 ? linkTextInvestors : linkTextBorrowers}</span>
              <IconWrapper>
                <Icon name="chevron right" />
              </IconWrapper>
            </CheckLoanText>
          </CheckLoanWrapper>
        </Column>
      </Row>
    </Wrapper>
  );
};

export default BenefitsSection;
