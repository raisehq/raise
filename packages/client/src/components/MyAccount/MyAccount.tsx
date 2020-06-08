import React, { useState, useCallback } from 'react';
import { match } from 'pampy';
import { ReferralProgram } from '@raisehq/components';
import { checkUsername } from '../../services/auth';
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

import { getHost } from '../../utils/index';

const MyAccount = () => {
  const [usernameExists, setUsernameExists] = useState(false);
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRepeat, setNewPasswordRepeat] = useState('');

  const {
    actions: {
      user: { onUpdateUser, onUpdatePassword, clearUser, clearPass }
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
      }
    }
  }: any = useRootContext();

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
  const REFERRAL_FEATURE_FLAG = process.env.REACT_APP_REFERRAL_FEATURE_FLAG === 'true';

  return (
    <Main>
      {REFERRAL_FEATURE_FLAG && (
        <ReferralWrapper>
          <ReferralProgram totalCount="0" shareLink={shareLink} />
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
