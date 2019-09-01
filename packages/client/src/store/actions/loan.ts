import { getLiveAuctionsByAccount, getSuggestedAuctions } from '../../services/loan';

export default (dispatch: any, state: any) => {
  const onGetLiveAuctionsByAccount = async () => {
    const request = await getLiveAuctionsByAccount(state.user.cryptoAddress.address, 'kovan');

    request.fold(() => null, auctions => dispatch({ type: 'SET_LIVE_AUCTIONS', data: auctions }));
  };

  const onGetSuggestedAuctions = async () => {
    const request = await getSuggestedAuctions('kovan');

    request.fold(
      () => null,
      auctions => dispatch({ type: 'SET_SUGGESTED_AUCTIONS', data: auctions })
    );
  };

  const onGetSuggestedAuctionsSubscription = (error, data) => {
    if (error) {
      console.log('error on get sugg subs :: ', error);
    } else {
      console.log('data is =====================> ', data);
      dispatch({ type: 'SET_SUGGESTED_AUCTIONS', data: data.loans });
    }
  };

  const onGetLiveAuctionsByAccountSubscription = (error, data) => {
    if (error) {
      console.log('error on get live auction subs :: ', error);
    } else {
      console.log('data is auction live =====================> ', data.users[0].loanRequests);
      dispatch({ type: 'SET_LIVE_AUCTIONS', data: data.users[0].loanRequests });
    }
  };

  return {
    onGetSuggestedAuctionsSubscription,
    onGetLiveAuctionsByAccountSubscription,
    onGetLiveAuctionsByAccount,
    onGetSuggestedAuctions
  };
};
