import React, { useState, useContext, useCallback, useEffect } from 'react';
import { AppContext } from '../App';
import { match } from 'pampy';
import {
  Content,
  Side,
  Line,
  Main,
} from './MyAccount.styles';
import ProfileInfo from './components/ProfileInfo';
import UpdateUsername from './components/UpdateUsername';
import UpdatePassword from './components/UpdatePassword';

const MyAccount = () => {
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRepeat, setNewPasswordRepeat] = useState('');


  const {
    actions: {
      user: { onUpdateUser, onUpdatePassword }
    },
    store: {
      user: {
        updateUser: { message: userMessage, loading: userLoading },
        updatePassword: { message: passMessage, loading: passLoading },
        details: { id, email, username: storedUsername, kyc_status }
      }
    }
  }: any = useContext(AppContext);

  useEffect(() => {
    setUsername(storedUsername);
  }, [storedUsername]);

  const updateState = useCallback(
    (e, { value, name }) =>
      match(
        name,
        'username',
        () => setUsername(value),
        'old-password',
        () => setOldPassword(value),
        'new-password',
        () => setNewPassword(value),
        'new-password-repeat',
        () => setNewPasswordRepeat(value)
      ),
    []
  );

  const saveUsername = async () => {
    await onUpdateUser(id, { username });
  };
  const savePassword = async () => {
    await onUpdatePassword(id, { oldPassword, newPassword, newPasswordRepeat });
  };

  const profileProps = { email, kyc_status }
  const updateUsernameProps = { username, saveUsername, updateState, userMessage, loading: userLoading };
  const updatePasswordProps = { oldPassword, updateState, newPassword, newPasswordRepeat, savePassword, passMessage, loading: passLoading };

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
