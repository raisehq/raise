import React, { useState, useContext } from 'react';
import { Button } from '@raisehq/components';
import { Header, ClaimFundsResume, FlexSpacedLayout, RefundInfo } from '../ClaimRefund.styles';
import useWallet from '../../../hooks/useWallet';
import ClaimRefundContext from '../ClaimRefund.Context';
import Stages from '../ClaimRefund.stages';
import { useAppContext } from '../../../contexts/AppContext';
import { useRootContext } from '../../../contexts/RootContext';
import useGetCoin from '../../../hooks/useGetCoin';
import { ResumeItemBig } from './ResumeItemBig';

const Confirm = () => {
  const metamask = useWallet();
  const { loan, setStage, calculatedLoan }: any = useContext(ClaimRefundContext);
  const coin = useGetCoin(loan);
  const {
    web3Status: { account }
  }: any = useAppContext();
  const { followTx }: any = useRootContext();
  const { id: loanAddress } = loan;

  const [loading, setLoading] = useState(false);
  const onConfirm = async () => {
    setLoading(true);
    const methodId = loan.state === 1 ? 'withdrawRefund' : 'withdrawFundsUnlocked';

    try {
      const loanContract = await metamask.addContractByAddress('LoanContract', loanAddress);
      await followTx
        .watchTx(
          loanContract.methods[methodId]().send({
            from: account
          }),
          {
            id: methodId,
            vars: [calculatedLoan.lenderAmount, coin.value]
          },
          methodId
        )
        .on('tx_start', () => {
          setStage(Stages.Processing);
        });
    } catch (error) {
      console.error(error);
      setStage(Stages.Error);
    }
  };

  return (
    <>
      <ClaimFundsResume>
        <Header>Claim Refund</Header>
        <FlexSpacedLayout>
          <ResumeItemBig
            title="Invested amount"
            value={`${calculatedLoan.lenderAmount} ${coin && coin.text}`}
          />
        </FlexSpacedLayout>
        {loading && (
          <RefundInfo>
            Check your wallet and confirm the transaction to refund your investment.
          </RefundInfo>
        )}
      </ClaimFundsResume>
      <Button
        disabled={loading}
        onClick={onConfirm}
        text="REFUND"
        size="standard"
        fullWidth
        type="primary"
      />
    </>
  );
};

export default Confirm;
