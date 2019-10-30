import React from 'react';
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
  KycTitle
} from './MyAccount.styles';
import { KycStatus } from '../../commons/kycStatus';

const MyAccount = () => {
  return (
    <Main>
      <h1>My Account</h1>
      <Content>
        <Side>
          <h3>Profile</h3>
          <p>Edit and update your information.</p>
          <KycTitle>KYC status</KycTitle>
          <p>
            Account verified
            <KYCIcon name="circle" value={KycStatus.Error} />
          </p>
          <EmailBox>
            <p>Email</p>
            <p>test@hero-fintech.com</p>
          </EmailBox>
          <Label>Username</Label>
          <FormInput />
          <Submit>Update account</Submit>
        </Side>
        <Line />
        <Side>
          <h3>Change Password</h3>
          <p>Choose a new password and protect your account.</p>
          <Label>Current password</Label>
          <FormInput placeholder="Type your current password" />
          <Label>New password</Label>
          <FormInput placeholder="Type your new password" />
          <Label>Repeat new password</Label>
          <FormInput placeholder="Type again your new password" />
          <Submit>Save</Submit>
        </Side>
      </Content>
    </Main>
  );
};

export default MyAccount;
