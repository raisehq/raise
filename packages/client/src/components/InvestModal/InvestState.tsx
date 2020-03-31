import React, { useState, useMemo } from 'react';
import BN from 'bn.js';
import styled from 'styled-components';
import { fromWei, toWei } from 'web3-utils';
import { InvestStateProps } from './types';
import { getCalculations } from '../../utils/loanUtils';
import { useRootContext } from '../../contexts/RootContext';
import { useAppContext } from '../../contexts/AppContext';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { useAddressBalance } from '../../contexts/BalancesContext';
import { tradeExactTokensForTokens } from '@uniswap/sdk';
import useGetCoinMetadata from '../../hooks/useGetCoinMetadata';

import { generateInfo } from './investUtils';
import {
  ConfirmButton,
  InvestHeader,
  InvestSection,
  LoanTermsCheckbox,
  CheckContainer
} from './InvestModal.styles';

import CollapsedTable, { TableItem } from './components/CollapsedTable';

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
  }
`;

const InvestState: React.SFC<InvestStateProps> = ({
  loanCoin,
  setStage,
  setInvestment,
  ui,
  selectedCoin,
  setCoin,
  loan
}: InvestStateProps) => {
  const { text: loanCoinName } = loanCoin;
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
  const {
    web3Status: { walletNetworkId: chainId }
  }: any = useAppContext();
  const calcs = getCalculations(loan);
  const { maxAmountNum } = calcs;
  const inputCoin = useGetCoinMetadata(selectedCoin);
  const tagManager = useGoogleTagManager('Card');
  const balanceBN: BN = useAddressBalance(account, inputCoin?.address || '');
  const balance = Number(Number(fromWei(balanceBN)).toFixed(2));
  const { expectedROI } = calcs;
  const [value, setValue]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);
  const [output, setOutput] = useState<BN>(new BN('0'));
  const onConfirm = async () => {
    tagManager.sendEvent(TMEvents.Submit, 'invest_attempt');

    setInvestment(value);
    // Change to state confirmation
    setStage(ui.Processing);
  };

  const errorMessage = () => {
    if (value && value > balance) {
      return errorMessages.inputGreaterThanBalance;
    }
    if (value && value > maxAmountNum) {
      return errorMessages.inputGreaterThanLoanAmount;
    }
    return null;
  };

  const getSwapOutput = async (): Promise<BN> => {
    const defaultValue = new BN('0');
    const inputAmount = toWei(value.toString());
    try {
      if (!inputCoin || !loanCoin) {
        return defaultValue;
      }
      const tradeDetails = await tradeExactTokensForTokens(
        inputCoin.address,
        loanCoin.address,
        inputAmount,
        chainId
      );

      const totalOutput = new BN(tradeDetails.outputAmount.amount.toString(10));
      return totalOutput;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  };

  useAsyncEffect(async () => {
    if (inputCoin?.text === loanCoin.text) {
      setOutput(new BN(toWei(value.toString())));
      return;
    }
    const outputAmount = await getSwapOutput();
    setOutput(outputAmount);
  }, [value, selectedCoin]);

  const loanInfo = useMemo(() => generateInfo({ ...calcs, coin: loanCoinName, loan }), [
    calcs,
    loanCoinName,
    loan
  ]);

  const outputString = fromWei(output) || '0';
  const buttonRules =
    value === 0 ||
    value === undefined ||
    value > balance ||
    value > maxAmountNum ||
    kyc_status !== 3;

  const InvestInputProps = {
    loan,
    value,
    setValue,
    coin: inputCoin,
    balance,
    selectedCoin,
    setCoin
  };

  const [termsCond, setTermsCond] = useState(false);

  const onToggleTerms = () => {
    const toggleTerms = !termsCond;
    setTermsCond(toggleTerms);
  };

  return (
    <>
      <InvestHeader>Loan Information</InvestHeader>
      <CollapsedTable items={loanInfo} />
      <InvestSection {...InvestInputProps} />
      <TableItem title="The equivalent in DAI" content={<>{outputString} DAI</>} />
      <TableItem title="Expected ROI after repayment" content={<>{expectedROI} DAI</>} latest />
      <ErrorBox>
        {errorMessage()}
        &nbsp;
      </ErrorBox>
      <CheckContainer>
        <LoanTermsCheckbox id="btn-check-term-condition-invest" onChange={onToggleTerms} />I agree
        to the Terms and Conditions of the Loan Agreement
      </CheckContainer>
      <ContinueButton id="btn-invest-confirm" onClick={onConfirm} disabled={buttonRules}>
        Continue
      </ContinueButton>
      <HelperText>In the next step you will be able to review before confirm</HelperText>
    </>
  );
};

export default InvestState;
