import axiosRaw from 'axios';
import { getGraphEndpoint, Right, Left, to } from '../utils';

export const getLiveAuctionsByAccount = async (address, network) => {
  const config: any = {
    url: getGraphEndpoint(network),
    method: 'POST',
    headers: {},
    data: {
      query: `
        {
          users(where:{address:"${address}"}) {
            loanRequests(orderBy: auctionEndTimestamp, orderDirection: desc) {
              state
              principal
              maxAmount
              operatorFee
              operatorBalance
              termEndTimestamp
              netBalance
              auctionEnded
              interestRate
              borrowerDebt
              investorCount
              id
              minimumReached
              auctionLength
              auctionStartTimestamp
              auctionEndTimestamp
              termLength
              loanWithdrawn
              loanRepaid
              maxInterestRate
            }
          }
        }`
    }
  };

  const request = await to(axiosRaw(config));

  return request.fold(
    () => Left(null),
    response => {
      if (response.data.errors) {
        return Left(response.data.errors)
      }
      return Right(response.data.data.users[0].loanRequests)
    }
  );
};

export const getSuggestedAuctions = async network => {
  const config: any = {
    url: getGraphEndpoint(network),
    method: 'POST',
    headers: {},
    data: {
      query: `
        {
          loans(orderBy: auctionStartTimestamp, orderDirection: desc, where: {state: 0}) {
            state
            principal
            maxAmount
            operatorFee
            operatorBalance
            termEndTimestamp
            netBalance
            auctionEnded
            interestRate
            borrowerDebt
            investorCount
            id
            minimumReached
            auctionLength
            auctionStartTimestamp
            auctionEndTimestamp
            termLength
            loanWithdrawn
            loanRepaid
            maxInterestRate
          }
        }`
    }
  };

  const request = await to(axiosRaw(config));

  return request.fold(
    () => Left(null),
    response => {
      if (response.data.errors) {
        return Left(response.data.errors)
      }
      return Right(response.data.data.loans)
    }
  );
};
