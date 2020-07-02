import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { BenefitsSection } from '@raisehq/components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1300px;
  margin: auto;
`;

const data = [
  {
    main_title: 'Benefits',
    image: 'https://cdn.buttercms.com/kKvWSNpTRar6thqQDs9Q',
    id: 'investors',
    step_one: 'aaaa',
    step_two: 'aaaaa',
    step_three: 'aaaa',
    text_link_to_app: 'Check loan',
    link_to_app: '',
  },
  {
    main_title: 'Benefits',
    image: 'https://cdn.buttercms.com/PfSLk7C0SjyXTUpUzFpL',
    id: 'borrowers',
    step_one: 'bbbb',
    step_two: 'bbbb',
    step_three: 'bbbb',
    text_link_to_app: 'Check loan',
    link_to_app: '',
  },
];

storiesOf('BenefitsSection', module).add('BenefitsSection', () => (
  <Wrapper>
    <BenefitsSection benefits={data} />
  </Wrapper>
));
