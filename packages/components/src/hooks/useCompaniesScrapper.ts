import { useState, useEffect } from 'react';
import map from 'lodash/map';
import { COMPANY_LOGOS } from '../commons/constants';
import useDefiPulse from './useDefiPulse';
import useRaiseData from './useRaiseData';

const defiPulseToCompany = (defiPulseData: any) => {
  if (defiPulseData.length) {
    // DAI is hardcoded to get DAI profits from other companies
    const daiData = defiPulseData.find(({ token: { name } }: any) => name === 'DAI');

    if (daiData) {
      const convertToCompanies: any = map(daiData.rates, ({ name, lend: { rate } }: any) => ({
        name,
        supplyRate: Number(Number(rate).toFixed(2)) / 100,
        enabled: true,
        logoUrl: COMPANY_LOGOS[name] || null
      }));
      return [...convertToCompanies];
    }
  }
  return [];
};

const useCompaniesScrapper = () => {
  const [companies, setCompanies]: any = useState([]);
  const defiPulseData: any[] = useDefiPulse(null);
  const raiseCompany = useRaiseData();

  useEffect(() => {
    if (defiPulseData.length && raiseCompany && !companies.length) {
      const defiPulseCompanies = defiPulseToCompany(defiPulseData);
      setCompanies([raiseCompany, ...defiPulseCompanies]);
    }
  }, [defiPulseData, raiseCompany, companies]);

  return companies;
};

export default useCompaniesScrapper;
