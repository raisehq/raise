import React, { useState } from 'react';
import Suggested from './Dashboard.Suggested';
import useAuctionState, { getActiveAuctions } from './Dashboard.useAuctionState';
import { SuggestedContainer, NoResults } from './Dashboard.styles';
import { InvestModal } from '../InvestModal';
import useInterval from '../../hooks/useInterval';

const Suggesteds = ({ auctions, states }) => {
  const [suggestedAuctions, setSuggestedAuctions] = useState([]);

  useInterval(() => {
    const suggested: any[] = filterAuctions(auctions, states);
    setAuctionsState(aStates);
  }, 1000);

  return auctionsState.cata({
    Loading: () => <SuggestedContainer>loading</SuggestedContainer>,
    Success: () => (
      <SuggestedContainer>
        {suggestedAuctions.slice(0, 3).map(auction => (
          <Suggested key={auction.id} auction={auction} cta={<InvestModal loan={auction} />} />
        ))}
      </SuggestedContainer>
    ),
    Empty: () => (
      <SuggestedContainer>
        <NoResults>No results</NoResults>
      </SuggestedContainer>
    )
  });
};

export default Suggesteds;
