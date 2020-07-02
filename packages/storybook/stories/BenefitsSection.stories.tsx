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
    step_one:
      'Generate passive income that will give you around 10% annually by investing in our loan offers',
    step_two:
      'Raise connects investors and businesses through smart contracts to deliver a safe and transparent experience',
    step_three:
      'Find opportunities to invest in business loans from anywhere in the world using borderless currencies',
    text_link_to_app: 'Check loan offer',
    link_to_app: 'https://app.raise.it',
  },
  {
    main_title: 'Benefits',
    image: 'https://cdn.buttercms.com/PfSLk7C0SjyXTUpUzFpL',
    id: 'borrowers',
    step_one:
      'Borrow money to grow your business at an interest rate and loan term you choose',
    step_two:
      "You won't be required any collateral. Raise evaluates your repayment capacity based on your business financials",
    step_three:
      'Get a loan in an stablecoin for a period from 1 day to 1 year. Early loan repayment without extra fees and penalties',
    text_link_to_app: 'Become a borrower',
    link_to_app: 'https://borrow.raise.it',
  },
];

storiesOf('BenefitsSection', module).add('BenefitsSection', () => (
  <Wrapper>
    <BenefitsSection benefits={data} />
  </Wrapper>
));
