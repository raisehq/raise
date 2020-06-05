import { useEffect, useState } from 'react';
import useRouter from './useRouter';

const useKycTopBarVisibility = () => {
  const { history }: any = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      history.location.pathname.includes('/kyc') ||
      history.location.pathname.includes('/kyc-bloom') ||
      history.location.pathname.includes('/kyc-sumsub') ||
      history.location.pathname.includes('/verify-web3') ||
      history.location.pathname.includes('/create-loan') ||
      history.location.pathname === '/join'
    ) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [history.location.pathname]);

  return { visible };
};

export default useKycTopBarVisibility;
