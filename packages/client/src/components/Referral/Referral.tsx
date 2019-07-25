import React from 'react';
import { Grid } from 'semantic-ui-react';
import {
  TopReferal,
  BottomReferal,
  SegmentRight,
  SegmentLeft,
  ColumnRight,
  ColumnLeft,
} from './Referral.styles';
import Invite from '../Invite/index';
import Resume from './Referral.Resume';
import InviteBottom from '../InviteBottom/index';
const Referal = () => {
  
  return (
    <Grid.Row>
      <ColumnLeft width={12}>
        <Grid.Row>
          <SegmentLeft>
            <TopReferal>
              <Invite />
            </TopReferal>
            <BottomReferal>
              <InviteBottom />
            </BottomReferal>
          </SegmentLeft>
        </Grid.Row>
      </ColumnLeft>
      <ColumnRight width={4}>
        <SegmentRight>
          <Resume />
        </SegmentRight>
      </ColumnRight>
    </Grid.Row>
  );
};

export default Referal;
