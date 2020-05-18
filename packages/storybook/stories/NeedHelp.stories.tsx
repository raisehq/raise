import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { NeedHelp } from '@raisehq/components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;

storiesOf('NeedHelp', module).add('Need help section', () => (
  <Wrapper>
    <NeedHelp />
  </Wrapper>
));
