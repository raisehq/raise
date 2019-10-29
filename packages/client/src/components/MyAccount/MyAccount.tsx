import React from 'react';
import { Content, Side, Line, Main, KYCIcon, FormInput } from './MyAccount.styles';
import { Button } from 'semantic-ui-react';
import { KycStatus } from '../../commons/kycStatus';

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
            <KYCIcon name="circle" value={KycStatus.Error} />
          </p>
          <p>Email</p>
          <FormInput />
          <p>Username</p>
          <FormInput />
          <Button>Update account</Button>
        </Side>
        <Line />
        <Side>
          <h3>Change Password</h3>
          <p>Choose a new password and protect your account.</p>
          <p>Current password</p>
          <FormInput placeholder="Type your current password" />
          <p>New password</p>
          <FormInput placeholder="Type your new password" />
          <p>Repeat new password</p>
          <FormInput placeholder="Type again your new password" />
          <Button>Save</Button>
        </Side>
      </Content>
    </Main>
  );
};

export default MyAccount;
