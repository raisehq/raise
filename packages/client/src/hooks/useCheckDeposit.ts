import { useEffect, useState } from 'react';
import { checkDeposit } from '../services/blockchain';

const useCheckDeposit = ({ timeInterval = 10000 }) => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);

  const interval = () => {
    setTimeout(() => setCounter(counter + 1), timeInterval);
  };

  const check = async () => {
    try {
      const {
        id
      }: {
        id: string;
      } = await checkDeposit();

      !id && interval();
      return setPaid(!!id);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    check();
  }, [counter]);

  return { error, paid };
};

export default useCheckDeposit;
