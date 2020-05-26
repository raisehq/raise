import { useEffect } from 'react';
import LocalData from '../helpers/localData';
import useRouter from './useRouter';
import useCookie from './useCookie';

const useLoginUrlReminder = () => {
  const [savedPath, setPath] = useCookie('savedPath', '');
  const {
    push,
    location: { pathname, search }
  } = useRouter();

  const logged = !!LocalData.get('auth');

  useEffect(() => {
    if (!logged) {
      const fullPath = `${pathname}${search}`;
      if (fullPath !== savedPath) {
        setPath(`${pathname}${search}`);
      }
      return;
    }
    if (logged && savedPath && savedPath.includes('/')) {
      setPath('');
      push(savedPath);
    }
  }, [logged, savedPath, pathname, search]);
};

export default useLoginUrlReminder;
