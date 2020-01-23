import { useEffect, useState, useContext } from 'react';
import AppContext from '../components/AppContext';

const useMenuVisibility = () => {
  const { history }: any = useContext(AppContext);
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
      history.location.pathname.includes('/verify-web3') ||
      history.location.pathname === '/deposit'
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
