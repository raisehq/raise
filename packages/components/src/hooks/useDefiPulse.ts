import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import axios from 'axios';

const request = (apiKey: string) =>
  `https://public.defipulse.com/api/GetRates${
    apiKey ? `?api-key=${apiKey}` : ''
  }`;

const useDefiPulse = (apiKey: string) => {
  const [lendingRates, setLendingRates] = useState([]);

  useAsyncEffect(async () => {
    try {
      const { data } = await axios.get(request(apiKey));
      setLendingRates(data);
    } catch (error) {}
  }, []);

  return lendingRates;
};

export default useDefiPulse;
