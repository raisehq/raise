import * as Cookies from 'js-cookie';
import LocalData from '../helpers/localData';

import { isSupportedBrowser, parseNetwork } from '../utils';
// import { NULL_ADDRESS } from '../commons/constants';
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
    referral_code: '',
    referrer_code: '',
    kyc_status: null
  });

const initialState = {
  config: {
    menu: false,
    isSupportedBrowser: isSupportedBrowser(),
    networkId: parseInt(process.env.REACT_APP_DEFAULT_NETWORK_ID || '1', 10),
    network: parseNetwork(parseInt(process.env.REACT_APP_DEFAULT_NETWORK_ID || '1', 10))
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
    updateUser: {
      message: '',
      loading: false
    },
    updatePassword: {
      message: '',
      loading: false
    },
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
      cryptotypeId: null,
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
    totalBountyToWithdraw: 0,
    contracts: null,
    web3: null
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
