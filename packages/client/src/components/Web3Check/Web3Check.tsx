import React from 'react';
import StepDescription from './StepDescription';
import { NoticeHeader, CardContent } from './Web3Check.styles';
import Web3CheckList from './Web3Checklist';
import { Grid } from 'semantic-ui-react';
import { CardSized } from '../LayoutV2/Layout.styles';
const Web3Check = () => (
  <Grid.Row>
    <CardSized>
      <CardContent>
        <NoticeHeader>Logging you in</NoticeHeader>
        <Web3CheckList />
      </CardContent>
      <StepDescription />
    </CardSized>
  </Grid.Row>
);

export default Web3Check;
