import * as Cookies from 'js-cookie';
import LocalData from '../helpers/localData';

const authCookie = Cookies.get('auth');
const userCookie = Cookies.get('user');

if (authCookie || userCookie) {
  LocalData.setObj('auth', JSON.parse(authCookie));
  LocalData.setObj('user', JSON.parse(userCookie));

  Cookies.remove('auth', {
    path: '/',
    domain: process.env.REACT_APP_COOKIE_DOMAIN
  });
  Cookies.remove('user', {
    path: '/',
    domain: process.env.REACT_APP_COOKIE_DOMAIN
  });
}

const { id, status, accounttypeId } = LocalData.getObj('auth') || {
  id: '',
  status: 0,
  accounttypeId: 0
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
    referralCode: '',
    referrerCode: ''
  });

const initialState = {
  config: {
    menu: false,
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
    accounttypeId
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
    cryptoAddress: {
      address: null, // Set your address to bypass address check until backend work is done
      cryptoTypeId: 1,
      site: '',
      createdOn: ''
    }
  },
  kyc: {
    token: null,
    verified: false
  },
  blockchain: {
    hasDeposit: null,
    hasKyc: null,
    error: '',
    referrals: null,
    totalReferralsCount: 0,
    totalBountyToWithdraw: 0
  },
  loan: {
    auctions: null,
    suggested: null,
    lenderInvestments: null,
    active: []
  },
  dai: {
    balance: '0.00'
  }
};

export default initialState;
