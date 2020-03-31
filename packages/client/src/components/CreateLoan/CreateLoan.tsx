import React, { useState, useEffect, useMemo } from 'react';
import { BrowserView } from 'react-device-detect';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import { numeralFormat } from '../../commons/numeral';
import { UI, getLoanAction } from './CreateLoan.Response';
import get from 'lodash/get';
import Queryies from '../../helpers/queryies';
import {
  Header,
  Divider,
  LoanContainer,
  LoanBox,
  LoanDescription,
  SideInfo,
  InputError,
  LoanInputLabel,
  CreateLoanWrapper,
  SliderWrapper,
  CreateLoanSection,
  CreateAmountSection,
  CreateLoanRow,
  CreateLoanColumn,
  SectionTitle,
  ControlLabel,
  CreateLoanDescription,
  CreateLoanHeader,
  CreateAmountSubSection,
  MinimumAmountControlLabel
} from './CreateLoan.styles';
import {
  MIN_AMOUNT_OPTIONS,
  MIN,
  MAX,
  AMOUNT_DEFAULT,
  TERM_DEFAULT,
  TERM_AUCTION_DEFAULT,
  MIN_PERCENT_DEFAULT,
  SLIDER_MIN_APR,
  SLIDER_MAX_APR,
  MIN_APR_DEFAULT,
  MAX_APR_DEFAULT,
  MARKS,
  OPERATOR_FEE_DEFAULT
} from './constants';
import {
  formatAmount,
  calculateRepaymentAmount,
  calculateNetLoan,
  calculateSystemFees,
  calculateTotalInterest,
  calculateTermFromSecondsToMonths,
  calculateMinAmount,
  calculateAPRFromMIR,
  calculateMIRFromAPR
} from './calculations';
import Slider from '../Slider';
import { getMonths } from '../../commons/months';
import { getLoanAuctionIntervalArray } from '../../commons/months';
import useLoanDispatcher from '../../hooks/useLoanDispatcher';
import { COINS } from '../../commons/constants';
import GroupButton from '../commons/ButtonControl/GroupButton';
import CheckboxControl from '../commons/CheckboxControl';
import SelectControl from '../commons/SelectControl';
import InputNumber from '../commons/InputControl/InputNumber';
import useBorrowerInfo from '../../hooks/useBorrowerInfo';
import { CoinsType } from '../../commons/coins';

const CreateLoan = ({ contracts }) => {
  const {
    web3Status: { network, walletNetworkId },
    webSocket: { webSocket }
  }: any = useAppContext();

  const {
    actions: {
      loanDispatcher: { onGetAcceptedTokensSubscription }
    },
    store: {
      loanDispatcher: { acceptedTokens },
      user: {
        cryptoAddress: { address: userAddress }
      }
    }
  }: any = useRootContext();
  const [operatorFee, setOperatorFee] = useState(0);
  const [stage, setStage] = useState(UI.Confirm);
  const loanDispatcherContract = useLoanDispatcher();
  const [amountValidation, setAmountValidation] = useState({
    error: false,
    msg: ''
  });

  const [termsCond, setTermsCond] = useState(false);
  const [authTerms, setAuthTerms] = useState(false);
  const [minAPR, setMinAPR] = useState(MIN_APR_DEFAULT);
  const [maxAPR, setMaxAPR] = useState(MAX_APR_DEFAULT);
  const [minPercent, setMinPercent] = useState(MIN_PERCENT_DEFAULT);
  const [coins, setCoins] = useState<CoinsType[]>([]);
  const [selectedCoinType, setSelectedCoinType] = useState('');
  const [selectedCoin, setSelectedCoin] = useState<any>({});
  const [loan, setLoan] = useState({
    amount: AMOUNT_DEFAULT,
    tokenAddress: selectedCoin.address,
    term: TERM_DEFAULT,
    auctionTerm: TERM_AUCTION_DEFAULT,
    minMir: parseFloat((MIN_APR_DEFAULT / 12).toString()),
    maxMir: parseFloat((MAX_APR_DEFAULT / 12).toString()),
    accept: false,
    minAmount: calculateMinAmount(AMOUNT_DEFAULT, MIN_PERCENT_DEFAULT)
  });
  const [selectedMonth, setSelectedMonth] = useState(TERM_DEFAULT);

  const [selectedCoinIndex, setSelectedCoinIndex] = useState<any>(0);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<any>(2);

  const monthOptions = useMemo(() => getMonths(network), [network]);
  const loanAuctionIntervalArray = useMemo(() => getLoanAuctionIntervalArray(network), [network]);
  const borrowerCompany = useBorrowerInfo(userAddress);
  const getAddress = (netId, name) => get(contracts, `address.${walletNetworkId}.${name}`);

  const getCoinsFromContract = () => {
    const contract = get(contracts, `address.${walletNetworkId}`);
    console.log(COINS);
    const mappedCoins: CoinsType[] = COINS.map(coin => ({
      address: contract[coin.name],
      text: coin.name,
      value: coin.name,
      key: coin.key,
      icon: coin.icon
    }));
    return mappedCoins.filter(({ address }) =>
      acceptedTokens.find(a => a.toLowerCase() === address.toLowerCase())
    );
  };

  const loanDispatcherAddress = getAddress(walletNetworkId, 'LoanDispatcher');

  useAsyncEffect(async () => {
    if (operatorFee === 0 && loanDispatcherContract) {
      try {
        const contractOperatorFee = await loanDispatcherContract.getOperatorFee();
        setOperatorFee(contractOperatorFee);
      } catch (error) {
        console.error(error);
        setOperatorFee(OPERATOR_FEE_DEFAULT);
      }
    }
  }, [loanDispatcherContract]);

  useEffect(() => {
    if (webSocket && loanDispatcherAddress) {
      const { query, subscriptionName } = Queryies.subscriptions.acceptedTokens;
      const variables = {
        address: loanDispatcherAddress
      };
      const callback = onGetAcceptedTokensSubscription;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket, loanDispatcherAddress]);

  useEffect(() => {
    const coinsArray: CoinsType[] = getCoinsFromContract();
    const dai = coinsArray.find(({ text }) => text === 'DAI');

    if (coinsArray.length) {
      setCoins(coinsArray);
      if (dai) {
        setSelectedCoinType(dai.text);
        setSelectedCoinIndex(dai.key);
        setLoan({ ...loan, tokenAddress: dai.address });
      }
    }
  }, [acceptedTokens]);

  useEffect(() => {
    const { amount: currentAmount, term: termSeconds, minMir, maxMir } = loan;
    const term = calculateTermFromSecondsToMonths(termSeconds);
    if (currentAmount && minMir && maxMir && term) {
      setMinAPR(calculateAPRFromMIR(minMir));
      setMaxAPR(calculateAPRFromMIR(maxMir));
    }
  }, [loan]);

  const onSetAmount = ({ floatValue }) => {
    const minAmount = calculateMinAmount(floatValue, minPercent);
    setLoan({
      ...loan,
      amount: floatValue,
      minAmount: loan.accept ? minAmount : floatValue
    });
  };

  const onSetTerm = (e, data) => {
    setSelectedMonth(data.value);
    setLoan({ ...loan, term: data.value });
  };

  const onSetTermAuction = option => () => {
    const auctionTerm = loanAuctionIntervalArray.find(item => item.value === option);
    setSelectedMonthIndex(auctionTerm && auctionTerm.key);
    setLoan({ ...loan, auctionTerm: option });
  };

  const onSetCoinAmount = option => () => {
    const coin = coins.find(item => item.text === option);

    if (coin) {
      setSelectedCoin(coin);
      setSelectedCoinIndex(coin ? coin.key : 0);
      const addressCoin: any = coin ? coin.address : null;

      setLoan({ ...loan, tokenAddress: addressCoin });
    }
  };

  const onSetMIR = minMir => maxMir => setLoan({ ...loan, minMir, maxMir });

  const onToggleAccept = () => setLoan({ ...loan, accept: !loan.accept });

  const onMinAmount = (e, data) => {
    setMinPercent(data.value);
    setLoan(l => {
      const minAmount = calculateMinAmount(l.amount, data.value);
      return { ...l, minAmount };
    });
  };

  const onInterestChange = valuesArray => {
    const minApr = parseFloat(valuesArray[0]);
    const maxApr = parseFloat(valuesArray[1]);
    const minMir = calculateMIRFromAPR(minApr);
    const maxMir = calculateMIRFromAPR(maxApr);

    setMinAPR(minApr);
    setMaxAPR(maxApr);
    onSetMIR(minMir)(maxMir);
  };

  const onSave = async () => {
    setStage(UI.Waiting);
    try {
      await loanDispatcherContract.deploy(
        loan.minAmount,
        loan.amount,
        loan.minMir,
        loan.maxMir,
        loan.term,
        loan.accept,
        loan.auctionTerm,
        loan.tokenAddress
      );
      setStage(UI.Success);
    } catch (error) {
      console.error(
        '[LOAN DISPACHER]',
        ` MinAmount: ${loan.minAmount} Amount: ${loan.amount} Mir: ${loan.maxMir} Term: ${
          loan.term
        } Accept: ${loan.accept.toString()} `,
        error
      );
      setStage(UI.Error);
    }
  };

  const onRetry = async () => {
    setStage(UI.Confirm);
    setAmountValidation({
      error: false,
      msg: ''
    });
    setMinAPR(MIN_APR_DEFAULT);
    setMaxAPR(MAX_APR_DEFAULT);
    setMinPercent(MIN_PERCENT_DEFAULT);
    setLoan({
      amount: AMOUNT_DEFAULT,
      tokenAddress: selectedCoin.address,
      term: TERM_DEFAULT,
      auctionTerm: TERM_AUCTION_DEFAULT,
      minMir: parseFloat((MIN_APR_DEFAULT / 12).toString()),
      maxMir: parseFloat((MAX_APR_DEFAULT / 12).toString()),
      accept: false,
      minAmount: calculateMinAmount(AMOUNT_DEFAULT, MIN_PERCENT_DEFAULT)
    });
    setTermsCond(false);
    setAuthTerms(false);
    //Reseting control values to default in case of create a new loan without refreshing the screen
    onSetTermAuction(TERM_AUCTION_DEFAULT)();
    onSetTerm(null, { value: TERM_DEFAULT });
  };

  const onBlur = e => {
    const currentValue = loan.amount;

    if (currentValue === undefined) {
      setAmountValidation({
        error: true,
        msg: 'Can not be empty'
      });
    } else {
      setAmountValidation({
        error: currentValue < MIN || currentValue > MAX,
        msg: `Can not be ${
          currentValue < MIN
            ? `less than ${MIN} ${selectedCoinType}`
            : `more than ${MAX} ${selectedCoinType}`
        }`
      });
    }
  };

  const onToggleTerms = () => {
    const toggleTerms = !termsCond;
    setTermsCond(toggleTerms);
  };

  const onToggleAuthTerms = () => {
    const toggleAuthTerms = !authTerms;
    setAuthTerms(toggleAuthTerms);
  };

  const values = {
    loan,
    selectedCoinType,
    numberAmount: loan.amount,
    amountValidation,
    formattedAmount: formatAmount(loan.amount),
    repaymentAmount: calculateRepaymentAmount(
      loan.amount,
      loan.maxMir,
      calculateTermFromSecondsToMonths(loan.term)
    ),
    netLoan: calculateNetLoan(loan.amount)(operatorFee),
    systemFees: calculateSystemFees(loan.amount)(operatorFee),
    totalInterest: calculateTotalInterest(
      loan.amount,
      loan.maxMir,
      calculateTermFromSecondsToMonths(loan.term)
    ),
    termsCond,
    authTerms,
    operatorFee,
    borrowerCompany
  };
  const methods = { onSave, onRetry, onToggleTerms, onToggleAuthTerms };

  return (
    <LoanContainer>
      <CreateLoanWrapper>
        <CreateAmountSection>
          <CreateAmountSubSection>
            <CreateLoanRow>
              <SectionTitle as="h2">How much would you like to borrow?</SectionTitle>
            </CreateLoanRow>
            <CreateLoanRow>
              <CreateLoanColumn>
                <ControlLabel>Enter the amount</ControlLabel>
                <InputNumber
                  id="input-amount"
                  value={loan.amount}
                  onValueChange={onSetAmount}
                  onBlur={onBlur}
                  fmt={numeralFormat}
                />
              </CreateLoanColumn>
              <CreateLoanColumn>
                <ControlLabel>Select the cryptocurrency</ControlLabel>
                <GroupButton
                  options={coins}
                  withIcon={true}
                  onClick={onSetCoinAmount}
                  selectedIndex={selectedCoinIndex}
                />
              </CreateLoanColumn>
            </CreateLoanRow>
            <CreateLoanRow>
              <LoanInputLabel>
                {amountValidation.error ? <InputError>{amountValidation.msg}</InputError> : ''}
              </LoanInputLabel>
            </CreateLoanRow>
            <CreateLoanRow>
              <CheckboxControl
                onChange={onToggleAccept}
                label="I accept a lower amount than the requested if the auction don’t achieve the target"
              />
            </CreateLoanRow>
          </CreateAmountSubSection>

          {loan.accept && (
            <CreateLoanRow>
              <CreateLoanColumn>
                <ControlLabel>Please select how much less:</ControlLabel>
                <SelectControl
                  value={minPercent}
                  onChange={onMinAmount}
                  placeholder="Select"
                  options={MIN_AMOUNT_OPTIONS}
                />
              </CreateLoanColumn>
              <MinimumAmountControlLabel>
                Minimum amount: {formatAmount(loan.minAmount)} {selectedCoinType}
              </MinimumAmountControlLabel>
            </CreateLoanRow>
          )}
        </CreateAmountSection>
        <BrowserView>
          <Divider />
        </BrowserView>
        <CreateLoanSection>
          <CreateLoanHeader>
            <CreateLoanRow>
              <SectionTitle as="h2">Loan Auction</SectionTitle>
            </CreateLoanRow>
            <CreateLoanRow>
              <CreateLoanDescription>
                Select how many days you want for your loan auction to be open.
              </CreateLoanDescription>
            </CreateLoanRow>
          </CreateLoanHeader>

          <CreateLoanRow>
            <GroupButton
              options={loanAuctionIntervalArray}
              onClick={onSetTermAuction}
              selectedIndex={selectedMonthIndex}
            />
          </CreateLoanRow>
        </CreateLoanSection>
        <BrowserView>
          <Divider />
        </BrowserView>
        <CreateLoanSection>
          <CreateLoanHeader>
            <CreateLoanRow>
              <SectionTitle as="h2">Loan Term</SectionTitle>
            </CreateLoanRow>
            <CreateLoanRow>
              <CreateLoanDescription>
                Select when you want to repay the loan. The loan term will start after the loan
                auction is finished
              </CreateLoanDescription>
            </CreateLoanRow>
          </CreateLoanHeader>
          <CreateLoanRow>
            <SelectControl
              value={selectedMonth}
              onChange={onSetTerm}
              placeholder="Select term"
              options={monthOptions}
            />
          </CreateLoanRow>
        </CreateLoanSection>

        <BrowserView>
          <Divider />
        </BrowserView>

        <LoanBox>
          <LoanDescription>
            <Header as="h2">Annual percentage rate</Header>
            <p>
              Select the starting APR for your loan auction and the maximum APR you would accept for
              your loan.
            </p>
          </LoanDescription>
          <SliderWrapper>
            <Slider
              defaultValue={[MIN_APR_DEFAULT, MAX_APR_DEFAULT]}
              onChange={value => onInterestChange(value)}
              min={SLIDER_MIN_APR}
              marks={MARKS}
              max={SLIDER_MAX_APR}
              allowCross={false}
              loan={loan}
              minAPR={minAPR}
              maxAPR={maxAPR}
            />

            <SideInfo>* MIR : Monthly simple interest rate</SideInfo>
          </SliderWrapper>
        </LoanBox>
      </CreateLoanWrapper>
      {getLoanAction(stage, values, methods)}
    </LoanContainer>
  );
};

export default CreateLoan;
