import React, { useState, useMemo, useContext } from 'react';
import { fromWei } from 'web3-utils';
import { Card } from '@raisehq/components';
import { TokenInput } from '../TokenInput';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import { InvestStateProps } from './types';
import { getCalculations } from '../../utils/loanUtils';
import Amount from '../Dashboard/Dashboard.Amount';

import AppContext from '../AppContext';
import {
  Header,
  ModalInputContainer,
  ModalInputBox,
  InputLabel,
  ConfirmButton,
  InputContainer,
  // Amount,
  FundAllLabel,
  LoanTermsCheckbox,
  CheckContainer
} from './InvestModal.styles';

const InvestState: React.SFC<InvestStateProps> = ({ loan, setStage, setInvestment, ui }) => {
  const { principal, investorCount, maxAmount } = loan;
  const {
    times,
    currentAmount,
    totalAmount,
    expectedROI,
    expectedRoiFormated,
    maxAmount: calcMaxAmount,
    principal: calcPrincipal
  } = getCalculations(loan);

  const {
    store: {
      user: {
        details: { kyc_status }
      }
    }
  }: any = useContext(AppContext);

  const auctionTimeLeft = `${times.auctionTimeLeft} left`;
  const { companyName } = useBorrowerInfo(loan.originator);
  const [value, setValue]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);

  const roi = useMemo(() => value + value * expectedROI, [value, expectedROI]);

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
      <Card size="230px" width="400px">
        <Card.Content>
          <Card.Grid spaceBetween>
            <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
            <Card.TimeLeft>{auctionTimeLeft}</Card.TimeLeft>
          </Card.Grid>
          <Card.Grid spaceBetween>
            <Card.Header
              fontSize="22px"
              title="Raised amount"
              amount={<Amount principal={calcPrincipal} />}
            />
            <Card.Header
              fontSize="22px"
              title="Target"
              amount={<Amount principal={calcMaxAmount} />}
            />
          </Card.Grid>
          <Card.Progress color="#eb3f93" currentAmount={currentAmount} totalAmount={totalAmount} />
          <Card.Grid>
            <Card.Row title="Loan Term" content={times.loanTerm} />
            <Card.Vertical />
            <Card.Row title="Investors" content={investorCount} />
            <Card.Vertical />
            <Card.Row title="Expected ROI" content={expectedRoiFormated} />
          </Card.Grid>
        </Card.Content>
      </Card>
      <CheckContainer>
        <LoanTermsCheckbox id="btn-check-term-condition-invest" onChange={onToggleTerms} />I agree
        to the Terms and Conditions of the Loan Agreement
      </CheckContainer>
      <ConfirmButton
        id="btn-invest-confirm"
        onClick={onConfirm}
        disabled={value === 0 || value === undefined || !termsCond || kyc_status !== 3}
      >
        CONFIRM
      </ConfirmButton>
    </>
  );
};

export default InvestState;
