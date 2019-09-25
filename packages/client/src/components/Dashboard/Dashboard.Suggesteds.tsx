import React, { useState, useEffect } from 'react';
import daggy from 'daggy';
import Suggested from './Dashboard.Suggested';
import { getActiveAuctions } from '../../utils/loanUtils';
import { SuggestedContainer, NoResults } from './Dashboard.styles';
import useInterval from '../../hooks/useInterval';

export const Auctions = daggy.taggedSum('Auctions', {
  Loading: [],
  Success: [{}],
  Empty: []
});

const Suggesteds = ({ auctions, states }) => {
  const [suggestedAuctions, setSuggestedAuctions] = useState();
  const [suggestedState, setSuggestedState]: any = useState(Auctions.Loading);

  useEffect(() => {
    if (!suggestedAuctions) {
      setSuggestedState(Auctions.Loading);
    } else if (suggestedAuctions.length === 0) {
      setSuggestedState(Auctions.Empty);
    } else {
      setSuggestedState(Auctions.Success);
    }
  }, [suggestedAuctions]);

  useInterval(() => {
    const suggested = getActiveAuctions(auctions, states);
    setSuggestedAuctions(suggested);
  }, 1000);

  return suggestedState.cata({
    Loading: () => <SuggestedContainer>loading</SuggestedContainer>,
    Success: () => (
      <SuggestedContainer>
        {suggestedAuctions.map(auction => (
          <Suggested key={auction.id} auction={auction} />
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
