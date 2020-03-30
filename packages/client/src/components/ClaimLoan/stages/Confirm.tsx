import React, { useState, useContext } from 'react';
import { Loader } from 'semantic-ui-react';
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
import { useAppContext } from '../../../contexts/AppContext';
import { useRootContext } from '../../../contexts/RootContext';
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
  const metamask = useWallet();
  const { loan, setStage, calculatedLoan }: any = useContext(ClaimLoanContext);
  const coin = useGetCoin(loan);
  const {
    web3Status: { walletAccount: account }
  }: any = useAppContext();
  const { followTx }: any = useRootContext();
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
        {
          id: 'withdrawLoan',
          vars: [calculatedLoan.netBalance, coin.value]
        }
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
          <ResumeItem
            title="Loan Amount"
            value={`${calculatedLoan.principal} ${coin && coin.text}`}
          />
          <ResumeItem
            title="System fee"
            value={`${calculatedLoan.systemFees} ${coin && coin.text}`}
          />
          <ResumeItemBig
            title="Net loan proceeds"
            value={`${calculatedLoan.netBalance} ${coin && coin.text}`}
          />
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
