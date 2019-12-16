import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LinkWrap } from './Deposit.styles';
import { toWei } from 'web3-utils';
import { Link } from '../Link';
import { Grid } from 'semantic-ui-react';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { CardSized } from '../Layout/Layout.styles';
import { UI, UISteps, getViewResponse } from './Deposit.Response';
import useDepositContract from '../../hooks/useDepositContract';
import useWeb3 from '../../hooks/useWeb3';
import useHeroTokenContract from '../../hooks/useHeroTokenContract';
import AppContext from '../AppContext';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';
import LocalData from '../../helpers/localData';

const Deposit = () => {
  const {
    history,
    web3Status: { walletAccount, hasDeposit }
  }: any = useContext(AppContext);
  const [doingDeposit, setDoingDeposit] = useState(false);
  const [status, setStatus] = useState(UI.Deposit);
  const heroTokenContract = useHeroTokenContract();
  const depositContract = useDepositContract();
  const { web3 } = useWeb3();
  const tagManager = useGoogleTagManager('Deposit');

  useEffect(() => {
    if (LocalData.get('firstLogin') === 'first') {
      LocalData.set('firstLogin', 'firstDeposit');
    }
  }, []);

  if (!doingDeposit && status !== UI.Success && hasDeposit) {
    return <Redirect to="/" />;
  }

  const handleDeposit = async () => {
    try {
      setDoingDeposit(true);
      if (depositContract && heroTokenContract) {
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
      } else {
        console.error(' CONTRACTS ARE NOT ALOWED ', depositContract, heroTokenContract);
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
          {getViewResponse(status, handleDeposit, handleContinue, handleRetry)}
        </CardSized>
        <LinkWrap>
          <Link to="/">Do it later</Link>
        </LinkWrap>
      </Grid.Row>
    </>
  );
};

export default Deposit;
