import React from 'react';
import { Content, Side, Line, Main, EmailInput } from './MyAccount.styles';
import { Icon, Button, Input } from 'semantic-ui-react';

const MyAccount = () => {
  return (
    <Main>
      <h1>My Account</h1>
      <Content>
        <Side>
          <h3>Profile</h3>
          <p>Edit and update your information.</p>
          <p>KYC status</p>
          <p>
            Account verified
            <Icon name="circle" />
          </p>
          <EmailInput>
            <p>Email</p>
            <Input />
          </EmailInput>
          <p>Username</p>
          <Input />
          <Button>Update account</Button>
        </Side>
        <Line />
        <Side>
          <h3>Change Password</h3>
          <p>Choose a new password and protect your account.</p>
          <p>Current password</p>
          <Input />
          <p>New password</p>
          <Input />
          <p>Repeat new password</p>
          <Input />
          <Button>Save</Button>
        </Side>
      </Content>
    </Main>
  );
};

export default MyAccount;
