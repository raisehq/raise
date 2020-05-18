import React, { useState, useEffect, lazy, Suspense } from 'react';
import daggy from 'daggy';
import BN from 'bn.js';
import useGetCoin from '../../hooks/useGetCoin';

const InvestState = lazy(() => import('./stages/InvestState'));
const ProcessingState = lazy(() => import('./stages/ProcessingState'));
const SuccessState = lazy(() => import('./stages/SuccessState'));

const UI = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  Success: []
});

interface IInvest {
  loan: any;
  userActivated: boolean;
  onClose?: any;
  fullInfo: boolean;
  isLogged: boolean;
}

const Invest: React.SFC<IInvest> = ({ loan, userActivated, onClose, fullInfo, isLogged }: any) => {
  const coin = useGetCoin(loan);
  const [stage, setStage] = useState(UI.Confirm);
  const [investment, setInvestment] = useState(0);
  const [inputTokenAmount, setInputTokenAmount] = useState<BN>(new BN('0'));
  const [selectedCoin, setCoin] = useState(coin?.text);

  useEffect(() => {
    // Reset
    setStage(UI.Confirm);
    setInvestment(0);
    setInputTokenAmount(new BN('0'));
    // Change loan
    if (loan) {
      if (userActivated) {
        setStage(UI.Confirm);
      }
    }
  }, [loan]);

  const getInvestAction = (current: any) =>
    current.cata({
      Confirm: () => (
        <InvestState
          loan={loan}
          loanCoin={coin}
          setStage={setStage}
          setInvestment={setInvestment}
          inputTokenAmount={inputTokenAmount}
          setInputTokenAmount={setInputTokenAmount}
          setCoin={setCoin}
          selectedCoin={selectedCoin}
          ui={UI}
          closeModal={onClose}
          userActivated={userActivated}
          fullInfo={fullInfo}
          isLogged={isLogged}
        />
      ),
      Processing: () => (
        <ProcessingState
          loan={loan}
          loanCoin={coin}
          investment={investment}
          inputTokenAmount={inputTokenAmount}
          ui={UI}
          setStage={setStage}
          selectedCoin={selectedCoin}
        />
      ),
      Success: () => <SuccessState setStage={setStage} ui={UI} closeModal={onClose} />
    });

  return (
    <>
      <Suspense fallback={<div>...</div>}>{getInvestAction(stage)}</Suspense>
    </>
  );
};

export default Invest;
