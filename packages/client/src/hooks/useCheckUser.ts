import LocalData from '../helpers/localData';
import { useEffect, useState } from 'react';
import { getUser } from '../services/auth';

const useCheckUser = (initUser: any, force?: boolean | undefined) => {
  const [isLogged, setLogged] = useState(false);
  const [user, setUser] = useState(initUser);

  const checkUser = async () => {
    try {
      const newUser = await getUser(user.id);
      setUser(newUser);
    } catch (error) {
      LocalData.remove('user');
      LocalData.remove('auth');
      setLogged(false);
    }
  };
  useEffect(() => {
    checkUser();
  }, [force || false]);
  return { isLogged, user };
};
export default useCheckUser;
