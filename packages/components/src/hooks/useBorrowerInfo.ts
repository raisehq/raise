import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import { findOne } from '../commons/butter';

interface Company {
  companyName: string;
  description: string;
  shortDescription: string;
  background: string;
  logo: string;
  slug: string;
}

const defaultCompany = {
  companyName: 'Auction',
  description: '',
  shortDescription: '',
  background: 'https://source.unsplash.com/372x120/?business',
  logo: 'https://static.herodev.es/images/logo.svg',
  slug: ''
};

const useBorrowerInfo = (butter: any, borrowerAddress: string) => {
  const [company, setCompany]: [Company, any] = useState(defaultCompany);

  useAsyncEffect(async () => {
    try {
      const response = await findOne(butter, 'companies', {
        'fields.ethereum_address': borrowerAddress
      });
      setCompany(response);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return company;
};
export default useBorrowerInfo;
