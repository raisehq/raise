export default (dispatch: any, state: any) => {
  const onGetAcceptedTokensSubscription = (error, data) => {
    console.log('data: ', data);
    if (error) {
      console.log('[onGetAcceptedTokensSubscription] error on get tokens subscription :: ', error);
    } else {
      dispatch({
        type: 'SET_ACCEPTED_TOKENS',
        acceptedTokens: data.loanDispatchers
      });
    }
  };

  return {
    onGetAcceptedTokensSubscription
  };
};
