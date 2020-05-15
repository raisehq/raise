import * as React from 'react';
import styled from 'styled-components';
import { Icon as RawIcon } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
import { Header } from '@raisehq/components';

const Icon = styled(RawIcon)`
  &&&& {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0;
    font-size: 16px;
    margin-left: 20px;
  }
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  color: #b1b3b9;
  align-items: center;
  width: 300px;
  font-size: 12px;
`;

const BasicLink = ({ to, text, key }) => (
  <a key={key} href={to}>
    {text}
  </a>
);

const FakeButtons = () => (
  <FlexDiv>
    <div>Become a borrower</div>
    <Icon name="tablet" rotated="counterclockwise" />
    <Icon name="user" />
  </FlexDiv>
);

const routeSkeleton = {
  logo: {
    src: 'https://static.herodev.es/images/logo.svg',
    alt: 'Raise logo',
  },
  routes: [
    {
      title: 'Loan of the month',
      path: '/loan-of-month',
      component: BasicLink,
    },
    {
      title: 'Invest with Raise',
      path: '/invest-with-raise',
      component: BasicLink,
    },
    {
      title: 'Blog',
      path: '/blog',
      component: BasicLink,
    },
    {
      title: 'About Us',
      path: '/about',
      component: BasicLink,
    },
  ],
  pageRoutes: [
    {
      title: 'Supported coins',
      path: '/help#coins',
      component: BasicLink,
    },
    {
      title: 'Swap',
      path: '/help#swap',
      component: BasicLink,
    },
    {
      title: 'ROI',
      path: '/help#roi',
      component: BasicLink,
    },
  ],
};

storiesOf('Header', module).add('Header', () => (
  <Header {...routeSkeleton}>
    <FakeButtons />
  </Header>
));
