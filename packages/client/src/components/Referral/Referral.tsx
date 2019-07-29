import React from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import {
  TopReferal,
  MidReferral,
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
              <Responsive as={MidReferral} maxWidth={1024}>
                <Resume />
              </Responsive>
              <BottomReferal>
                <InviteBottom />
              </BottomReferal>
            </SegmentLeft>
          </Grid.Row>
        </ColumnLeft>
        <Responsive as={ColumnRight} minWidth={1024} width={4}>
          <SegmentRight >
            <Resume />
          </SegmentRight>
        </Responsive>
      </Grid.Row>
  );
};

export default Referal;
