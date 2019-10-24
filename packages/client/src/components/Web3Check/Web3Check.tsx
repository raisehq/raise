import React from 'react';
import { Grid } from 'semantic-ui-react';
import Description from './Web3Check.Messages';
import { NoticeHeader, CardContent } from './Web3Check.styles';
import Web3CheckList from './Web3Check.List';
import { CardSized } from '../LayoutV2/Layout.styles';

const Web3Check = () => (
  <Grid.Row>
    <CardSized>
      <CardContent>
        <NoticeHeader>Logging you in</NoticeHeader>
        <Web3CheckList />
      </CardContent>
      <Description />
    </CardSized>
  </Grid.Row>
);

export default Web3Check;
