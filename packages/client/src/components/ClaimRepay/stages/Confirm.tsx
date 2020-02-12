import React, { useContext, useState, useEffect } from 'react';
import { tradeTokensForExactTokens } from '@uniswap/sdk';
import useAsyncEffect from '../../../hooks/useAsyncEffect';
import { Loader } from 'semantic-ui-react';
import { Header, LenderButton } from '../../InvestModal/InvestModal.styles';
import { CheckboxDeposit, CheckboxDepositLabel, CheckboxContainer } from '../styles';
import { ClaimRepayContext } from '../ClaimRepay';
import { getCalculations } from '../../../utils/loanUtils';
import numeral from '../../../commons/numeral';
import { fromWei, toWei } from 'web3-utils';
import AppContext from '../../AppContext';
import {
  ClaimFundsResume,
  FlexSpacedLayout,
  ResumeItemBoxBig,
  ResumeItemBox
} from '../../ClaimLoan/ClaimLoan.styles';
import { ResumeItemProps } from '../../InvestModal/types';

const ResumeItem: React.SFC<ResumeItemProps> = ({ title, value }) => (
  <ResumeItemBox>
    <p>{title}</p>
    <p>{value}</p>
  </ResumeItemBox>
);

const ResumeItemBig: React.SFC<ResumeItemProps> = ({ title, value }) => (
  <ResumeItemBoxBig>
    <p>{title}</p>
    <p>{value}</p>
  </ResumeItemBoxBig>
);

const Confirm = () => {
  const { claimRepayment, loan, pending }: any = useContext(ClaimRepayContext);
  const {
    web3Status: { hasDeposit }
  }: any = useContext(AppContext);

  const [depositChecked, setDepositChecked] = useState(false);
  const [membership, setMembership] = useState(null);
  const [swap, setSwap] = useState(false);

  const { roi }: any = getCalculations(loan);
  const lenderAmount = numeral(fromWei(loan.lenderAmount)).format();
  const lenderRoiAmount = numeral(
    Number(fromWei(loan.lenderAmount)) + Number(fromWei(loan.lenderAmount)) * numeral(roi).value()
  ).format();

  const getMarketSwap = async () => {
    try {
      const tradeDetails = await tradeTokensForExactTokens(
        '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI address
        '0x10bA8C420e912bF07BEdaC03Aa6908720db04e0c', // RAISE address
        toWei('200'), // output tokens (200 RAISE)
        1 // chain id, 1 mainnet
      );

      const totalDaiPrice = fromWei(tradeDetails.inputAmount.amount.toString());
      console.log(`\n\n You need ${totalDaiPrice} DAI to buy 200 RAISE`);

      return totalDaiPrice;
    } catch (error) {
      throw error;
    }
  };

  useAsyncEffect(async () => {
    try {
      const market = await getMarketSwap();
      // compare market with amount
      if (market > lenderRoiAmount) {
        setSwap(false);
      } else {
        setSwap(true);
      }
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    setMembership(hasDeposit);
  }, [hasDeposit]);

  const toggle = () => {
    setDepositChecked(!depositChecked);
  };

  return (
    <>
      <Header>Claim funds</Header>
      <ClaimFundsResume>
        <FlexSpacedLayout>
          <ResumeItem title="Amount invested" value={`${lenderAmount} DAI`} />
          <ResumeItem title="ROI" value={`${roi}`} />
          <ResumeItemBig title="Investment return" value={`${lenderRoiAmount} DAI`} />
        </FlexSpacedLayout>
        {!membership && !swap && (
          <CheckboxContainer>
            <CheckboxDeposit onChange={toggle} checked={depositChecked} />
            <CheckboxDepositLabel>I wish to become a member</CheckboxDepositLabel>
          </CheckboxContainer>
        )}
      </ClaimFundsResume>
      <Loader active inverted />
      <LenderButton loading={pending} onClick={claimRepayment}>
        Claim
      </LenderButton>
    </>
  );
};

export default Confirm;
