import React from 'react';
import {
  GettingReady,
  Footer,
  Soon,
  DaysToGoLive
} from './InviteBottom.styles';
import { Grid } from 'semantic-ui-react';

const InviteBottom = () => {
  const SEPTEMBERRELEASEDAY = process.env.SEPTEMBERRELEASEDAY ? process.env.SEPTEMBERRELEASEDAY : "2019-09-30T00:00:00.753Z";
  const oneDay = 1000 * 60 * 60 * 24;
  const DAYSTOGOLIVE = Math.ceil((new Date(SEPTEMBERRELEASEDAY).getTime() - new Date().getTime()) / oneDay);

  return (
      <Footer>
        <Grid.Column width={16}>
          <Grid>
            <Grid.Row>
              <DaysToGoLive>{DAYSTOGOLIVE > 0 ? `${DAYSTOGOLIVE} Days to go live` : `We're live!`}</DaysToGoLive>
            </Grid.Row>
            <Grid.Row>
              <GettingReady as="h1">We are getting ready</GettingReady>
            </Grid.Row>
            <Grid.Row>
              <Soon>
                <p>
                  Soon you will be able to access the market place and start
                  investing in the loans that fit your preferences.
                </p>
                <p>We are working to give you an awesome experience and service,</p>
                <p>See you soon.</p>
                <p>
                  <strong>The Raise Team</strong>
                </p>
              </Soon>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Footer>
  );
};

export default InviteBottom;
