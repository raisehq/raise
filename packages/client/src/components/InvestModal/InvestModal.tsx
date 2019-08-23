import React, { useState, useMemo, useContext } from 'react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import useMetamask from '../../hooks/useMetaMask';
import { Modal as SemanticModal } from 'semantic-ui-react';
import { fromWei, toWei } from 'web3-utils';
import { getWeb3, averageBlockTime } from '../../utils';
import { TokenInput } from '../TokenInput';
import numeral from '../CreateLoan/numeral';
import ERC20 from '../../commons/erc20';
import { MAX_VALUE } from '../../commons/constants';
import { numeralFormat } from '../CreateLoan/numeral';
import { ResumeItemProps, RaisedAmountProps, InvestModalProps } from './types';
import {
  LenderButton,
  Modal,
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
import { AppContext } from '../App';

const ResumeItem: React.SFC<ResumeItemProps> = ({ title, value }) => (
  <ResumeItemBox>
    <p>{value}</p>
    <p>{title}</p>
  </ResumeItemBox>
);

const RaisedAmount: React.SFC<RaisedAmountProps> = ({ value }) => (
  <RaisedAmountBox>
    <p>Raised</p>
    <TokenInput value={value} displayType="text" />
  </RaisedAmountBox>
);

const getAuctionEndDate = auctionRemainingSeconds => {
  let now = new Date();
  now.setSeconds(now.getSeconds() + auctionRemainingSeconds);

  return now;
};

const getTermLength = (termEndDate, auctionEndDate) => {
  let diff = (termEndDate.getTime() - auctionEndDate.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7 * 4;

  return Math.abs(Math.round(diff));
};

const calculateTerms = async auction => {
  try {
    const web3 = getWeb3();
    const currentBlock = await web3.eth.getBlockNumber();
    const averageBT = await averageBlockTime();
    const auctionRemainingBlocks = auction.auctionEndBlock - currentBlock;
    const auctionRemainingSeconds = auctionRemainingBlocks * averageBT;
    const auctionEndDate = getAuctionEndDate(auctionRemainingSeconds);
    const termEndDate = new Date(parseInt(auction.termEndTimestamp));
    return {
      loanDuration: getTermLength(termEndDate, auctionEndDate),
      auctionEnds: Math.round(auctionRemainingSeconds / 60 / 60 / 24)
    };
  } catch (error) {
    return error;
  }
};

const InvestModal: React.SFC<InvestModalProps> = ({ loan }) => {
  const { id: loanAddress, principal, investorCount, maxAmount } = loan;
  const {
    web3Status: { account }
  }: any = useContext(AppContext);
  const metamask = useMetamask();
  const [open, setOpen] = useState(false);
  const [auctionDuration, setAuctionDuration]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);
  const [loanTerm, setLoanTerm]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);
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
        const { loanDuration, auctionEnds } = await calculateTerms(loan);
        setLoanTerm(loanDuration);
        setAuctionDuration(auctionEnds);
      } catch (error) {
        setInterest(0);
        setLoanTerm(0);
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
    const web3 = getWeb3();
    const { BN } = web3.utils;
    const valueBN = new BN(toWei(value.toString()));
    const Proxy = await metamask.addContract('DAIProxy');
    const DAI = await metamask.addContract('DAI');
    const DAIContract = new web3.eth.Contract(ERC20, DAI._address);
    const approved = await DAIContract.methods.allowance(
      account,
      Proxy.options.address,
    ).call({from: account});
    if (valueBN.gt(new BN(approved))) {
      await DAIContract.methods
        .approve(Proxy.options.address, MAX_VALUE)
        .send({ from: account });
    }
    await Proxy.methods
      .fund(loanAddress, toWei(value.toString()))
      .send({ from: account });
  };

  const openModal = () => {
     setOpen(true);
  }
  const closeModal = () => {
    setOpen(false);
  }

  return (
    <>
      <LenderButton  onClick={openModal}>Invest</LenderButton>
      <Modal open={open} size="small" onClose={closeModal}>
        <SemanticModal.Content>
          <Header>How much would you like to invest?</Header>
          <ModalInputContainer>
            <div>
              <ModalInputBox>
                <TokenInput
                  value={value}
                  numeralFormat={numeralFormat}
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
            <FlexSpacedLayout>
              <ResumeItem title="Borrower" value="Company A" />
              <ResumeItem title="Loan Term" value={`${loanTerm} months`} />
              <ResumeItem title="Min APR" value={`${interest} %`} />

              <ResumeItem title="Target Amount" value={`${targetAmount} DAI`} />
              <ResumeItem title="Investors" value={`${investorCount}`} />
              <ResumeItem title="Days left" value={`${auctionDuration}`} />
            </FlexSpacedLayout>
            <ProgressLayout>
              <AuctionProgress active percent={raisedPercentage} />
              <Percentage>{raisedPercentage} %</Percentage>
            </ProgressLayout>
          </InvestResume>
          <ConfirmButton onClick={onConfirm}>CONFIRM</ConfirmButton>
        </SemanticModal.Content>
      </Modal>
    </>
  );
};

export default InvestModal;
