import React, { useContext, useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { Header, LenderButton } from '../../InvestModal/InvestModal.styles';
import { CheckboxDeposit, CheckboxDepositLabel, CheckboxContainer } from '../styles';
import { ClaimRepayContext } from '../ClaimRepay';
import { getCalculations } from '../../../utils/loanUtils';
import numeral from '../../../commons/numeral';
import { fromWei } from 'web3-utils';

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
    store: {
      blockchain: { hasDeposit }
    }
  }: any = useContext(AppContext);
  const [depositChecked, setDepositChecked] = useState(false);
  const [membership, setMembership] = useState(null);

  useEffect(() => {
    console.log('has depoist::::: ', hasDeposit);
    setMembership(hasDeposit);
  }, [hasDeposit]);
  const { roi }: any = getCalculations(loan);
  const lenderAmount = numeral(fromWei(loan.lenderAmount)).format();
  const lenderRoiAmount = numeral(
    Number(fromWei(loan.lenderAmount)) + Number(fromWei(loan.lenderAmount)) * numeral(roi).value()
  ).format();

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
        {!membership && (
          <CheckboxContainer>
            <CheckboxDeposit onChange={toggle} checked={depositChecked} />
            <CheckboxDepositLabel>I wish to become become a member</CheckboxDepositLabel>
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
