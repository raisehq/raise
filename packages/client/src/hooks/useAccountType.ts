import { useRef } from 'react';

const accountType = {
  1: 'originator',
  2: 'lender'
};

const useAccountType = type => {
  const account = useRef(null);

  account.current = accountType[type];

  return account;
};

export default useAccountType;
