import { fromWei } from 'web3-utils';

const stringNumbertoFixed = (stringNumber, fixed) => {
  // eslint-disable-next-line
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
  return stringNumber.match(re)[0];
};

export default (dispatch: any) => {
  const onGetBalance = (error, data) => {
    if (error) {
      console.error('error onGetBalance subs:', error);
    } else {
      try {
        if (data.balances[0]) {
          dispatch({
            type: 'SET_BALANCE',
            data: stringNumbertoFixed(fromWei(data.balances[0].wad).toString(), 2)
          });
        }
      } catch (dError) {
        console.error('Error onGetBalance dispatch', dError);
      }
    }
  };

  return {
    onGetBalance
  };
};
