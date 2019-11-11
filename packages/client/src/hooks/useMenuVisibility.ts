import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../components/App';

const useMenuVisibility = () => {
  const { history }: any = useContext(AppContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      history.location.pathname === '/' ||
      history.location.pathname === '/create-loan' ||
      history.location.pathname === '/dashboard' ||
      history.location.pathname.includes('/borrowers') ||
      history.location.pathname.includes('/account') ||
      history.location.pathname === '/kyc'
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [history.location.pathname]);

  return visible;
};

export default useMenuVisibility;
