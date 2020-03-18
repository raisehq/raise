import { useState } from 'react';
import { calculateInterest } from '../utils/raiseUtils';
import useAsyncEffect from './useAsyncEffect';
import graphql from 'graphql.js';
import web3Utils from 'web3-utils';

const raiseGraph = graphql(
  'https://api.thegraph.com/subgraphs/name/raisehq/raise',
  {
    asJSON: true,
  }
);

const raiseLoansQuery = `query($currentUnix: Int) {
	loans( where: { interestRate_gt: 0, state: 0, auctionEndTimestamp_gt: $currentUnix } ) {
        state
        operatorFee
        interestRate
        principal
        termLength
        minInterestRate
        maxInterestRate
        auctionStartTimestamp
        auctionEndTimestamp
        id
	}
}`;

const average = (arr: any[]) => arr.reduce((p, c) => p + c, 0) / arr.length;

const getRaiseData = async () => {
  const raise = await raiseGraph(raiseLoansQuery)({
    currentUnix: Math.trunc(new Date().getTime() / 1000),
  });
  const raiseResponse = {
    supplyRate: average(
      raise.loans.map((auction: any) => calculateInterest(auction))
    ).toString(),
    name: 'Raise',
    image: 'raise',
    tvl: raise.loans.reduce(
      (total: any, { principal }: any) =>
        total +
        Number(web3Utils.fromWei(principal.toString().replace('.', ''))),
      0
    ),
    term: 'short-term',
    custodial: false,
    collateralized: false,
    enabled: true,
    description:
      'Raise is a loan marketplace that connects individuals with investment opportunities primarily in emerging countries.',
  };
  console.log(raiseResponse, raise.loans);
  return raiseResponse;
};

const useRaiseData = () => {
  const [raiseCompany, setRaiseCompany]: any = useState(null);

  useAsyncEffect(async () => {
    try {
      const data = await getRaiseData();
      setRaiseCompany(data);
    } catch (error) {}
  }, []);

  return raiseCompany;
};

export default useRaiseData;
