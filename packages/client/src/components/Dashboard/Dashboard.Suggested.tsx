import React from 'react';
import Auction from './Dashboard.Auction';
import useAuctionState from './Dashboard.useAuctionState';
import { SuggestedContainer } from './Dashboard.styles';
import { InvestModal }  from '../InvestModal'

const Suggested = ({ auctions }) => {
  const auctionsState: any = useAuctionState(auctions, 'all');

  return auctionsState.cata({
    Loading: () => <SuggestedContainer>loading</SuggestedContainer>,
    Success: () => (
      <SuggestedContainer>
        {auctions.slice(0, 3).map(auction => (
          <Auction
            key={auction.id}
            auction={auction}
            cta={<InvestModal loan={auction} />}
          />
        ))}
      </SuggestedContainer>
    ),
    Empty: () => <SuggestedContainer>No Results</SuggestedContainer>
  });
};

export default Suggested;
