import React, { useState, useEffect } from 'react';
import daggy from 'daggy';
import { match, ANY } from 'pampy';
import { DashboardTab, NoResults } from './Dashboard.styles';
import Auction from './Dashboard.Auction';
import Loan from './Dashboard.Loan';
import BorrowerLoan from './Dashboard.BorrowerLoan';
import BorrowerAuction from './Dashboard.BorrowerAuction';
import Suggested from './Dashboard.Loan';
import { getActiveAuctions } from '../../utils/loanUtils';
import useInterval from '../../hooks/useInterval';

const Card = {
  auction: Auction,
  loan: Loan,
  suggested: Suggested,
  borrowerLoan: BorrowerLoan,
  borrowerAuction: BorrowerAuction
};

const renderedLoans = (auctions, type) =>
  auctions.map(auction => {
    const conditions = [type, auction.state];
    const CardComponent = match(
      conditions,
      ['borrower', 0],
      () => BorrowerAuction,
      ['borrower', 1],
      () => BorrowerAuction,
      ['borrower', ANY],
      () => BorrowerLoan,
      ANY,
      () => Card[type]
    );
    return <CardComponent key={auction.id} auction={auction} />;
  });

const Auctions = daggy.taggedSum('Auctions', {
  Loading: [],
  Success: [{}],
  Empty: []
});

const Tab = ({ auctions, states, type }) => {
  const [filteredAuctions, setFilteredAuctions] = useState();
  const [tabState, setTabState]: any = useState(Auctions.Loading);

  useEffect(() => {
    if (!filteredAuctions) {
      setTabState(Auctions.Loading);
    } else if (filteredAuctions.length === 0) {
      setTabState(Auctions.Empty);
    } else {
      setTabState(Auctions.Success);
    }
  }, [filteredAuctions]);

  useInterval(() => {
    const suggested = getActiveAuctions(auctions, states);
    setFilteredAuctions(suggested);
  }, 1000);

  return tabState.cata({
    Loading: () => <DashboardTab.Pane loading />,
    Success: () => <DashboardTab.Pane>{renderedLoans(filteredAuctions, type)}</DashboardTab.Pane>,
    Empty: () => (
      <DashboardTab.Pane>
        <NoResults>No results</NoResults>
      </DashboardTab.Pane>
    )
  });
};

export default Tab;
