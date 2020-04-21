import React from 'react';
import { Grid, Responsive } from 'semantic-ui-react';
import {
  TopReferal,
  MidReferral,
  BottomReferal,
  SegmentRight,
  // SegmentLeft,
  ColumnRight,
  ColumnLeft
  // ContainerGrid
} from './Referral.styles';
import Invite from '../Invite/index';
import Resume from './Referral.Resume';
import InviteBottom from '../InviteBottom/index';

const Referal = () => (
  <div>
    <Responsive as={Grid} minWidth={1024}>
      <Grid.Row>
        <ColumnLeft width={12}>
          <Grid>
            <TopReferal>
              <Grid.Column>
                <Invite />
              </Grid.Column>
            </TopReferal>
            <BottomReferal>
              <Grid.Column>
                <InviteBottom />
              </Grid.Column>
            </BottomReferal>
          </Grid>
        </ColumnLeft>
        <ColumnRight width={4}>
          <SegmentRight>
            <Resume />
          </SegmentRight>
        </ColumnRight>
      </Grid.Row>
    </Responsive>

    <Responsive as={Grid} maxWidth={1023}>
      <Grid.Row>
        <ColumnLeft>
          <Grid>
            <TopReferal>
              <Grid.Column>
                <Invite />
              </Grid.Column>
            </TopReferal>
            <MidReferral>
              <Grid.Column>
                <Resume />
              </Grid.Column>
            </MidReferral>
            <BottomReferal>
              <Grid.Column>
                <InviteBottom />
              </Grid.Column>
            </BottomReferal>
          </Grid>
        </ColumnLeft>
      </Grid.Row>
    </Responsive>
  </div>
);

export default Referal;
