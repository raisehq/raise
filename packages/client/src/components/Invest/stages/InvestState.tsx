import React, { useState, useMemo } from 'react';
import { tradeTokensForExactTokens, tradeEthForExactTokens } from '@uniswap/sdk';
import BN from 'bn.js';
import { InvestStateProps } from '../types';
import { getCalculations } from '../../../utils/loanUtils';
import { useRootContext } from '../../../contexts/RootContext';
import { useAppContext } from '../../../contexts/AppContext';
import useGoogleTagManager, { TMEvents } from '../../../hooks/useGoogleTagManager';
import useAsyncEffect from '../../../hooks/useAsyncEffect';
import { useAddressBalance } from '../../../contexts/BalancesContext';
import useGetCoinMetadata from '../../../hooks/useGetCoinMetadata';
import localeConfig from '../../../commons/localeConfig';
import { generateInfo, CoinValue } from '../investUtils';
import { toDecimal, fromDecimal, fromDecimalFixed } from '../../../utils/web3-utils';

import {
  InvestHeader,
  LoanTermsCheckbox,
  CheckContainer,
  ExitButton,
  InvestSection,
  InvestBody,
  InvestInput,
  InvestButtonWrapper,
  ContinueButton
} from '../styles';
import CollapsedTable, { TableItem } from '../components/CollapsedTable';

const InvestState: React.SFC<InvestStateProps> = ({
  loanCoin,
  setStage,
  setInvestment,
  ui,
  selectedCoin,
  setCoin,
  loan,
  setInputTokenAmount,
  inputTokenAmount,
  closeModal,
  userActivated,
  fullInfo,
  isLogged
}: InvestStateProps) => {
  const { text: loanCoinName } = loanCoin;
  const {
    store: {
      user: {
        details: { kyc_status: kycStatus }
      },
      user: {
        cryptoAddress: { address: account }
      }
    }
  }: any = useRootContext();

  const {
    web3Status: { walletNetworkId: chainId }
  }: any = useAppContext();

  const [value, setValue] = useState<number>(0);

  const inputCoin = useGetCoinMetadata(selectedCoin);
  console.log('coin metadata::::: ', inputCoin);
  const calcs = getCalculations(loan, loanCoin.decimals);
  const { maxAmountNum, expectedROI } = calcs;

  const inputCoinImage = `${process.env.REACT_APP_HOST_IMAGES}/images/coins/${inputCoin?.icon}`;
  const loanCoinImage = `${process.env.REACT_APP_HOST_IMAGES}/images/coins/${loanCoin?.icon}`;

  const tagManager = useGoogleTagManager('Card');
  const balanceBN: BN = useAddressBalance(account, inputCoin?.address || '');
  const balance = Number(fromDecimalFixed(balanceBN.toString(10), inputCoin?.decimals));

  const expectedInputRoi = Number(expectedROI * value || 0).toLocaleString(...localeConfig);

  const onConfirm = async () => {
    tagManager.sendEvent(TMEvents.Submit, 'invest_attempt');

    setInvestment(value);
    // Change to state confirmation
    setStage(ui.Processing);
  };

  const getSwapOutput = async (): Promise<BN> => {
    const defaultValue = new BN('0');
    if (!value) {
      return defaultValue;
    }
    try {
      if (!inputCoin || !loanCoin) {
        return defaultValue;
      }
      if (inputCoin.text === 'ETH') {
        const outputAmount = toDecimal(value, loanCoin.decimals);
        const tradeDetails = await tradeEthForExactTokens(loanCoin.address, outputAmount, chainId);

        const totalOutput = new BN(tradeDetails.inputAmount.amount.toString());
        return totalOutput.add(totalOutput.div(new BN('100')));
      }
      const outputAmount = toDecimal(value, loanCoin.decimals);
      console.log('loan coin::: ', loanCoin);
      console.log('Input coin:::: ', inputCoin);
      const tradeDetails = await tradeTokensForExactTokens(
        inputCoin.address,
        loanCoin.address,
        outputAmount,
        chainId
      );

      console.log('input coin in get swap output after trade::: ', tradeDetails);
      const totalOutput = new BN(tradeDetails.inputAmount.amount.toString());
      return totalOutput;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  };

  useAsyncEffect(async () => {
    setInputTokenAmount(new BN('0'));
    if (inputCoin?.text === loanCoin.text) {
      setInputTokenAmount(new BN(toDecimal(value, loanCoin.decimals)));
      return;
    }
    console.log('before swap output--------------');
    const outputAmount = await getSwapOutput();
    console.log('------------------------------, outputÇ:::: ', outputAmount);
    setInputTokenAmount(outputAmount);
  }, [value, selectedCoin]);

  const loanInfo = useMemo(() => generateInfo({ ...calcs, coin: loanCoin, loan }), [
    calcs,
    loanCoinName,
    loan
  ]);
  const [termsCond, setTermsCond] = useState(false);

  const inputTokenAmountString =
    Number(fromDecimal(inputTokenAmount.toString(10), inputCoin?.decimals)).toLocaleString(
      ...localeConfig
    ) || '0';
  const buttonRules =
    value === 0 ||
    value === undefined ||
    inputTokenAmount.gt(balanceBN) ||
    inputTokenAmount.lte(new BN('0')) ||
    value > maxAmountNum ||
    !termsCond ||
    kycStatus !== 3;

  const InvestInputProps = {
    loan,
    value,
    setValue,
    coin: inputCoin,
    inputToken: Number(fromDecimal(inputTokenAmount.toString(10), inputCoin?.decimals)),
    loanCoin,
    balance,
    selectedCoin,
    setCoin,
    maxAmountNum
  };

  const onToggleTerms = () => {
    const toggleTerms = !termsCond;
    setTermsCond(toggleTerms);
  };

  const getCoinValue = () => (
    <CoinValue value={inputTokenAmountString} name={inputCoin?.text} src={inputCoinImage} />
  );

  console.log('fullinfo: ', fullInfo, ' activated: ', userActivated);

  // prettier-ignore
  return (
    <InvestBody>
      <InvestInput fullInfo={fullInfo}>
        {fullInfo && (
          <>
            <ExitButton name="close" color="black" onClick={closeModal} />
            <InvestHeader>Loan Information</InvestHeader>
            <CollapsedTable items={loanInfo} />
          </>
        )}
        <InvestSection {...InvestInputProps} />
        {selectedCoin !== loanCoin.text && (
          <TableItem
            title={`The equivalent in ${selectedCoin}`}
            content={getCoinValue()}
            tooltip="How much will be charged from your account. This will be converted to the currency set by the borrower."
          />
        )}
        <TableItem
          title="Expected ROI after repayment"
          latest
          content={<CoinValue value={expectedInputRoi} name={loanCoin?.text} src={loanCoinImage} />}
          tooltip="The return on your investment, when the loan is repaid."
        />
      </InvestInput>
      <InvestButtonWrapper fullInfo={fullInfo}>
        {isLogged && (
          <CheckContainer>
            <LoanTermsCheckbox id="btn-check-term-condition-invest" onChange={onToggleTerms} />
            I agree to the Terms and Conditions of the Loan Agreement
          </CheckContainer>
        )}
        <ContinueButton
          idAttr="btn-invest-confirm"
          onClick={onConfirm}
          disabled={buttonRules}
          text="Continue"
          type="primary"
          size="large"
          fullWidth
        />
      </InvestButtonWrapper>
    </InvestBody>
  );
};

export default InvestState;
