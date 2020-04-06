import React, { useState, useMemo, useEffect } from 'react';
import BN from 'bn.js';
import styled from 'styled-components';
import { fromWei } from 'web3-utils';
import { Card } from '@raisehq/components';
import { TokenInput } from '../TokenInput';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import { OldInvestStateProps } from './types';
import { getCalculations } from '../../utils/loanUtils';
import Amount from '../Dashboard/Dashboard.Amount';
import { useRootContext } from '../../contexts/RootContext';
import { useAppContext } from '../../contexts/AppContext';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import useGetCoin from '../../hooks/useGetCoin';
import { useAddressBalance } from '../../contexts/BalancesContext';
import { Button } from '@raisehq/components';

import {
  Header,
  ModalInputContainer,
  ModalInputBox,
  InputLabel,
  InputContainer,
  // Amount,
  // FundAllLabel,
  LoanTermsCheckbox,
  CheckContainer,
  InvestorBalance,
  ButtonContainer
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

const InvestState: React.SFC<OldInvestStateProps> = ({ loan, setStage, setInvestment, ui }) => {
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
  const { coin } = useGetCoin(loan);

  const tagManager = useGoogleTagManager('Card');

  const {
    store: {
      user: {
        details: { kyc_status }
      },
      blockchain: {
        contracts: { address: contractAddresses }
      },
      user: {
        cryptoAddress: { address: account }
      }
    }
  }: any = useRootContext();
  const {
    web3Status: { walletNetworkId: chainId }
  }: any = useAppContext();

  const nMaxAmount = Number(fromWei(maxAmount));
  const auctionTimeLeft = `${times.auctionTimeLeft} left`;
  const { companyName } = useBorrowerInfo(loan.originator);
  const [value, setValue]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);
  const [balance, setBalance] = useState(0);
  const roi = useMemo(() => value + value * expectedROI, [value, expectedROI]);

  const coinName = coin ? contractAddresses[chainId]?.[coin.value] : null;
  const balanceBN: BN = useAddressBalance(account, coinName);

  useEffect(() => {
    if (balanceBN) {
      const pBalance: string = Number(fromWei(balanceBN)).toFixed(2);
      setBalance(Number(pBalance));
    }
  }, [balanceBN]);

  const fundAll = () => {
    const nPrincipal = nMaxAmount - Number(fromWei(principal));
    const minValue = Math.min(...[balance, nPrincipal]);
    setValue(minValue);
  };

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

  const onSetValue = v => {
    if (v < 0) {
      return setValue(0);
    }
    return setValue(v);
  };

  return (
    <>
      <Header>How much would you like to invest?</Header>
      {coin && (
        <InvestorBalance coin={coin} balance={balance} id="btn-invest-all" onClick={fundAll} />
      )}
      <ModalInputContainer>
        <InputContainer>
          <InputLabel>Investment</InputLabel>
          <ModalInputBox error={value !== undefined && (value > balance || value > nMaxAmount)}>
            <TokenInput
              id="input-invest-value"
              value={value}
              onValueChange={onSetValue}
              coinIcon={coin && coin.icon}
            />
          </ModalInputBox>
          <ErrorBox>
            {errorMessage()}
            &nbsp;
          </ErrorBox>
        </InputContainer>
        <InputContainer>
          <InputLabel>Expected ROI</InputLabel>
          <ModalInputBox roi>
            <TokenInput
              value={roi}
              decimalScale={4}
              displayType="text"
              coinIcon={coin && coin.icon}
            />
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
              amount={<Amount principal={calcPrincipal} coin={coin} />}
            />
            <Card.Header
              fontSize="22px"
              title="Target"
              amount={<Amount principal={calcMaxAmount} coin={coin} />}
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
      <ButtonContainer>
        <Button
          idAttr="btn-invest-confirm"
          onClick={onConfirm}
          text="Confirm"
          type="secondary"
          size="large"
          fullWidth={true}
          disabled={
            value === 0 ||
            value === undefined ||
            !termsCond ||
            value > balance ||
            value > nMaxAmount ||
            kyc_status !== 3
          }
        />
      </ButtonContainer>
    </>
  );
};

export default InvestState;
