import React, { useState } from 'react';
import { GroupButton } from '@raisehq/components';
import { Icon } from 'semantic-ui-react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { getCollection } from '../../helpers/butter';
import { useTransition, animated } from 'react-spring';

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
  const [selectedOption, setSelectedOption] = useState(1);
  const [steps, setSteps] = useState([]);
  const [mainTitle, setMainTitle] = useState('');
  const [linkText, setLinkText] = useState('');
  const [slides, setSlides] = useState([
    { id: 0, url: 'https://cdn.buttercms.com/C7NJSSXVQq22DqSwrBZA' },
    { id: 1, url: 'https://cdn.buttercms.com/tXCBL3pkSBKe5pCUDeI6' }
  ]);

  const transitions = useTransition(slides[selectedOption - 1], (item) => item.id, {
    unique: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  useAsyncEffect(async () => {
    const benefits_section = await getCollection('benefits_section', {});

    const {
      main_title,
      step_one,
      step_two,
      step_three,
      text_link_to_app
    } = benefits_section.splice(0, 1)[0];
    setMainTitle(main_title);
    setLinkText(text_link_to_app);
    setSteps([
      { number: 1, text: step_one },
      { number: 2, text: step_two },
      { number: 3, text: step_three }
    ]);
    setSlides([
      { id: 0, url: 'https://cdn.buttercms.com/C7NJSSXVQq22DqSwrBZA' },
      { id: 1, url: 'https://cdn.buttercms.com/tXCBL3pkSBKe5pCUDeI6' }
    ]);
  }, []);

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
          {transitions.map(({ item, props, key }) => (
            <animated.div
              key={key}
              style={{
                ...props,
                backgroundImage: item.url
              }}
            >
              <img src={item.url} alt="11" />
            </animated.div>
          ))}
        </ImageWrapper>
        <Column>
          <StepWrapper>
            {steps.map((item) => (
              <Step number={`0${item.number}`} text={item.text} key={item.number} />
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
