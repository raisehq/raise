export default (dispatch: any) => {
  const onGetAcceptedTokensSubscription = (error, data) => {
    if (error) {
      console.log('[onGetAcceptedTokensSubscription] error on get tokens subscription :: ', error);
    } else {
      dispatch({
        type: 'SET_ACCEPTED_TOKENS',
        data: data.loanDispatchers.length ? data.loanDispatchers[0].acceptedTokens : []
      });
    }
  };

  return {
    onGetAcceptedTokensSubscription
  };
};
