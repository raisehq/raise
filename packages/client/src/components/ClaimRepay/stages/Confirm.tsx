import React, { useContext } from 'react';
import { Loader } from 'semantic-ui-react';
import { Header, BorrowerButton } from '../../InvestModal/InvestModal.styles';
import { ClaimRepayContext } from '../ClaimRepay';
import { getCalculations } from '../../../utils/loanUtils';
import numeral from '../../../commons/numeral';
import { fromWei } from 'web3-utils';
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

  const { roi }: any = getCalculations(loan);
  const lenderAmount = numeral(fromWei(loan.lenderAmount)).format();
  const lenderRoiAmount = numeral(
    Number(fromWei(loan.lenderAmount)) + Number(fromWei(loan.lenderAmount)) * numeral(roi).value()
  ).format();

  return (
    <>
      <Header>Claim funds</Header>
      <ClaimFundsResume>
        <FlexSpacedLayout>
          <ResumeItem title="Amount invested" value={`${lenderAmount} DAI`} />
          <ResumeItem title="ROI" value={`${roi}`} />
          <ResumeItemBig title="Total repayment amount" value={`${lenderRoiAmount} DAI`} />
        </FlexSpacedLayout>
      </ClaimFundsResume>
      <Loader active inverted />
      <BorrowerButton loading={pending} onClick={claimRepayment}>
        Repay
      </BorrowerButton>
    </>
  );
};

export default Confirm;
