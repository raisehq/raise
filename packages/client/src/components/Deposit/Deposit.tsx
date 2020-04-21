import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { toWei, fromWei } from 'web3-utils';
import { tradeTokensForExactTokens } from '@uniswap/sdk';
import BigNumber from 'bignumber.js';
import get from 'lodash/get';
import { Experiment, Variant } from 'react-optimize';
import { isMobile } from 'react-device-detect';
import { Grid } from 'semantic-ui-react';
import { LinkWrap } from './Deposit.styles';
import { Link } from '../Link';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import { CardSized } from '../Layout/Layout.styles';
import { UI, UISteps, getViewResponse } from './Deposit.Response';
import useDepositContract from '../../hooks/useDepositContract';
import useWeb3 from '../../hooks/useWeb3';
import useHeroTokenContract from '../../hooks/useHeroTokenContract';
import useERC20BalancePooling from '../../hooks/useERC20BalancePooling';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';
import OnboardingProgressBar from '../OnboardingProgressBar';
import LocalData from '../../helpers/localData';

const EXPERIMENT_DEPOSIT_ID = process.env.REACT_APP_AB_TEST_SKIP_DEPOSIT;
const RAISE_MIN_BALANCE = 200;

const Deposit = () => {
  const {
    web3Status: { walletAccount, walletNetworkId, hasDeposit }
  }: any = useAppContext();
  const { history }: any = useRouter();
  const {
    followTx,
    store: {
      blockchain: { contracts: heroContracts }
    }
  }: any = useRootContext();
  const [pending, setPending] = useState(false);
  const [retries, setRetries] = useState(0);
  const [expectedPrice, setExpectedPrice] = useState(0);
  const getAddress = (netId, name) => get(heroContracts, `address.${netId}.${name}`);
  const [doingDeposit, setDoingDeposit] = useState(false);
  const [status, setStatus] = useState(UI.Deposit);
  const raiseTokenContract = useHeroTokenContract();
  const depositContract = useDepositContract();
  const raiseAddress = getAddress(walletNetworkId, 'HeroToken');
  const raiseAddressMainnet = getAddress(1, 'HeroToken');
  const daiAddressMainnet = getAddress(1, 'DAI');

  const { web3 } = useWeb3();
  const tagManager = useGoogleTagManager('Deposit');

  const raiseBalance = useERC20BalancePooling(web3, raiseAddress, walletAccount);

  const retrieveDAIPrice = async () => {
    const tradeInfo = await tradeTokensForExactTokens(
      daiAddressMainnet,
      raiseAddressMainnet,
      new BigNumber('200000000000000000000'),
      1
    );
    setExpectedPrice(Number(Number(fromWei(tradeInfo.inputAmount.amount.toString())).toFixed(2)));
  };

  useAsyncEffect(async () => {
    if (LocalData.get('firstLogin') === 'first') {
      LocalData.set('firstLogin', 'firstDeposit');
    }
    await retrieveDAIPrice();
  }, []);

  useEffect(() => {
    if (!doingDeposit && !hasDeposit) {
      if (raiseBalance < RAISE_MIN_BALANCE) {
        setStatus(UI.GetRaiseInfo);
      } else {
        setStatus(UI.Deposit);
      }
    }
  }, [retries, raiseBalance, doingDeposit, hasDeposit]);

  // Effect to detect if the transaction has pending or finished
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

  const onDeposit = async () => {
    try {
      setDoingDeposit(true);

      if (depositContract && raiseTokenContract && !pending) {
        const { BN } = web3.utils;
        tagManager.sendEvent(TMEvents.Click, 'deposit_attempt');

        setStatus(UI.Waiting(UISteps.Approve));
        const allowance = new BN(
          await raiseTokenContract.allowance(walletAccount, depositContract.address)
        );
        if (allowance.lt(new BN(toWei('200')))) {
          await raiseTokenContract.approveDeposit(walletAccount, 200);
        }
        setStatus(UI.Waiting(UISteps.Transaction));
        await depositContract.deposit(walletAccount);
        tagManager.sendEvent(TMEvents.Submit, 'deposit_success');

        setStatus(UI.Success);
      } else {
        console.error(
          '[DEPOSIT]',
          ' Contracts are not allowed ',
          depositContract,
          raiseTokenContract
        );
      }
    } catch (error) {
      tagManager.sendEvent(TMEvents.Submit, 'deposit_error');
      console.error('[DEPOSIT]', error);
      setStatus(UI.Error);
    }
  };

  const onContinue = async () => {
    const refMode = process.env.REACT_APP_REFERAL === 'true';

    if (history && refMode) {
      history.push('/referral');
    } else if (history && !refMode) {
      history.push('/');
    }
  };

  const onRetry = async () => {
    setRetries(r => r + 1);
    setDoingDeposit(false);
    setStatus(UI.Deposit);
  };

  const onGetRaise = async () => {
    tagManager.sendEvent(TMEvents.Click, 'uniswap_attempt');
    setStatus(UI.GetRaise);
  };

  // const onToDeposit = async () => {
  //   setStatus(UI.Deposit);
  // };

  // const onGetRaiseInfo = async () => {
  //   setStatus(UI.GetRaiseInfo);
  // };

  return (
    <>
      <OnboardingProgressBar step={2} isMobile={isMobile} />
      <Grid.Row>
        <CardSized centered>
          {getViewResponse(
            status,
            raiseBalance,
            expectedPrice,
            onDeposit,
            onContinue,
            onRetry,
            onGetRaise,
            pending
          )}
        </CardSized>
        {EXPERIMENT_DEPOSIT_ID && (
          <Experiment id={EXPERIMENT_DEPOSIT_ID}>
            <Variant id="0">{/* do not show nothing, as the original current version */}</Variant>
            <Variant id="1">
              <LinkWrap>
                <Link to="/">Do it later</Link>
              </LinkWrap>
            </Variant>
          </Experiment>
        )}
      </Grid.Row>
    </>
  );
};

export default Deposit;
