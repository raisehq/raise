import { useEffect } from 'react';
import LocalData from '../helpers/localData';
import useRouter from './useRouter';
import useCookie from './useCookie';

const blackList = ['/join', '/verify-web3'];

const passBlackList = (pathToCheck: string) =>
  !!pathToCheck && !blackList.some((blackPath) => pathToCheck.includes(blackPath));

const useLoginUrlReminder = () => {
  const [savedPath, setPath] = useCookie('savedPath', '');
  const {
    push,
    location: { pathname, search }
  } = useRouter();
  const fullPath = `${pathname}${search}`;

  const logged = !!LocalData.get('auth');

  useEffect(() => {
    if (!logged) {
      if (fullPath !== savedPath && passBlackList(fullPath)) {
        setPath(fullPath);
      }
      return;
    }
    if (logged && savedPath && savedPath.includes('/') && fullPath !== savedPath) {
      console.log('pusshing', fullPath, savedPath);
      setPath('');
      push(savedPath);
    }
  }, [logged, savedPath, pathname, search]);
};

export default useLoginUrlReminder;
