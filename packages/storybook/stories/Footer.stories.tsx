import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Footer } from '@raisehq/components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
storiesOf('Footer', module)
  .add('Footer desktop', () => (
    <Wrapper>
      <Footer isMobile={false} />
    </Wrapper>
  ))
  .add('Footer mobile', () => (
    <Wrapper>
      <Footer isMobile />
    </Wrapper>
  ));
