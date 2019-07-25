import React, { Fragment } from 'react';
import daggy from 'daggy';
import { Loader, Segment, Divider, Image } from 'semantic-ui-react';
import {
  ButtonGreen,
  ButtonRetry,
  CardContent,
  CardSubtitle,
  CardTitle,
  CardCenteredText,
  Amount,
  BlockAmount,
  EquivalencyTitle,
  EquivalencyAmount,
  EquivalencyExtra,
  ImageSized
} from './Deposit.styles';

const AlmostImg = 'https://static.herodev.es/images/img_almost.png';
const ErrorImg = 'https://static.herodev.es/images/img_error.png';
const SuccessImg = 'https://static.herodev.es/images/img_awesome.png';

const UI = daggy.taggedSum('UI', {
  Success: [{}],
  Check: [],
  Deposit: [],
  Waiting: [],
  Error: []
});

const getViewResponse = (ui: any, onDeposit, onContinue, onRetry) =>
  ui.cata({
    Success: () => (
      <Fragment>
        <CardContent>
          <CardCenteredText>
            <CardTitle>Awesome!</CardTitle>
          </CardCenteredText>

          <Image src={SuccessImg} fluid />
        </CardContent>
        <CardContent bottom_spacing={'true'}>
          <ButtonGreen onClick={onContinue}>Take me home</ButtonGreen>
        </CardContent>
      </Fragment>
    ),
    Check: () => (
      <Fragment>
        <CardContent>
          <Loader active inline="centered" />
        </CardContent>
      </Fragment>
    ),
    Deposit: () => (
      <Fragment>
        <CardContent>
          <CardCenteredText>
            <CardTitle>Lender Subscription</CardTitle>
            <CardSubtitle>
              <p>
                To complete your registration and start lending, you will need
                to complete the deposit.
              </p>
              You will be able to unblock this deposit from your account profile
            </CardSubtitle>
          </CardCenteredText>
          <Segment>
            <BlockAmount>
              <Amount> 200 </Amount>
            </BlockAmount>
            <Divider />
            <CardCenteredText>
              <EquivalencyTitle>ETH Equivalency</EquivalencyTitle>
              <EquivalencyAmount>5.40 ETH</EquivalencyAmount>
              <EquivalencyExtra>
                *Based on current exchange rate
              </EquivalencyExtra>
            </CardCenteredText>
          </Segment>
        </CardContent>
        <CardContent bottom_spacing={'true'}>
          <ButtonGreen onClick={onDeposit}>Deposit</ButtonGreen>
        </CardContent>
      </Fragment>
    ),
    Waiting: () => (
      <Fragment>
        <CardContent>
          <CardCenteredText>
            <CardTitle>Almost done</CardTitle>
            <CardSubtitle>
              Approve and accept the deposit in your MetaMask wallet
            </CardSubtitle>
          </CardCenteredText>
          <CardCenteredText>
            <ImageSized src={AlmostImg} />
          </CardCenteredText>
        </CardContent>
        <CardContent bottom_spacing={'true'}>
          <ButtonGreen blocked={'true'} loading>
            Deposit
          </ButtonGreen>
        </CardContent>
      </Fragment>
    ),
    Error: () => (
      <Fragment>
        <CardContent>
          <CardCenteredText>
            <CardTitle>Something went wrong</CardTitle>
            <p />
          </CardCenteredText>
          <CardCenteredText>
            <ImageSized src={ErrorImg} />
          </CardCenteredText>
        </CardContent>
        <CardContent bottom_spacing={'true'}>
          <ButtonRetry onClick={onRetry}>Retry</ButtonRetry>
        </CardContent>
      </Fragment>
    )
  });

export { getViewResponse, UI };
