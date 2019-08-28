import { useState, useEffect } from 'react';
import { match, _ } from 'pampy';
import daggy from 'daggy';

const Auctions = daggy.taggedSum('Auctions', {
  Loading: [],
  Success: [{}],
  Empty: []
});

const useAuctionState = (auctions, states) => {
  const [auctionsState, setAuctionState]: any = useState(Auctions.Loading);

  useEffect(() => {
    const activeAuctions = auctions
      ? auctions.filter(auction => states.some(st => st === auction.state) || states.indexOf('all') > -1)
      : [];

    const conditions = {
      auctionsExist: auctions !== null,
      isEmpty: auctions ? !activeAuctions.length : true
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
  }, [auctions, states]);

  return auctionsState;
};

export default useAuctionState;
