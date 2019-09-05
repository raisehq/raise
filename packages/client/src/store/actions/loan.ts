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
      dispatch({ type: 'SET_SUGGESTED_AUCTIONS', data: data.loans });
    }
  };

  const onGetLiveAuctionsByAccountSubscription = (error, data) => {
    if (error) {
      console.log('error on get live auction subs :: ', error);
    } else {
      dispatch({ type: 'SET_LIVE_AUCTIONS', data: data.users[0].loanRequests });
    }
  };

  const onGetLenderInvestmentSubscription = (error, data) => {
    if (error) {
      console.log('error on get live auction subs :: ', error);
    } else {
      dispatch({
        type: 'SET_LENDER_INVESTMENTS',
        data: data.users[0].loanFundings.map(({ withdrawn, amount, loan }) => ({
          ...loan,
          withdrawn,
          lenderAmount: amount
        }))
      });
    }
  };

  const onGetLoansByAccountSubscription = (error, data) => {
    if (error) {
      console.log('error on get loans subs :: ', error);
    } else {
      dispatch({ type: 'SET_BORROWER_LOANS', data: data.users[0].loanRequests });
    }
  };

  return {
    onGetSuggestedAuctionsSubscription,
    onGetLiveAuctionsByAccountSubscription,
    onGetLenderInvestmentSubscription,
    onGetLoansByAccountSubscription,
    // LEGACY::
    onGetLiveAuctionsByAccount,
    onGetSuggestedAuctions
  };
};
