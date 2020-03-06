import React, { useState, useContext } from 'react';
import {
  Header,
  ClaimButton,
  ClaimFundsResume,
  FlexSpacedLayout,
  ResumeItemBoxBig
  // ResumeItemBox
} from '../ClaimRefund.styles';
import useWallet from '../../../hooks/useWallet';
import { ClaimRefundContext, Stages } from '../ClaimRefund';
import { ResumeItemProps } from '../../InvestModal/types';
import { useAppContext } from '../../../contexts/AppContext';

const ResumeItemBig: React.SFC<ResumeItemProps> = ({ title, value }) => (
  <ResumeItemBoxBig>
    <p>{title}</p>
    <p>{value}</p>
  </ResumeItemBoxBig>
);

const Confirm = () => {
  const metamask = useWallet();
  const { loan, setStage, calculatedLoan }: any = useContext(ClaimRefundContext);
  const {
    web3Status: { account }
  }: any = useAppContext();
  const { id: loanAddress } = loan;

  const [loading, setLoading] = useState(false);
  const onConfirm = async () => {
    setLoading(true);

    try {
      const loanContract = await metamask.addContractByAddress('LoanContract', loanAddress);
      await loanContract.methods.withdrawRefund().send({
        from: account
      });
      setStage(Stages.Success);
    } catch (error) {
      console.error(error);
      setStage(Stages.Error);
    }
  };

  return (
    <>
      <Header>Claim Refund</Header>
      <ClaimFundsResume>
        <FlexSpacedLayout>
          <ResumeItemBig title="Invested amount" value={`${calculatedLoan.lenderAmount} DAI`} />
        </FlexSpacedLayout>
      </ClaimFundsResume>
      <ClaimButton loading={loading} onClick={onConfirm}>
        CLAIM
      </ClaimButton>
    </>
  );
};

export default Confirm;
