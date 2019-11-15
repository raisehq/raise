import React from 'react';
import { KYCIcon, EmailBox, ReadTitle } from '../MyAccount.styles';
import { KycStatus } from '../../../commons/kycStatus';

const ProfileInfo = ({ email, kyc_status, storedUsername }) => {
  const kycStatus =
    kyc_status === null || kyc_status === undefined ? KycStatus.Error : KycStatus[kyc_status];
  return (
    <>
      <ReadTitle>KYC status</ReadTitle>
      <p>
        Account verified
        <KYCIcon name="circle" value={KycStatus[kycStatus]} />
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
