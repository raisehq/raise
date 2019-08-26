import { useState, useEffect } from 'react';
import { match, _ } from 'pampy';
import daggy from 'daggy';

const Auctions = daggy.taggedSum('Auctions', {
  Loading: [],
  Success: [{}],
  Empty: []
});

const useAuctionState = (auctions, state) => {
  const [auctionsState, setAuctionState]: any = useState(Auctions.Loading);

  useEffect(() => {
    const activeAuctions = auctions
      ? auctions.filter(auction => auction.state === state || state === 'all')
      : [];

    const conditions = {
      auctionsExist: auctions !== null,
      isEmpty: auctions ? !activeAuctions.length : null
    };

    match(
      conditions,
      { auctionsExist: true, isEmpty: true },
      () => setAuctionState(Auctions.Empty),
      { auctionsExist: true, isEmpty: false },
      () => setAuctionState(Auctions.Success(activeAuctions)),
      _,
      () => {}
    );
  }, [auctions, state]);

  return auctionsState;
};

export default useAuctionState;
