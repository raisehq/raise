import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { toWei } from 'web3-utils';
import get from 'lodash/get';
import { Experiment, Variant } from "react-optimize";
import { LinkWrap } from './Deposit.styles';
import { Link } from '../Link';
import { Grid } from 'semantic-ui-react';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { CardSized } from '../Layout/Layout.styles';
import { UI, UISteps, getViewResponse } from './Deposit.Response';
import useDepositContract from '../../hooks/useDepositContract';
import useWeb3 from '../../hooks/useWeb3';
import useHeroTokenContract from '../../hooks/useHeroTokenContract';
import retrieveERC20Balance from '../../hooks/retrieveERC20Balance';
import AppContext from '../AppContext';
import OnboardingProgressBar from '../OnboardingProgressBar';
import { isMobile } from 'react-device-detect';
import LocalData from '../../helpers/localData';

const EXPERIMENT_DEPOSIT_ID = process.env.REACT_APP_AB_TEST_SKIP_DEPOSIT;



const Deposit = () => {
  const {
    history,
    web3Status: { walletAccount, walletNetworkId, hasDeposit },
    store: { blockchain: { contracts: heroContracts } }
  }: any = useContext(AppContext);
  const getAddress = (netId, name) => get(heroContracts, `address.${netId}.${name}`)
  const [doingDeposit, setDoingDeposit] = useState(false);
  const [status, setStatus] = useState(UI.Deposit);
  const RaiseTokenContract = useHeroTokenContract();
  const depositContract = useDepositContract();
  const RaiseAddress = getAddress(walletNetworkId, 'HeroToken');
  const { web3 } = useWeb3();
  const tagManager = useGoogleTagManager('Deposit');
  const raiseBalance = retrieveERC20Balance(web3, RaiseAddress, walletAccount)

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
      if (depositContract && RaiseTokenContract) {
        const { BN } = web3.utils;
        tagManager.sendEvent(TMEvents.Click, 'deposit_attempt');
        setStatus(UI.Waiting(UISteps.Approve));
        const allowance = new BN(
          await RaiseTokenContract.allowance(walletAccount, depositContract.address)
        );
        if (allowance.lt(new BN(toWei('200')))) {
          await RaiseTokenContract.approveDeposit(walletAccount, 200);
        }
        setStatus(UI.Waiting(UISteps.Transaction));
        await depositContract.deposit(walletAccount);
        tagManager.sendEvent(TMEvents.Submit, 'deposit_success');
        setStatus(UI.Success);
      } else {
        console.error(' CONTRACTS ARE NOT ALOWED ', depositContract, RaiseTokenContract);
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
          {getViewResponse(status, raiseBalance, handleDeposit, handleContinue, handleRetry)}
        </CardSized>
        {EXPERIMENT_DEPOSIT_ID && (
          <Experiment id={EXPERIMENT_DEPOSIT_ID}>
            <Variant id="0">
              {/* do not show nothing, as the original current version*/}
            </Variant>
            <Variant id="1">
              <LinkWrap>
                <Link to="/">Do it later</Link>
              </LinkWrap>
            </Variant>
          </Experiment>)
        }
      </Grid.Row>
    </>
  );
};

export default Deposit;
