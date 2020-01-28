import React, { useState, useEffect } from 'react';
import daggy from 'daggy';
import { CardPlaceholder } from '@raisehq/components';
import Suggested from '../Cards/Suggested';
import { getActiveAuctions } from '../../utils/loanUtils';
import { SuggestedContainer, NoResults } from './Dashboard.styles';
import useInterval from '../../hooks/useInterval';

export const Auctions = daggy.taggedSum('Auctions', {
  Loading: [],
  Success: [{}],
  Empty: []
});

const Suggesteds = ({ auctions, states }) => {
  const [gracePeriod, setGracePeriod] = useState(0);
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
    if (suggested.length > 0) {
      setSuggestedAuctions(suggested);
      return;
    }
    if (gracePeriod > 2) {
      setSuggestedAuctions(suggested);
      return;
    } else {
      setGracePeriod(value => value + 1);
    }
  }, 1000);

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
        {suggestedAuctions.map(auction => (
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
