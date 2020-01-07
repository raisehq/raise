import React, { Fragment } from 'react';
import daggy from 'daggy';
import { Loader, Segment, Divider, Image, Grid, List, Button } from 'semantic-ui-react';
import { StyledAddress as Web3Address } from './Deposit.styles';
import {
  ButtonGreen,
  ButtonRetry,
  CardSubtitle,
  CardTitle,
  CardCenteredText,
  LabelPadding,
  LabelPaddingLoader,
  MicroLoader,
  HowToGetHeroToken,
  ImageSized,
  SegmentPadded,
  ListItemPadding,
  IconSuccess
  //Error
} from './Deposit.styles';
import { CardContent } from '../Layout/Layout.styles';
import UniswapEmbedded from '../UniswapEmbedded';
import { IMAGES_PATH } from '../../commons/constants';

const uniswapUrl = "https://uniswap.exchange/swap?theme=light?exactField=output?exactAmount=200?inputCurrency=0x6B175474E89094C44Da98b954EedeAC495271d0F?outputCurrency=0x10bA8C420e912bF07BEdaC03Aa6908720db04e0c"

const UI = daggy.taggedSum('UI', {
  Success: [{}],
  Check: [],
  GetRaiseInfo: [],
  GetRaise: [],
  Deposit: [],
  Waiting: ['steps'],
  Error: []
});

const UISteps = daggy.taggedSum('UISteps', {
  Approve: [],
  Transaction: []
});

const StepNumber = props => {
  switch (props.type) {
    case 'success':
      return (
        <LabelPaddingLoader circular color={'green'}>
          <IconSuccess name="check" />
        </LabelPaddingLoader>
      );
    case 'loading':
      return (
        <LabelPaddingLoader circular color="grey" key="black-01">
          <MicroLoader active inverted />
        </LabelPaddingLoader>
      );
    default:
      return (
        <LabelPadding circular color="black" key="black-02">
          {props.number}
        </LabelPadding>
      );
  }
};

const getViewResponse = (ui: any, raiseBalance, expectedPrice, onDeposit, onContinue, onRetry, onGetRaise, onToDeposit, onGetRaiseInfo) => {
  const haveRaise = raiseBalance > 0;
  return ui.cata({
    Success: () => (
      <Fragment>
        <CardContent>
          <CardCenteredText>
            <CardTitle>Awesome!</CardTitle>
          </CardCenteredText>

          <Image src={`${IMAGES_PATH}img_awesome.png`} fluid />
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
    GetRaiseInfo: () => (
      <Fragment>
        <CardContent>
          <CardCenteredText>
            <CardTitle>You need Raise Tokens to complete your membership</CardTitle>
            <CardSubtitle>
              <p>
                In order to become a Raise member, you will need to complete a deposit. You will
                be able to unlock the deposit at anytime.
              </p>
            </CardSubtitle>
            <Web3Address />
          </CardCenteredText>
          <Segment>
            <Grid spaceBetween verticalAlign='middle'>
              <h6>Raise token</h6>
              <h6>200</h6>
            </Grid>
            <Divider />
            <Grid spaceBetween verticalAlign='middle'>
              <div>Amount in USD</div>
              <div>USD {expectedPrice} approx</div>
            </Grid>
          </Segment>
        </CardContent>
        <CardContent>
          <ButtonGreen onClick={onGetRaise}>Get Raise Tokens with Uniswap</ButtonGreen>
          <HowToGetHeroToken target="_blank" href="https://www.raise.it/help">
            Why do I need Raise Tokens?
          </HowToGetHeroToken>
          <HowToGetHeroToken target="_blank" href="https://www.raise.it/help">
            Do it later
          </HowToGetHeroToken>
        </CardContent>
      </Fragment>
    ),
    GetRaise: () => (
        <CardContent>
          <CardCenteredText>
            <CardTitle>Get Raise Tokens with Uniswap</CardTitle>
          </CardCenteredText>
          <UniswapEmbedded iframeUrl={uniswapUrl} />
          <Button onClick={onRetry}>Go back</Button>
        </CardContent>
    ),
    Deposit: () => {
      return (
        <Fragment>
          <CardContent>
            <CardCenteredText>
              <CardTitle>You need Raise Tokens to complete your membership</CardTitle>
              <CardSubtitle>
                <p>
                  In order to become a Raise member, you will need to complete a deposit. You will
                  be able to unlock the deposit at anytime.
              </p>
              </CardSubtitle>
              <Web3Address />
            </CardCenteredText>
            <Segment>
              <Grid spaceBetween>
                <h6>Raise token</h6>
                <b>200</b>
              </Grid>
              <Divider />
              <Grid spaceBetween>
                <h6>Amount in USD</h6>
                <b>{expectedPrice}</b>
              </Grid>
              <CardCenteredText>

              </CardCenteredText>
            </Segment>
          </CardContent>
          <CardContent>
            <ButtonGreen disabled={!haveRaise} onClick={onDeposit}>Deposit</ButtonGreen>
            <HowToGetHeroToken target="_blank" href="https://www.raise.it/help">
              Why do I need Raise Tokens?
          </HowToGetHeroToken>
          </CardContent>
        </Fragment>
      )
    },
    Waiting: steps => (
      <Fragment>
        <CardContent>
          <CardCenteredText>
            <CardTitle>Processing deposit </CardTitle>
            <CardSubtitle>Check your MetaMask wallet to proceed</CardSubtitle>
          </CardCenteredText>
          <CardCenteredText>
            <SegmentPadded textAlign="left">
              {steps.cata({
                Approve: () => (
                  <List>
                    <ListItemPadding>
                      <StepNumber type="loading" />
                      Approve deposit
                    </ListItemPadding>
                    <ListItemPadding>
                      <StepNumber number={2} />
                      Transaction completed
                    </ListItemPadding>
                  </List>
                ),
                Transaction: () => (
                  <List>
                    <ListItemPadding>
                      <StepNumber type="success" />
                      Approve deposit
                    </ListItemPadding>
                    <ListItemPadding>
                      <StepNumber type="loading" />
                      Transaction completed
                    </ListItemPadding>
                  </List>
                )
              })}
            </SegmentPadded>
          </CardCenteredText>
        </CardContent>
        <CardContent bottom_spacing={'true'} />
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
            <ImageSized src={`${IMAGES_PATH}img_error.png`} />
          </CardCenteredText>
        </CardContent>
        <CardContent bottom_spacing={'true'}>
          <ButtonRetry onClick={onRetry}>Retry</ButtonRetry>
        </CardContent>
      </Fragment>
    )
  });
}

export { getViewResponse, UI, UISteps };
