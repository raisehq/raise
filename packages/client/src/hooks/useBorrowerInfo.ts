import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import { findOne } from '../helpers/butter';

interface Company {
  companyName: string;
  description: string;
  background: string;
  logo: string;
}

const defaultCompany = {
  companyName: 'Auction',
  description: '',
  background: 'https://source.unsplash.com/372x120/?business',
  logo: 'https://static.herodev.es/images/logo.svg'
};

const useBorrowerInfo = borrowerAddress => {
  const [company, setCompany]: [Company, any] = useState(defaultCompany);

  useAsyncEffect(async () => {
    try {
      const response = await findOne('companies', {
        'fields.ethereum_address': borrowerAddress
      });
      setCompany(response);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return company;
};
export default useBorrowerInfo;
