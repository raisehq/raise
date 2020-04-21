import { fromWei } from 'web3-utils';

const stringUnixToDate = (stringUnix: any) =>
  new Date(Number(stringUnix) * 1000);

export const isAuctionExpired = ({ auctionEndTimestamp }: any) =>
  new Date() > stringUnixToDate(auctionEndTimestamp);

export const calculateInterest = (auction: any) => {
  const nowTimestamp = Date.now() / 1000;
  const maxInterestRate =
    Number(fromWei(auction.maxInterestRate.toString())) / 100;
  const minInterestRate = auction.minInterestRate
    ? Number(fromWei(auction.minInterestRate.toString())) / 100
    : 0;

  let interest = 0;
  if (auction.state === 0 && !isAuctionExpired(auction)) {
    interest =
      (maxInterestRate - minInterestRate) *
        ((nowTimestamp - auction.auctionStartTimestamp) /
          (auction.auctionEndTimestamp - auction.auctionStartTimestamp)) +
      minInterestRate;
  } else if (auction.state === 2 || auction.state === 4) {
    interest = maxInterestRate;
  } else {
    interest = maxInterestRate;
  }

  return interest * 12;
};
