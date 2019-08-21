import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Card from './Card.component';

const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  box-sizing: border-box;

  .heroCard {
    margin: 5px;
  }
`;

storiesOf('Card', module)
  .add('Default', () => (
    <Card>
      <Card.Header title="Requested Amount" amount={230000} />
      <Card.Grid>
        <Card.Row title="System fees" content="-3000" />
      </Card.Grid>
    </Card>
  ))
  .add('Flex', () => (
    <Wrapper>
      <Card>
        <Card.Header title="Requested Amount" amount={230000} />
        <Card.Grid>
          <Card.Row title="System fees" content="-3000" />
          <Card.Row title="System fees" content="-3000" />
          <Card.Row title="System fees" content="-3000" />
          <Card.Row title="System fees" content="-3000" />
          <Card.Row title="System fees" content="-3000" />
          <Card.Row title="System fees" content="-3000" />
        </Card.Grid>
        <Card.Graph currentAmount={43} totalAmount={122} />
        <Card.Grid nobottom>
          <Card.Row title="System fees" content="-3000" />
          <Card.Row title="System fees" content="-3000" />
        </Card.Grid>
      </Card>
      <Card>HELLO theres</Card>
      <Card>HELLO theres</Card>
      <Card>HELLO theres</Card>
      <Card>HELLO theres</Card>
      <Card>HELLO theres</Card>
      <Card>HELLO theres</Card>
    </Wrapper>
  ));
