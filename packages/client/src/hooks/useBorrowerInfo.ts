import { useState } from 'react';
import useAsyncEffect from './useAsyncEffect';
import { findOne } from '../helpers/butter';

const APP_URL = process.env.REACT_APP_HOST_URL;
const APP_STATIC = process.env.REACT_APP_HOST_IMAGES;
interface Company {
  companyName: string;
  description: string;
  shortDescription: string;
  background: string;
  logo: string;
  slug: string;
  route: string;
}

const defaultCompany = {
  companyName: 'Auction',
  description: '',
  shortDescription: '',
  background: 'https://source.unsplash.com/372x120/?business',
  logo: `${APP_STATIC}/images/logo.svg`,
  slug: '',
  route: ''
};

const useBorrowerInfo = borrowerAddress => {
  const [company, setCompany]: [Company, any] = useState(defaultCompany);

  useAsyncEffect(async () => {
    try {
      const response = await findOne('companies', {
        'fields.ethereum_address': borrowerAddress
      });
      const slug = `${APP_URL}/c/${response.slug}`;
      const route = `/c/${response.slug}`;

      setCompany({ ...company, ...response, slug, route });
    } catch (error) {
      // Reminder: Missing companies in Kovan testnet network shows 404 errors
      // console.error(error);
    }
  }, []);
  return company;
};

export default useBorrowerInfo;
