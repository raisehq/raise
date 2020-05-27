import { useEffect, useState } from 'react';
import useRouter from './useRouter';

const useMenuVisibility = () => {
  const { history }: any = useRouter();
  const [visible, setVisible] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);

  useEffect(() => {
    if (
      history.location.pathname === '/' ||
      history.location.pathname.includes('/create-loan') ||
      history.location.pathname.includes('/dashboard') ||
      history.location.pathname.includes('/c') ||
      history.location.pathname.includes('/account') ||
      history.location.pathname.includes('/listings') ||
      history.location.pathname.includes('/kyc') ||
      history.location.pathname.includes('/verify-web3') ||
      history.location.pathname.includes('/investing') ||
      history.location.pathname.includes('investmentopportunity') ||
      history.location.pathname.includes('buy-crypto')
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
