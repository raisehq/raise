import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { toWei } from 'web3-utils';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { CardSized } from '../Layout/Layout.styles';
import { UI, UISteps, getViewResponse } from './Deposit.Response';
import useDepositContract from '../../hooks/useDepositContract';
import useWeb3 from '../../hooks/useWeb3';
import useHeroTokenContract from '../../hooks/useHeroTokenContract';
import AppContext from '../AppContext';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';

const Deposit = () => {
  const {
    history,
    web3Status: { walletAccount, hasDeposit },
    followTx
  }: any = useContext(AppContext);

  const [pending, setPending] = useState(false);
  const [doingDeposit, setDoingDeposit] = useState(false);
  const [status, setStatus] = useState(UI.Deposit);
  const heroTokenContract = useHeroTokenContract();
  const depositContract = useDepositContract();
  const { web3 } = useWeb3();
  const tagManager = useGoogleTagManager('Deposit');
  useEffect(() => {
    const approvalFinished = followTx.hasPendingTx('approval');
    const depositFinished = followTx.hasPendingTx('deposit');

    if (approvalFinished || depositFinished) {
      setPending(true);
      followTx.on('finish_tx', hash => {
        if (
          followTx.getHash(approvalFinished) === hash ||
          followTx.getHash(depositFinished) === hash
        ) {
          setPending(false);
        }
      });
    } else {
      setPending(false);
    }
  }, []);
  if (!doingDeposit && status !== UI.Success && hasDeposit) {
    return <Redirect to="/" />;
  }

  const handleDeposit = async () => {
    try {
      setDoingDeposit(true);
      if (depositContract && heroTokenContract && !pending) {
        const { BN } = web3.utils;
        tagManager.sendEvent(TMEvents.Click, 'deposit_attempt');
        setStatus(UI.Waiting(UISteps.Approve));
        const allowance = new BN(
          await heroTokenContract.allowance(walletAccount, depositContract.address)
        );
        if (allowance.lt(new BN(toWei('200')))) {
          await heroTokenContract.approveDeposit(walletAccount, 200);
        }
        setStatus(UI.Waiting(UISteps.Transaction));
        await depositContract.deposit(walletAccount);
        tagManager.sendEvent(TMEvents.Submit, 'deposit_success');
        setStatus(UI.Success);
      }
    } catch (error) {
      tagManager.sendEvent(TMEvents.Submit, 'deposit_error');
      console.error(error);
      setStatus(UI.Error);
    }
  };

  const handleContinue = async () => {
    const refMode = process.env.REACT_APP_REFERAL === 'true';

    if (history && refMode) {
      history.push('/referral');
    } else if (history && !refMode) {
      history.push('/');
    }
  };

  const handleRetry = async () => {
    setStatus(UI.Deposit);
  };

  return (
    <>
      <OnboardingProgressBar step={2} isMobile={isMobile} />
      <Grid.Row>
        <CardSized centered>
          {getViewResponse(status, handleDeposit, handleContinue, handleRetry, pending)}
        </CardSized>
      </Grid.Row>
    </>
  );
};

export default Deposit;
