import React, { useContext, useState } from 'react';
import {
  Header,
  ClaimButton,
  ClaimFundsResume,
  FlexSpacedLayout,
  ResumeItemBoxBig,
  ResumeItemBox
} from '../ClaimLoan.styles';
import useWallet from '../../../hooks/useWallet';
import { ClaimLoanContext, Stages } from '../ClaimLoan';
import { ResumeItemProps } from '../../InvestModal/types';
import { Loader } from 'semantic-ui-react';
import AppContext from '../../AppContext';

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
  const metamask = useWallet();
  const { loan, setStage, calculatedLoan }: any = useContext(ClaimLoanContext);
  const {
    web3Status: { account },
    followTx
  }: any = useContext(AppContext);
  const { id: loanAddress } = loan;

  const [loading, setLoading] = useState(false);
  const onConfirm = async () => {
    setLoading(true);

    try {
      const loanContract = await metamask.addContractByAddress('LoanContract', loanAddress);
      await followTx.watchTx(
        loanContract.methods.withdrawLoan().send({
          from: account
        }),
        'withdrawLoan',
        [calculatedLoan.netBalance]
      );
      setStage(Stages.Success);
    } catch (error) {
      console.error(error);
      setStage(Stages.Error);
    }
  };

  return (
    <>
      <Header>Claim funds</Header>
      <ClaimFundsResume>
        <FlexSpacedLayout>
          <ResumeItem title="Loan Amount" value={`${calculatedLoan.principal} DAI`} />
          <ResumeItem title="System fee" value={`${calculatedLoan.systemFees} DAI`} />
          <ResumeItemBig title="Net loan proceeds" value={`${calculatedLoan.netBalance} DAI`} />
        </FlexSpacedLayout>
      </ClaimFundsResume>
      <Loader active inverted />
      <ClaimButton loading={loading} onClick={onConfirm}>
        CLAIM
      </ClaimButton>
    </>
  );
};

export default Confirm;
