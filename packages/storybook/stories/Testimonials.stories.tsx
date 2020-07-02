import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Testimonials } from '@raisehq/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1300px;
  margin: auto;
`;

const dataOneInvestor = [
  {
    testimonial_name: 'Pol Sendra',
    testimonial_description:
      'What I especially liked about Raise is the kind of projects they select – serving a good cause, and of course the tempting APRs offered.',
    title: 'Join our smart investors',
    testimonial_image: 'https://cdn.buttercms.com/VSKZcBZKSHqd2Av1HfmM',
  },
];

const dataThreeInvestor = [
  {
    testimonial_name: 'Pol Sendra',
    testimonial_description:
      'What I especially liked about Raise is the kind of projects they select – serving a good cause, and of course the tempting APRs offered.',
    testimonial_image: '',
    title: 'Join our smart investors',
  },
  {
    testimonial_name: 'Pol Sendra',
    testimonial_description:
      'What I especially liked about Raise is the kind of projects they select – serving a good cause, and of course the tempting APRs offered.',
    testimonial_image: '',
    title: 'Join our smart investors',
  },
  {
    testimonial_name: 'Pol Sendra',
    testimonial_description:
      'What I especially liked about Raise is the kind of projects they select – serving a good cause, and of course the tempting APRs offered.',
    testimonial_image: '',
    title: 'Join our smart investors',
  },
];

storiesOf('Testimonials', module).add('With three investors', () => (
  <Wrapper>
    <Testimonials data={dataThreeInvestor} title={dataThreeInvestor.title} />
  </Wrapper>
));

storiesOf('Testimonials', module).add('With one investor', () => (
  <Wrapper>
    <Testimonials data={dataOneInvestor} title={dataOneInvestor.title} />
  </Wrapper>
));
