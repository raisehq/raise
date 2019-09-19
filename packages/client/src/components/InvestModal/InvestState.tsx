import React, { useState, useMemo } from 'react';
import { fromWei } from 'web3-utils';
import { Card } from '@raisehq/components';
import { TokenInput } from '../TokenInput';
import numeral from '../../commons/numeral';
import Coin from '../Coin';
import { ResumeItemProps, RaisedAmountProps, InvestStateProps } from './types';
import { getCalculations } from '../../utils/loanUtils';
import {
  Header,
  ModalInputContainer,
  ModalInputBox,
  InputLabel,
  InvestResume,
  RaisedAmountBox,
  FlexSpacedLayout,
  ResumeItemBox,
  ConfirmButton,
  InputContainer,
  RaisedAmountContent,
  Amount,
  FundAllLabel,
  LoanTermsCheckbox,
  CheckContainer
} from './InvestModal.styles';

const ResumeItem: React.SFC<ResumeItemProps> = ({ title, value }) => (
  <ResumeItemBox>
    <p>{value}</p>
    <p>{title}</p>
  </ResumeItemBox>
);

const RaisedAmount: React.SFC<RaisedAmountProps> = ({ value }) => (
  <RaisedAmountBox>
    <p>Raised Amount</p>
    <RaisedAmountContent>
      <Amount>{numeral(value).format()}</Amount>
      <Coin src={`${process.env.REACT_APP_HOST_IMAGES}/images/ico_dai.svg`} name="DAI" />
    </RaisedAmountContent>
  </RaisedAmountBox>
);

const InvestState: React.SFC<InvestStateProps> = ({ loan, setStage, setInvestment, ui }) => {
  const { principal, investorCount, maxAmount } = loan;
  const { times, currentAmount, totalAmount, currentAPR, expectedROI } = getCalculations(loan);
  const [value, setValue]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);

  const roi = useMemo(() => value + value * expectedROI, [value, expectedROI]);

  const { raised, targetAmount } = useMemo(
    () => ({
      raised: principal ? fromWei(principal) : 0,
      targetAmount: maxAmount ? numeral(fromWei(maxAmount)).format() : 0
    }),
    [principal, maxAmount]
  );

  const fundAll = () => {
    setValue(Number(fromWei(maxAmount)) - Number(fromWei(principal)));
  };

  const onConfirm = async () => {
    setInvestment(value);
    setStage(ui.Processing);
  };

  const [termsCond, setTermsCond] = useState(false);

  const onToggleTerms = () => {
    const toggleTerms = !termsCond;
    setTermsCond(toggleTerms);
  };

  return (
    <>
      <Header>How much would you like to invest?</Header>
      <ModalInputContainer>
        <InputContainer>
          <ModalInputBox>
            <TokenInput id="input-invest-value" value={value} onValueChange={setValue} />
          </ModalInputBox>
          <FundAllLabel id="btn-invest-all" green onClick={fundAll}>
            Fund all
          </FundAllLabel>
        </InputContainer>
        <InputContainer>
          <ModalInputBox roi>
            <TokenInput value={roi} decimalScale={4} displayType="text" />
          </ModalInputBox>
          <InputLabel>Expected ROI</InputLabel>
        </InputContainer>
      </ModalInputContainer>
      <InvestResume>
        <RaisedAmount value={raised} />
        <Card.Graph color="#eb3f93" currentAmount={currentAmount} totalAmount={totalAmount} />
        <FlexSpacedLayout>
          <ResumeItem title="Target Amount" value={`${targetAmount} DAI`} />
          <ResumeItem title="Investors" value={`${investorCount}`} />
          <ResumeItem title="Time left" value={`${times.auctionTimeLeft}`} />
          <Card.Separator />
          <ResumeItem title="Borrower" value="Company A" />
          <ResumeItem title="Loan Term" value={`${times.loanTerm}`} />
          <ResumeItem title="Min APR" value={`${currentAPR}`} />
        </FlexSpacedLayout>
      </InvestResume>
      <CheckContainer>
        <LoanTermsCheckbox onChange={onToggleTerms} />I agree to the Terms and Conditions of the
        Loan Agreement
      </CheckContainer>
      <ConfirmButton
        id="btn-invest-confirm"
        onClick={onConfirm}
        disabled={value === 0 || value === undefined || !termsCond}
      >
        CONFIRM
      </ConfirmButton>
    </>
  );
};

export default InvestState;
