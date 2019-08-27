import React from 'react';
import Suggested from './Dashboard.Suggested';
import useAuctionState from './Dashboard.useAuctionState';
import { SuggestedContainer } from './Dashboard.styles';
import { InvestModal } from '../InvestModal'

const Suggesteds = ({ auctions }) => {
  const auctionsState: any = useAuctionState(auctions, 'all');

  return auctionsState.cata({
    Loading: () => <SuggestedContainer>loading</SuggestedContainer>,
    Success: () => (
      <SuggestedContainer>
        {auctions.slice(0, 10).map(auction => (
          <Suggested key={auction.id} auction={auction} cta={<InvestModal loan={auction} />} />
        ))}
      </SuggestedContainer>
    ),
    Empty: () => <SuggestedContainer>No Results</SuggestedContainer>
  });
};

export default Suggesteds;
