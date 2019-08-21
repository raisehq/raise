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
            loanRequests {
              principal
              maxAmount
              operatorFee
              termEndTimestamp
              netBalance
              auctionEnded
              auctionEndBlock
              interestRate
              borrowerDebt
              investorCount
            }
          }
        }`
    }
  };

  const request = await to(axiosRaw(config));

  return request.fold(
    () => Left(null),
    data => Right(data.data.data.users[0].loanRequests)
  );
};
