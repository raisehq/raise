import { getLiveAuctionsByAccount } from '../../services/loan';

export default (dispatch: any, state: any) => {
  const onGetLiveAuctionsByAccount = async () => {
    const addresses = await getLiveAuctionsByAccount(
      state.user.cryptoAddress.address,
      'kovan'
    );

    addresses.fold(
      () => null,
      addresses => dispatch({ type: 'SET_LIVE_AUCTIONS', data: addresses })
    );
  };

  return {
    onGetLiveAuctionsByAccount
  };
};
