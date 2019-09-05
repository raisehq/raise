import React, { useContext } from 'react';
import { Header, BorrowerButton } from '../../InvestModal/InvestModal.styles';
import { RepayLoanContext, Stages } from '../RepayLoan';
import { getCalculations } from '../../../utils/loanUtils'
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
  const { setStage, loan, hasBalance }: any = useContext(RepayLoanContext)
  const onConfirm = async () => {
    setStage(Stages.Processing);
  };
  const { principal, borrowerDebt, totalInterest, totalInterestAmount }: any = getCalculations(loan);

  return (
    <>
    <Header>Repay Loan</Header>
    <ClaimFundsResume>
      <FlexSpacedLayout>
        <ResumeItem title="Loan Amount" value={`${principal} DAI`} />
        <ResumeItem title={`Interests ${totalInterest}`} value={`${totalInterestAmount} DAI`} />
        <ResumeItemBig title="Total repayment amount" value={`${borrowerDebt} DAI`} />
        {!hasBalance ?
          <ResumeItem title="* Not enought DAI to repay loan." value="" />
          : null}
      </FlexSpacedLayout>

    </ClaimFundsResume>
    <BorrowerButton disabled={!hasBalance} onClick={onConfirm}>Repay</BorrowerButton>
  </>
  );
};

export default Confirm;
