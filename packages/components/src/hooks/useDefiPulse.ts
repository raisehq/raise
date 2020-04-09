import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import axios from 'axios';

const request = (apiKey: string | null | undefined) =>
  `https://public.defipulse.com/api/GetRates${
    apiKey ? `?api-key=${apiKey}` : ''
  }`;

const useDefiPulse = (apiKey: string | null | undefined) => {
  const [lendingRates, setLendingRates] = useState([]);

  useAsyncEffect(async () => {
    try {
      const { data } = await axios.get(request(apiKey));
      setLendingRates(data);
    } catch (error) {
      console.error('[useDefiPulse] Error on set Lending Rates ');
    }
  }, []);

  return lendingRates;
};

export default useDefiPulse;
