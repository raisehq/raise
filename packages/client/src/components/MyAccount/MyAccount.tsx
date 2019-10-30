import React, { useState, useContext, useCallback, useEffect } from 'react';
import { AppContext } from '../App';
import { match } from 'pampy';
import {
  Content,
  Side,
  Line,
  Main,
  KYCIcon,
  FormInput,
  EmailBox,
  Label,
  Submit,
  ReadTitle
} from './MyAccount.styles';
import { KycStatus } from '../../commons/kycStatus';

const MyAccount = () => {
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newAgainPassword, setNewAgainPassword] = useState('');

  const {
    store: {
      user: {
        details: { username: storedUsername }
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
        () => setNewAgainPassword(value)
      ),
    []
  );

  const saveUsername = () => {
    console.log('POST to save username', username);
  };
  const savePassword = () => {
    console.log('POST to save password', oldPassword, newPassword, newAgainPassword);
  };

  return (
    <Main>
      <h1>My Account</h1>
      <Content>
        <Side>
          <h3>Profile</h3>
          <p>Edit and update your information.</p>
          <ReadTitle>KYC status</ReadTitle>
          <p>
            Account verified
            <KYCIcon name="circle" value={KycStatus.Error} />
          </p>
          <EmailBox>
            <ReadTitle>Email</ReadTitle>
            <p>test@hero-fintech.com</p>
          </EmailBox>
          <Label>Username</Label>
          <FormInput name="username" value={username} onChange={updateState} />
          <Submit onClick={saveUsername}>Update account</Submit>
        </Side>
        <Line />
        <Side>
          <h3>Change Password</h3>
          <p>Choose a new password and protect your account.</p>
          <Label>Current password</Label>
          <FormInput
            name="old-password"
            placeholder="Type your current password"
            type="password"
            value={oldPassword}
            onChange={updateState}
          />
          <Label>New password</Label>
          <FormInput
            name="new-password"
            placeholder="Type your new password"
            type="password"
            value={newPassword}
            onChange={updateState}
          />
          <Label>Repeat new password</Label>
          <FormInput
            name="new-password-repeat"
            placeholder="Type again your new password"
            type="password"
            value={newAgainPassword}
            onChange={updateState}
          />
          <Submit onClick={savePassword}>Save</Submit>
        </Side>
      </Content>
    </Main>
  );
};

export default MyAccount;
