import { useEffect, useState } from 'react';
import useRouter from './useRouter';

const useMenuVisibility = () => {
  const { history }: any = useRouter();
  const [visible, setVisible] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  useEffect(() => {
    if (
      history.location.pathname === '/' ||
      history.location.pathname === '/create-loan' ||
      history.location.pathname === '/dashboard' ||
      history.location.pathname.includes('/c') ||
      history.location.pathname.includes('/account') ||
      history.location.pathname === '/kyc' ||
      history.location.pathname === '/kyc-sumsub' ||
      history.location.pathname === '/kyc-bloom' ||
      history.location.pathname === '/kyc-success' ||
      history.location.pathname.includes('/verify-web3') ||
      history.location.pathname === '/deposit' ||
      history.location.pathname === '/investing'
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    if (
      history.location.pathname.includes('/verify-web3') ||
      history.location.pathname === '/deposit'
    ) {
      setVisibleMenu(false);
    } else {
      setVisibleMenu(true);
    }
  }, [history.location.pathname]);

  return { visible, visibleMenu };
};

export default useMenuVisibility;
