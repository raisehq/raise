import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { fromWei } from 'web3-utils';
import { Card } from '@raisehq/components';
import { TokenInput } from '../TokenInput';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import { InvestStateProps } from './types';
import { getCalculations } from '../../utils/loanUtils';
import Amount from '../Dashboard/Dashboard.Amount';
import { useRootContext } from '../../contexts/RootContext';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';

import {
  Header,
  ModalInputContainer,
  ModalInputBox,
  InputLabel,
  ConfirmButton,
  InputContainer,
  // Amount,
  // FundAllLabel,
  LoanTermsCheckbox,
  CheckContainer,
  InvestorBalance
} from './InvestModal.styles';

const errorMessages = {
  inputGreaterThanBalance: 'Not enough balance.',
  inputGreaterThanLoanAmount: 'Invest less than target.'
};

const ErrorBox = styled.div`
  width: 100%;
  min-height: 30px;
  color: red;
  display: block;
  content: '';
  margin-top: 8px;
`;

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

  const tagManager = useGoogleTagManager('Loan');

  const {
    store: {
      user: {
        details: { kyc_status }
      },
      dai: { balance }
    }
  }: any = useRootContext();
  const nMaxAmount = Number(fromWei(maxAmount));
  const auctionTimeLeft = `${times.auctionTimeLeft} left`;
  const { companyName } = useBorrowerInfo(loan.originator);
  const [value, setValue]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);

  const roi = useMemo(() => value + value * expectedROI, [value, expectedROI]);

  const fundAll = () => {
    const nPrincipal = nMaxAmount - Number(fromWei(principal));
    const minValue = Math.min(...[balance, nPrincipal]);
    setValue(minValue);
  };

  const onConfirm = async () => {
    tagManager.sendEvent(TMEvents.Submit, 'invest_attempt', loan.id);
    if (window.fbq) {
      window.fbq('trackCustom', 'invest_attempt', {
        type: loan.id
      });
    }
    setInvestment(value);
    setStage(ui.Processing);
  };

  const [termsCond, setTermsCond] = useState(false);

  const onToggleTerms = () => {
    const toggleTerms = !termsCond;
    setTermsCond(toggleTerms);
  };

  const errorMessage = () => {
    if (value && value > balance) {
      return errorMessages.inputGreaterThanBalance;
    }
    if (value && value > nMaxAmount) {
      return errorMessages.inputGreaterThanLoanAmount;
    }
    return null;
  };

  const onSetValue = v => {
    if (v < 0) {
      return setValue(0);
    }
    return setValue(v);
  };

  return (
    <>
      <Header>How much would you like to invest?</Header>
      <InvestorBalance id="btn-invest-all" onClick={fundAll} />
      <ModalInputContainer>
        <InputContainer>
          <InputLabel>Investment</InputLabel>
          <ModalInputBox error={value !== undefined && (value > balance || value > nMaxAmount)}>
            <TokenInput id="input-invest-value" value={value} onValueChange={onSetValue} />
          </ModalInputBox>
          <ErrorBox>
            {errorMessage()}
            &nbsp;
          </ErrorBox>
        </InputContainer>
        <InputContainer>
          <InputLabel>Expected ROI</InputLabel>
          <ModalInputBox roi>
            <TokenInput value={roi} decimalScale={4} displayType="text" />
          </ModalInputBox>
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
        disabled={
          value === 0 ||
          value === undefined ||
          !termsCond ||
          value > balance ||
          value > nMaxAmount ||
          kyc_status !== 3
        }
      >
        CONFIRM
      </ConfirmButton>
    </>
  );
};

export default InvestState;
