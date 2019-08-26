import React from 'react';
import { DashboardTab, NoResults } from './Dashboard.styles';
import Auction from './Dashboard.Auction';
import Loan from './Dashboard.Loan';
import Suggested from './Dashboard.Loan';
import useActionState from './Dashboard.useAuctionState';

const Card = {
  auction: Auction,
  loan: Loan,
  suggested: Suggested
};

const Tab = ({ auctions, state, type }) => {
  const auctionsState: any = useActionState(auctions, state);
  const Component = Card[type];

  return auctionsState.cata({
    Loading: () => <DashboardTab.Pane loading />,
    Success: auctions => (
      <DashboardTab.Pane>
        {auctions.map(auction => (
          <Component key={auction.id} auction={auction} />
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
