import React from 'react';
import { DashboardTab, NoResults } from './Dashboard.styles';
import Auction from './Dashboard.Auction';
import useActionState from './Dashboard.useAuctionState';

const Tab = ({ auctions, state }) => {
  const auctionsState: any = useActionState(auctions, state);

  return auctionsState.cata({
    Loading: () => <DashboardTab.Pane loading />,
    Success: () => (
      <DashboardTab.Pane>
        {auctions.map(auction => (
          <Auction key={auction.id} auction={auction} />
        ))}
      </DashboardTab.Pane>
    ),
    Empty: () => (
      <DashboardTab.Pane>
        <NoResults>No results</NoResults>
      </DashboardTab.Pane>
    )
  });
};

export default Tab;
