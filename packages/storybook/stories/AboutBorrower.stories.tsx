import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import AboutBorrower from '@raisehq/components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;

const borrowerInfo = {
  companyDetails: {
    address: '',
    foundationDate: '',
    url: '',
  },
  extraResources: [],
  socialNetworks: [],
  kpis: [],
};

storiesOf('AboutBorrower', module).add('About borrower', () => (
  <Wrapper>
    <AboutBorrower borrowerInfo={borrowerInfo} />
  </Wrapper>
));
