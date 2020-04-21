import React from 'react';
import { KYCIcon, EmailBox, ReadTitle } from '../MyAccount.styles';
import { KycStatus } from '../../../commons/kycStatus';

const ProfileInfo = ({ email, kyc_status: kycStatus, storedUsername }: any) => {
  const kycStatusEn = kycStatus === null || kycStatus === undefined ? KycStatus.Error : kycStatus;

  return (
    <>
      <ReadTitle>KYC status</ReadTitle>
      <p>
        {kycStatusEn !== KycStatus.Completed ? 'Account not verified' : 'Account verified'}
        <KYCIcon name="circle" value={kycStatusEn} />
      </p>
      <EmailBox>
        <ReadTitle>Email</ReadTitle>
        <p>{email}</p>
        <ReadTitle>Username</ReadTitle>
        <p>{storedUsername}</p>
      </EmailBox>
    </>
  );
};

export default ProfileInfo;
