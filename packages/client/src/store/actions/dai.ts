import { fromWei } from 'web3-utils';

export default (dispatch: any, state: any) => {
  const onGetBalance = (error, data) => {
    if (error) {
      console.error('error onGetBalance subs:', error);
    } else {
      try {
        dispatch({
          type: 'SET_BALANCE',
          data: parseFloat(fromWei(data.balances[0].wad)).toFixed(2)
        });
      } catch (dError) {
        console.error('Error onGetBalance dispatch', dError);
      }
    }
  };

  return {
    onGetBalance
  };
};
