import React, { useState, useEffect } from 'react';
import daggy from 'daggy';
import { CardPlaceholder } from '@raisehq/components';
import Suggested from '../Cards/Suggested';
import { getActiveAuctions } from '../../utils/loanUtils';
import { SuggestedContainer, NoResults } from './Dashboard.styles';

export const Auctions = daggy.taggedSum('Auctions', {
  Loading: [],
  Success: [{}],
  Empty: []
});

const Suggesteds = ({ auctions, states }) => {
  const [suggestedState, setSuggestedState]: any = useState(Auctions.Loading);
  const suggested = getActiveAuctions(auctions, states);

  useEffect(() => {
    if (!suggested) {
      setSuggestedState(Auctions.Loading);
    } else if (suggested.length === 0) {
      setSuggestedState(Auctions.Empty);
    } else {
      setSuggestedState(Auctions.Success);
    }
  }, [auctions]);

  return suggestedState.cata({
    Loading: () => (
      <SuggestedContainer>
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
      </SuggestedContainer>
    ),
    Success: () => (
      <SuggestedContainer>
        {suggested.map(auction => (
          <Suggested key={auction.id} auction={auction} />
        ))}
      </SuggestedContainer>
    ),
    Empty: () => (
      <SuggestedContainer>
        <NoResults>No Results</NoResults>
      </SuggestedContainer>
    )
  });
};

export default Suggesteds;
