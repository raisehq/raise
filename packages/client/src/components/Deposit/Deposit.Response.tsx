import React, { Fragment } from 'react';
import daggy from 'daggy';
import useImages from '../../hooks/useImages';
import { Loader, Segment, Divider, Image, List } from 'semantic-ui-react';
import {
  ButtonGreen,
  ButtonRetry,
  CardSubtitle,
  CardTitle,
  CardCenteredText,
  Amount,
  LabelPadding,
  LabelPaddingLoader,
  MicroLoader,
  BlockAmount,
  HowToGetHeroToken,
  ImageSized,
  SegmentPadded,
  ListItemPadding,
  IconSuccess
} from './Deposit.styles';
import { CardContent } from '../LayoutV2/Layout.styles';

const UI = daggy.taggedSum('UI', {
  Success: [{}],
  Check: [],
  Deposit: [],
  Waiting: ['steps'],
  Error: []
});

const UISteps = daggy.taggedSum('UISteps', {
  Approve: [],
  Transaction: []
});

const StepNumber = props => {

const getImagesUrl = useImages();

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

const getViewResponse = (ui: any, onDeposit, onContinue, onRetry) =>

  ui.cata({
    Success: () => (
      <Fragment>
        <CardContent>
          <CardCenteredText>
            <CardTitle>Awesome!</CardTitle>
          </CardCenteredText>

          <Image src={`${getImagesUrl}img_awesome.png`} fluid />
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
                In order to access Raise, you will need to complete the
                membership deposit. You will be able to unlock the deposit at
                anytime.
              </p>
            </CardSubtitle>
          </CardCenteredText>
          <Segment>
            <BlockAmount>
              <Amount> 200 </Amount>
            </BlockAmount>
            <Divider />
            <CardCenteredText>
              <HowToGetHeroToken target="_blank" href="https://www.raise.it">
                How to get Hero Tokens
              </HowToGetHeroToken>
            </CardCenteredText>
          </Segment>
        </CardContent>
        <CardContent bottom_spacing={'true'}>
          <ButtonGreen onClick={onDeposit}>Deposit</ButtonGreen>
        </CardContent>
      </Fragment>
    ),
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
            <ImageSized src={`${getImagesUrl}img_error.png`} />
          </CardCenteredText>
        </CardContent>
        <CardContent bottom_spacing={'true'}>
          <ButtonRetry onClick={onRetry}>Retry</ButtonRetry>
        </CardContent>
      </Fragment>
    )
  }, [getImagesUrl]);

export { getViewResponse, UI, UISteps };
