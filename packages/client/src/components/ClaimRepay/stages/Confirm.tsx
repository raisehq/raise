import React, { useContext, useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { Header, LenderButton } from '../../InvestModal/InvestModal.styles';
import { CheckboxDeposit, CheckboxDepositLabel, CheckboxContainer } from '../styles';
import { ClaimRepayContext } from '../ClaimRepay';
import { getCalculations } from '../../../utils/loanUtils';
import numeral from '../../../commons/numeral';
import { fromWei } from 'web3-utils';
import { useAppContext } from '../../../contexts/AppContext';
import {
  ClaimFundsResume,
  FlexSpacedLayout,
  ResumeItemBoxBig,
  ResumeItemBox
} from '../../ClaimLoan/ClaimLoan.styles';
import { ResumeItemProps } from '../../InvestModal/types';
import useGetCoin from '../../../hooks/useGetCoin';

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
  const { claimRepayment, loan, pending, swap }: any = useContext(ClaimRepayContext);
  const {
    web3Status: { hasDeposit }
  }: any = useAppContext();
  const { coin } = useGetCoin(loan);
  const [depositChecked, setDepositChecked] = useState(false);
  const [membership, setMembership] = useState(null);
  const [hasFunds, setHasFunds] = useState(false);

  const { roi }: any = getCalculations(loan);
  const lenderAmount = numeral(fromWei(loan.lenderAmount)).format();

  const lenderGains =
    Number(fromWei(loan.lenderAmount)) + Number(fromWei(loan.lenderAmount)) * numeral(roi).value();
  const lenderRoiAmount = numeral(lenderGains).format();

  useEffect(() => {
    if (Number(swap) <= Number(lenderGains)) {
      setHasFunds(true);
    }
  }, [swap]);

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
          <ResumeItem title="Amount invested" value={`${lenderAmount} ${coin && coin.text}`} />
          <ResumeItem title="ROI" value={`${roi}`} />
          <ResumeItemBig title="Investment return" value={`${lenderRoiAmount} ${coin && coin.text}`} />
        </FlexSpacedLayout>
        {!membership && hasFunds && (
          <CheckboxContainer>
            <CheckboxDeposit onChange={toggle} checked={depositChecked} />
            <CheckboxDepositLabel>I wish to become a member</CheckboxDepositLabel>
          </CheckboxContainer>
        )}
      </ClaimFundsResume>
      <Loader active inverted />
      <LenderButton loading={pending} onClick={() => claimRepayment(depositChecked)}>
        Claim
      </LenderButton>
    </>
  );
};

export default Confirm;
