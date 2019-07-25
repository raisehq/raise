import LocalData from '../helpers/localData';

const { id, status, accounttype_id } = LocalData.getObj('auth') || {
  id: '',
  status: 0,
  accounttype_id: 0
};

const details =
  LocalData.getObj('user') ||
  JSON.stringify({
    id: '',
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    status: null,
    delete: null,
    birthday: '',
    phone: '',
    referral_code: '',
    referrer_code: ''
  });

const initialState = {
  config: {
    targetNetwork: 42,
    targetAddressId: 2
  },
  auth: {
    login: {
      error: false,
      reset: false,
      logged: false
    },
    newPassword: false,
    newPasswordError: false,
    id,
    status,
    accounttype_id
  },
  user: {
    details,
    addressTypes: [
      {
        id: 1,
        name: '',
        description: ''
      }
    ],
    address: [
      {
        address_type: 1,
        countr_id: '',
        created_on: '',
        data: {
          address: '',
          address2: '',
          city: '',
          country: {
            flag: '',
            key: '',
            label: '',
            value: ''
          },
          cp: ''
        },
        deleted: 0,
        id: ''
      }
    ],
    cryptoAddress: {
      address: null, // Set your address to bypass address check until backend work is done
      cryptoTypeId: 1,
      site: '',
      createdOn: ''
    }
  },
  kyc: {
    sended: false,
    error: false,
    previous: {
      statusId: 0,
      requestId: ''
    }
  },
  blockchain: {
    hasDeposit: null,
    hasKyc: null,
    error: '',
    referrals: null,
    totalReferralsCount: 0,
    totalBountyToWithdraw: 0
  }
};

export default initialState;
