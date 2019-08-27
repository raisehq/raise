import { getLiveAuctionsByAccount, getSuggestedAuctions } from '../../services/loan';

export default (dispatch: any, state: any) => {
  const onGetLiveAuctionsByAccount = async () => {
    const request = await getLiveAuctionsByAccount(
      state.user.cryptoAddress.address,
      'kovan'
    );

    request.fold(
      () => null,
      auctions => dispatch({ type: 'SET_LIVE_AUCTIONS', data: auctions })
    );
  };

  const onGetSuggestedAuctions = async () => {
    const request = await getSuggestedAuctions('kovan');

    request.fold(
      () => null,
      auctions => dispatch({ type: 'SET_SUGGESTED_AUCTIONS', data: auctions })
    );
  };

  return {
    onGetLiveAuctionsByAccount,
    onGetSuggestedAuctions
  };
};
