import { AccountType } from '@raisehq/components/commons/accountType';

export type onSignin = {
  email: string;
  password: string;
};

export type onRecovery = {
  email: string;
};

export type onSignup = {
  username: string;
  email: string;
  password: string;
  country_id: string;
  accounttype_id: AccountType;
};

export type ValidateToken = {
  token: string;
};

export type UpdateToken = {
  token: string;
};

export type AddressType = {
  id: number;
  name: string;
  description: string;
};

export type AddressTypes = AddressType[];

export type Response = string | { data: any; success: boolean };

export type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  created_on: Date;
  userstatus_id: number;
  deleted: number;
  last_login: Date;
  referral_code: string;
  referrer_code: string;
};

export type GetUser = {
  userId: any;
};

export type Offer = {
  account_id: string;
  amount: string;
  id: string;
  loanrequest_id: string;
};

export type Loan = {
  account_id: string;
  createdOn: string;
  currency_id: number;
  deleted: number;
  expiryPeriod: string;
  id: string;
  interestRate: string;
  isSecurity: number;
  lastUpdate: null;
  loanTerm: string;
  loanpurposetype_id: number;
  loantype_id: number;
  maxloanAmount: string;
  minloanAmount: string;
  repaymentInterval: string;
  securityDescription: string;
  securityValue: string;
};

export type Store = {
  config: {
    targetNetwork: Number;
    targetAddressId: Number;
  };
  auth: {
    login: { error: boolean };
    id: string;
    status: number;
    type: number;
  };
  user: { details: any; addressTypes: any };
};

export type CheckStatus = {
  userId: string;
};

export type KycInformation = {
  address: string;
  address2: string;
  birthday: string;
  city: string;
  country: string;
  cp: string;
  employer: string;
  firstName: string;
  lastName: string;
  nationality: string;
  phone: string;
  q1: number;
  q2: number;
  q3: number;
};

type KycFiles = {
  back: string;
  front: string;
  selfie: string;
};

export type KycVerification = {
  files: KycFiles;
};

export type KycRegistration = {
  information: KycInformation;
  verification: KycVerification;
};

export type KycValidationStatusId = 0 | 1 | 2 | 3 | 4;

export type ResponseKycValidationProps = {
  error: boolean;
  statusId: KycValidationStatusId;
};

export type userStatus = 0 | 1 | 2 | 3 | 4 | 5;
export type accountTypes = 1 | 2;
export type getUserRouting = {
  path: string;
  accountType: accountTypes;
};
export type getPath = {
  auth: { status?: userStatus };
  type: accountTypes;
};
