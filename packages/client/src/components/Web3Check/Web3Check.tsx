import React  from 'react';
import StepDescription from './StepDescription';
import { Web3Card, NoticeHeader } from './Web3Check.styles';
import Web3CheckList from './Web3Checklist';
import { Card, Grid } from 'semantic-ui-react';

const Web3Check = () => (
  <Grid.Row>
    <Web3Card>
      <Card.Content>
        <NoticeHeader>
          Logging you in
        </NoticeHeader>
        <Web3CheckList />
      </Card.Content>
      <StepDescription  />
    </Web3Card>
  </Grid.Row>
)

export default Web3Check;