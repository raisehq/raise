import React, { useContext } from 'react';
import { Header, BorrowerButton } from '../../InvestModal/InvestModal.styles';
import { RepayLoanContext, Stages } from '../RepayLoan.context';
import { getCalculations } from '../../../utils/loanUtils';
import {
  ClaimFundsResume,
  FlexSpacedLayout,
  ResumeItemBoxBig,
  ResumeItemBox
} from '../../ClaimLoan/ClaimLoan.styles';
import { ResumeItemProps } from '../../InvestModal/types';
import useGetCoin from '../../../hooks/useGetCoin';

const ResumeItem: React.SFC<ResumeItemProps> = ({ title, value }: any) => (
  <ResumeItemBox>
    <p>{title}</p>
    <p>{value}</p>
  </ResumeItemBox>
);

const ResumeItemBig: React.SFC<ResumeItemProps> = ({ title, value }: any) => (
  <ResumeItemBoxBig>
    <p>{title}</p>
    <p>{value}</p>
  </ResumeItemBoxBig>
);

const Confirm = () => {
  const { setStage, loan }: any = useContext(RepayLoanContext);
  const onConfirm = async () => {
    setStage(Stages.Processing);
  };
  const coin = useGetCoin(loan);
  const { principal, borrowerDebt, totalInterest, totalInterestAmount }: any = getCalculations(
    loan,
    coin.decimals
  );

  return (
    <>
      <Header>Repay Loan</Header>
      <ClaimFundsResume>
        <FlexSpacedLayout>
          <ResumeItem title="Loan Amount" value={`${principal} ${coin && coin.text}`} />
          <ResumeItem
            title={`Interests ${totalInterest}`}
            value={`${totalInterestAmount} ${coin && coin.text}`}
          />
          <ResumeItemBig
            title="Total repayment amount"
            value={`${borrowerDebt} ${coin && coin.text}`}
          />
        </FlexSpacedLayout>
      </ClaimFundsResume>
      <BorrowerButton onClick={onConfirm}>Repay</BorrowerButton>
    </>
  );
};

export default Confirm;
