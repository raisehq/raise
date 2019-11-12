import React, { useState, useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { toWei } from 'web3-utils';
import { StyledAddress as Web3Address } from './Deposit.styles';
import { CardSized, CardContent } from '../Layout/Layout.styles';
import { UI, UISteps, getViewResponse } from './Deposit.Response';
import useDepositContract from '../../hooks/useDepositContract';
import useWeb3 from '../../hooks/useWeb3';
import useHeroTokenContract from '../../hooks/useHeroTokenContract';
import AppContext from '../AppContext';
// eslint-disable-next-line
import useGoogleTagManager from '../../hooks/useGoogleTagManager';

const Deposit = () => {
  const {
    history,
    store: {
      user: {
        // eslint-disable-next-line
        details: { id }
      }
    },
    web3Status: { walletAccount, hasDeposited }
  }: any = useContext(AppContext);
  const [status, setStatus] = useState(UI.Deposit);
  const heroTokenContract = useHeroTokenContract();
  const depositContract = useDepositContract();
  const { getWeb3 } = useWeb3();
  const web3 = getWeb3();
  useEffect(() => {
    if (status !== UI.Success && hasDeposited) {
      setStatus(UI.Success);
    }
  }, [status, hasDeposited]);

  const TagManager = label => {
    return useGoogleTagManager(
      id,
      'www.raise.it',
      'Deposit',
      '/deposit',
      'DepositPage',
      'dataLayer',
      'Submit',
      label
    );
  };

  const handleDeposit = async () => {
    try {
      if (depositContract && heroTokenContract) {
        const { BN } = web3.utils;
        TagManager('Deposit Attempt');
        setStatus(UI.Waiting(UISteps.Approve));
        const allowance = new BN(
          await heroTokenContract.allowance(walletAccount, depositContract.address)
        );
        if (allowance.lt(new BN(toWei('200')))) {
          await heroTokenContract.approveDeposit(walletAccount, 200);
        }
        setStatus(UI.Waiting(UISteps.Transaction));
        await depositContract.deposit(walletAccount);
        TagManager('Deposit Success');
        setStatus(UI.Success);
      } else {
        console.error(' CONTRACTS ARE NOT ALOWED ', depositContract, heroTokenContract);
      }
    } catch (error) {
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
    <Grid.Row>
      <CardSized centered>
        <CardContent extra>
          <Web3Address />
        </CardContent>
        {getViewResponse(status, handleDeposit, handleContinue, handleRetry)}
      </CardSized>
    </Grid.Row>
  );
};

export default Deposit;
