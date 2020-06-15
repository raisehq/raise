import React, { useState, useCallback, useEffect } from 'react';
import { match } from 'pampy';
import { ReferralProgram, Button } from '@raisehq/components';
import { checkUsername } from '../../services/auth';
import useGetCoinByAddress from '../../hooks/useGetCoinByAddress';
import useRouter from '../../hooks/useRouter';
import {
  Content,
  Side,
  Line,
  Main,
  AccountInfo,
  MyActivityWrapper,
  ReferralWrapper
} from './MyAccount.styles';
import ProfileInfo from './components/ProfileInfo';
import UpdateUsername from './components/UpdateUsername';
import UpdatePassword from './components/UpdatePassword';
import { useRootContext } from '../../contexts/RootContext';
import { MyActivity } from '../Dashboard';
import useWallet from '../../hooks/useWallet';
import { getHost } from '../../utils/index';
import { useAppContext } from '../../contexts/AppContext';
import { fromDecimal } from '../../utils/web3-utils';
// import Queryies from '../../helpers/queryies';
import {
  ClaimFundsGenericModal,
  ClaimFundsGenericProvider,
  ClaimFundsGenericButton
} from '../ClaimFundsGeneric';

const MyAccount = () => {
  const [usernameExists, setUsernameExists] = useState(false);
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRepeat, setNewPasswordRepeat] = useState('');
  const [bounty, setBounty]: any = useState();

  const {
    actions: {
      user: { onUpdateUser, onUpdatePassword, clearUser, clearPass },
      blockchain: { fetchReferralTrackerInfo, fetchReferrals }
    },
    store: {
      user: {
        updateUser: { message: userMessage, loading: userLoading },
        updatePassword: { message: passMessage, loading: passLoading },
        details: {
          id,
          email,
          username: storedUsername,
          kyc_status: kycStatus,
          referral_code: RefCode
        }
      },
      config: { network, networkId },
      blockchain: { totalReferralsCount, totalBountyToWithdraw, referralTokenAddress, contracts }
    },
    followTx
  }: any = useRootContext();
  const {
    web3Status: { account }
  }: // webSocket: { webSocket }
  any = useAppContext();
  const metamask = useWallet();
  const { history }: any = useRouter();

  const coin = useGetCoinByAddress(referralTokenAddress);

  useEffect(() => {
    fetchReferrals(network);
    fetchReferralTrackerInfo(network);
  }, [network]);

  // @ts-ignore
  // eslint-disable-next-line consistent-return
  // useEffect(() => {
  //   const { query, subscriptionName } = Queryies.subscriptions.userReferral;
  //   const subscriptionNameUnique = `${subscriptionName}_${account}`;
  //   if (webSocket) {
  //     const variables = {
  //       address: account
  //     };
  //     const callback = onFetchReferralsSubscription;
  //     webSocket.subscribe(query, variables, subscriptionNameUnique, callback);
  //   }

  //   return () => {
  //     webSocket.unsubscribe(subscriptionNameUnique);
  //   };
  // }, [webSocket, account]);

  useEffect(() => {
    const parsedBountyToWithdraw: any = Number(fromDecimal(totalBountyToWithdraw, coin.decimals));
    setBounty(parsedBountyToWithdraw);
  }, [coin, totalBountyToWithdraw]);

  const withdrawBounty = () => {
    if (kycStatus !== 3) {
      return (
        <Button
          disabled={false}
          onClick={() => history.push('/kyc')}
          idAttr="withdraw-referral-bonus"
          text="Verify Account"
          type="primary"
          size="medium"
          fullWidth
        />
      );
    }

    if (bounty) {
      return (
        <ClaimFundsGenericButton buttonText={`Withdraw ${bounty} ${coin.value}`} disabled={false} />
      );
    }

    return <ClaimFundsGenericButton buttonText="Nothing to withdraw" disabled />;
  };

  const confirmContractAction = async (changeStage) => {
    try {
      const { ReferralTracker } = contracts.address[networkId];
      const loanContract = await metamask.addContractByAddress('ReferralTracker', ReferralTracker);
      await followTx
        .watchTx(
          loanContract.methods.withdraw(account).send({
            from: account
          }),
          {
            id: 'referralWithdraw',
            vars: [bounty, coin.value]
          },
          'referralWithdraw'
        )
        .on('tx_start', () => {
          changeStage();
        });
    } catch (error) {
      throw error;
    }
  };

  const getCopies = () => {
    return {
      confirm: {
        header: 'Claim Referral Bounty',
        resume: {
          title: 'Bounty to withdraw',
          value: `${bounty} ${coin.text}`
        },
        info: 'Check your wallet and confirm the transaction to claim your bounty.',
        buttonText: 'CLAIM'
      },
      processing: {
        header: 'Claim Referral Bounty',
        resume: {
          title: 'Bounty to withdraw',
          value: `${bounty} ${coin.text}`
        }
      }
    };
  };

  const changeUsername = async (value) => {
    clearUser();
    setUsernameExists(false);
    setUsername(value);
    const userExists = await checkUsername(value);

    userExists.fold(
      () => {
        setUsernameExists(true);
      },
      () => {
        setUsernameExists(false);
      }
    );
  };

  const updateState = useCallback(
    (e, { value, name }) =>
      match(
        name,
        'username',
        () => changeUsername(value),
        'old-password',
        () => {
          clearPass();
          setOldPassword(value);
        },
        'new-password',
        () => {
          clearPass();
          setNewPassword(value);
        },
        'new-password-repeat',
        () => {
          clearPass();
          setNewPasswordRepeat(value);
        }
      ),
    []
  );

  const saveUsername = async () => {
    try {
      await onUpdateUser(id, { username });
    } catch (error) {
      console.error('[saveUsername] Error: ', error);
    }
    // Reset
    changeUsername('');
  };

  const savePassword = async () => {
    try {
      await onUpdatePassword(id, { oldPassword, newPassword, newPasswordRepeat });
    } catch (error) {
      console.error('[savePassword] Error: ', error);
    }
    // Reset
    setOldPassword('');
    setNewPassword('');
    setNewPasswordRepeat('');
  };

  const profileProps = { email, kyc_status: kycStatus, storedUsername };
  const updateUsernameProps = {
    username,
    storedUsername,
    usernameExists,
    saveUsername,
    updateState,
    userMessage,
    loading: userLoading
  };
  const updatePasswordProps = {
    oldPassword,
    updateState,
    newPassword,
    newPasswordRepeat,
    savePassword,
    passMessage,
    loading: passLoading
  };
  const REFERAFRIEND = `${getHost('APP')}/join?referralCode`;
  const shareLink = `${REFERAFRIEND}=${RefCode || ''}`;

  return (
    <Main>
      {RefCode && (
        <ReferralWrapper>
          <ClaimFundsGenericProvider>
            <ClaimFundsGenericModal
              confirmContractAction={confirmContractAction}
              methodId="referralWithdraw"
              copies={getCopies()}
              onSuccessAction={() => fetchReferrals(network)}
            />
            <ReferralProgram
              totalCount={totalReferralsCount || 0}
              shareLink={shareLink}
              withdrawCTA={withdrawBounty()}
            />
          </ClaimFundsGenericProvider>
        </ReferralWrapper>
      )}
      <h1>My Account</h1>
      <Content>
        <AccountInfo>
          <Side>
            <h3>Profile</h3>
            <p>Edit and update your information.</p>
            <ProfileInfo {...profileProps} />
            <UpdateUsername {...updateUsernameProps} />
          </Side>
          <Line />
          <Side>
            <UpdatePassword {...updatePasswordProps} />
          </Side>
        </AccountInfo>
        <MyActivityWrapper>
          <MyActivity />
        </MyActivityWrapper>
      </Content>
    </Main>
  );
};

export default MyAccount;
