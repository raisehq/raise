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
  // ContainerGrid
} from './Referral.styles';
import Invite from '../Invite/index';
import Resume from './Referral.Resume';
import InviteBottom from '../InviteBottom/index';
const Referal = () => {
  return (
    <div>
      <Responsive as={Grid} minWidth={1024}>
        <ColumnLeft width={12}>
          <SegmentLeft>
            <TopReferal>
              <Invite />
            </TopReferal>
            <BottomReferal>
              <InviteBottom />
            </BottomReferal>
          </SegmentLeft>
        </ColumnLeft>
        <ColumnRight width={4}>
          <SegmentRight>
            <Resume />
          </SegmentRight>
        </ColumnRight>
      </Responsive>

      <Responsive as={Grid} maxWidth={1024}>
      <ColumnLeft>
        <SegmentLeft>
          <TopReferal>
            <Invite />
          </TopReferal>
          <MidReferral>
            <Resume />
          </MidReferral>
          <BottomReferal>
            <InviteBottom />
          </BottomReferal>
        </SegmentLeft>
      </ColumnLeft>
    </Responsive>
  </div>
  );
};

export default Referal;
