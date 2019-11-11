import React, { useState, useContext, useCallback } from 'react';
import { match } from 'pampy';
import { checkUsername } from '../../services/auth';
import { AppContext } from '../App';
import { Content, Side, Line, Main } from './MyAccount.styles';
import ProfileInfo from './components/ProfileInfo';
import UpdateUsername from './components/UpdateUsername';
import UpdatePassword from './components/UpdatePassword';

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
        details: { id, email, username: storedUsername, kyc_status }
      }
    }
  }: any = useContext(AppContext);

  const changeUsername = async value => {
    clearUser();
    setUsernameExists(false);
    setUsername(value);
    const userExists = await checkUsername(value);

    userExists.fold(
      res => {
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
    } catch {}
    // Reset
    changeUsername('');
  };

  const savePassword = async () => {
    try {
      await onUpdatePassword(id, { oldPassword, newPassword, newPasswordRepeat });
    } catch {}
    // Reset
    setOldPassword('');
    setNewPassword('');
    setNewPasswordRepeat('');
  };

  const profileProps = { email, kyc_status, storedUsername };
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

  return (
    <Main>
      <h1>My Account</h1>
      <Content>
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
      </Content>
    </Main>
  );
};

export default MyAccount;
