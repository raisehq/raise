import React, { useState, useMemo } from 'react';
import { fromWei } from 'web3-utils';
import { Card } from '@raisehq/components';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import useMetamask from '../../hooks/useMetaMask';
import { TokenInput } from '../TokenInput';
import numeral from '../CreateLoan/numeral';
import { ResumeItemProps, RaisedAmountProps, InvestStateProps } from './types';
import useCalc from '../Dashboard/Dashboard.useCalc';
import {
  Header,
  ModalInputContainer,
  ModalInputBox,
  InputLabel,
  InvestResume,
  RaisedAmountBox,
  FlexSpacedLayout,
  ResumeItemBox,
  ProgressLayout,
  AuctionProgress,
  Percentage,
  ConfirmButton
} from './InvestModal.styles';
// import { AppContext } from '../App';

const ResumeItem: React.SFC<ResumeItemProps> = ({ title, value }) => (
  <ResumeItemBox>
    <p>{value}</p>
    <p>{title}</p>
  </ResumeItemBox>
);

const RaisedAmount: React.SFC<RaisedAmountProps> = ({ value }) => (
  <RaisedAmountBox>
    <p>Raised Amount</p>
    <TokenInput value={value} displayType="text" />
  </RaisedAmountBox>
);

const InvestState: React.SFC<InvestStateProps> = ({ loan, setStage, setInvestment, ui }) => {
  const {
    id: loanAddress,
    principal,
    investorCount,
    maxAmount
  } = loan;
  const { times } = useCalc(loan);
  const metamask = useMetamask();

  const [value, setValue]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);
  const [interest, setInterest]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);

  useAsyncEffect(async () => {
    if (metamask && loanAddress) {
      try {
        const loanContract = await metamask.addContractByAddress(
          'LoanContract',
          loanAddress
        );
        const loanInterest = await loanContract.methods
          .getInterestRate()
          .call();
        setInterest(Number(loanInterest) / 1000);
      } catch (error) {
        console.error(error);
      }
    }
  }, [metamask, loanAddress]);

  const roi = useMemo(() => value + (value * interest) / 100, [
    value,
    interest
  ]);
  const { raised, targetAmount, raisedPercentage } = useMemo(
    () => ({
      raised: principal ? fromWei(principal) : 0,
      targetAmount: maxAmount ? numeral(fromWei(maxAmount)).format() : 0,
      raisedPercentage:
        principal && maxAmount
          ? (Number(fromWei(principal)) * 100) / Number(fromWei(maxAmount))
          : 0
    }),
    [principal, maxAmount]
  );

  const fundAll = () => {
    setValue(Number(fromWei(maxAmount)) - Number(fromWei(principal)));
  };

  const onConfirm = async () => {
    setInvestment(value)
    setStage(ui.Processing);
  };


  return (
    <>
      <Header>How much would you like to invest?</Header>
      <ModalInputContainer>
        <div>
          <ModalInputBox>
            <TokenInput
              value={value}
              onValueChange={setValue}
            />
          </ModalInputBox>
          <InputLabel green onClick={fundAll}>
            Fund all
          </InputLabel>
        </div>
        <div>
          <ModalInputBox roi>
            <TokenInput value={roi} decimalScale={4} displayType="text" />
          </ModalInputBox>
          <InputLabel>Expected ROI</InputLabel>
        </div>
      </ModalInputContainer>
      <InvestResume>
        <RaisedAmount value={raised} />
        <ProgressLayout>
          <AuctionProgress active percent={raisedPercentage} />
          <Percentage>{raisedPercentage} %</Percentage>
        </ProgressLayout>
        <FlexSpacedLayout>
          <ResumeItem title="Target Amount" value={`${targetAmount} DAI`} />
          <ResumeItem title="Investors" value={`${investorCount}`} />
          <ResumeItem title="Time left" value={`${times.auctionTimeLeft}`} />
          <Card.Separator />
          <ResumeItem title="Borrower" value="Company A" />
          <ResumeItem title="Loan Term" value={`${times.loanTerm}`} />
          <ResumeItem title="Min APR" value={`${interest} %`} />
        </FlexSpacedLayout>
      </InvestResume>
      <ConfirmButton onClick={onConfirm}>CONFIRM</ConfirmButton>
    </>
  );
};

export default InvestState;
