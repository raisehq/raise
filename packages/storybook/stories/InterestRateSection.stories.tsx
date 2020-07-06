import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { InterestRateSection } from '@raisehq/components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1300px;
  margin: auto;
`;

const data = {
  title: "Don't take our word for it",
  subtitle:
    'Investing in business loans generates higher returns compared to other secure products',
  player_one_number: 1.7,
  player_one_name: 'Cash',
  player_two_number: 3.6,
  player_two_name: 'Emerging Market Debt',
  player_three_number: 7.4,
  player_three_name: 'Global Equity',
  player_four_number: 15,
  player_four_name: 'Raise',
  source_information: 'Russell Investments May 31 2020',
};

storiesOf('InterestRateSection', module).add('InterestRateSection', () => (
  <Wrapper>
    <InterestRateSection data={data} />
  </Wrapper>
));
