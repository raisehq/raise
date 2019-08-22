import React from 'react';
import { Button } from 'semantic-ui-react';
import Auction from './Dashboard.Auction';
import useAuctionState from './Dashboard.useAuctionState';
import { SuggestedContainer } from './Dashboard.styles';

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
            cta={<Button>INVEST</Button>}
          />
        ))}
      </SuggestedContainer>
    ),
    Empty: () => <SuggestedContainer>No Results</SuggestedContainer>
  });
};

export default Suggested;
