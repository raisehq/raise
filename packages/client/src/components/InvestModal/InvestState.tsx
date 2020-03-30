import React, { useState, useMemo } from 'react';
import BN from 'bn.js';
import styled from 'styled-components';
import { fromWei } from 'web3-utils';
import { InvestStateProps } from './types';
import { getCalculations } from '../../utils/loanUtils';
import { useRootContext } from '../../contexts/RootContext';
//import { useAppContext } from '../../contexts/AppContext';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import useGetCoin from '../../hooks/useGetCoin';
import { useAddressBalance } from '../../contexts/BalancesContext';
import { generateInfo } from './investUtils';

import {
  ConfirmButton,
  LoanTermsCheckbox,
  CheckContainer,
  InvestHeader,
  InvestSection
} from './InvestModal.styles';

import CollapsedTable from './components/CollapsedTable';

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

const HelperText = styled.div`
  margin-top: 18px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #b1b3b9;
`;

const ContinueButton = styled(ConfirmButton)`
  &&&&& {
    margin-top: 36px;
  }
`;

const InvestState: React.SFC<InvestStateProps> = ({ loan, setStage, setInvestment, ui }) => {
  const {
    store: {
      user: {
        details: { kyc_status }
      },
      user: {
        cryptoAddress: { address: account }
      }
    }
  }: any = useRootContext();

  const { maxAmount } = loan;
  const nMaxAmount = Number(fromWei(maxAmount));
  const calcs = getCalculations(loan);
  const coin = useGetCoin(loan);
  const tagManager = useGoogleTagManager('Card');
  const balanceBN: BN = useAddressBalance(account, coin.text);
  const balance: number = Number(Number(fromWei(balanceBN)).toFixed(2));

  const [value, setValue]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);

  const onConfirm = async () => {
    tagManager.sendEvent(TMEvents.Submit, 'invest_attempt');

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

  const loanInfo = useMemo(() => generateInfo({ ...calcs, coin, loan }), [calcs, coin, loan]);

  const InvestInputProps = {
    loan,
    value,
    setValue,
    coin,
    balance
  };

  return (
    <>
      <InvestHeader>Loan Information</InvestHeader>
      <CollapsedTable items={loanInfo} />
      <InvestSection {...InvestInputProps} />
      <ErrorBox>
        {errorMessage()}
        &nbsp;
      </ErrorBox>
      <CheckContainer>
        <LoanTermsCheckbox id="btn-check-term-condition-invest" onChange={onToggleTerms} />I agree
        to the Terms and Conditions of the Loan Agreement
      </CheckContainer>
      <ContinueButton
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
        CONTINUE
      </ContinueButton>
      <HelperText>In the next step you will be able to review before confirm</HelperText>
    </>
  );
};

export default InvestState;
