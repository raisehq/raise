import React, { useContext, useMemo } from 'react';
import { match, ANY } from 'pampy';
import { List, Grid } from 'semantic-ui-react';
import { RepayLoanContext } from '../RepayLoan.context';
import { getCalculations } from '../../../utils/loanUtils';
import {
  Header,
  LabelPaddingLoader,
  IconSuccess,
  MicroLoader,
  LabelPadding,
  ListItemPadding,
  Explanation,
  Action,
  IconSuccess as IconError
} from '../../InvestModal/InvestModal.styles';
import useGetCoin from '../../../hooks/useGetCoin';

const PassDOM = (
  <LabelPaddingLoader circular color="#00DA9E">
    <IconSuccess name="check" />
  </LabelPaddingLoader>
);
const ErrorDOM = (
  <LabelPaddingLoader circular color="red">
    <IconError name="close" />
  </LabelPaddingLoader>
);
const PendingDOM = (
  <LabelPaddingLoader circular color="#00DA9E">
    <MicroLoader active inverted />
  </LabelPaddingLoader>
);
const AnyDOM = number => (
  <LabelPadding circular color="#00DA9E">
    {number}
  </LabelPadding>
);

const stepNumber = (step, pass, errors) =>
  match(
    [step, pass, !!errors],
    [1, true, ANY],
    () => PassDOM,
    [1, false, true],
    () => ErrorDOM,
    [2, true, true],
    () => ErrorDOM,
    [1, false, false],
    () => PendingDOM,
    [2, true, false],
    () => PendingDOM,
    ANY,
    () => AnyDOM(step)
  );

const Processing = () => {
  const { approved, error, loan }: any = useContext(RepayLoanContext);
  const coin = useGetCoin(loan);

  const { borrowerDebt }: any = useMemo(() => getCalculations(loan, coin.decimals), []);
  const ApprovalIcon = useMemo(() => stepNumber(1, approved, error), [approved, error]);
  const RepayIcon = useMemo(() => stepNumber(2, approved, error), [approved, error]);
  return (
    <>
      <Header>Repay Loan</Header>

      <List>
        <ListItemPadding>
          <Grid columns={2}>
            <Grid.Column width={2}>{ApprovalIcon}</Grid.Column>
            <Grid.Column width={14}>
              <Action>Allow Raise to interact with your wallet</Action>
              <Explanation>This is required so your wallet can interact with us</Explanation>
            </Grid.Column>
          </Grid>
        </ListItemPadding>
        <ListItemPadding>
          <Grid columns={2}>
            <Grid.Column width={2}>{RepayIcon}</Grid.Column>
            <Grid.Column width={14}>
              <Action>Confirm the transaction</Action>
              <Explanation>
                {`${borrowerDebt} ${coin.text} will be transferred from your wallet to the loan`}
              </Explanation>
            </Grid.Column>
          </Grid>
        </ListItemPadding>
      </List>
    </>
  );
};

export default Processing;
