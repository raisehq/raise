import { useRef, useState, useContext } from 'react';
import { getWeb3 } from '../utils';
import { RootContext } from '../context';
import isEqual from 'lodash/isEqual';

const useWeb3 = () => {
  const [connection, setConnection]: any = useState(null);
  const { store: { auth: { login: {  logged }}}}: any = useContext(RootContext);
  const provider: any = useRef(
    window['ethereum'] ? window['ethereum'] : (window['web3'] && window['web3'].currentProvider) || null
  );

  const enableWeb3 = async () => {
    if (logged && provider.current) {
      try {
        await provider.current.enable();
        provider.current.autoRefreshOnNetworkChange = false; // prevent Metamask refresh webpage
        const web3: any = getWeb3();
        setConnection((currentWeb3) => isEqual(web3, currentWeb3) ? currentWeb3 : web3);
      } catch {
        // console.error('Error connecting to Metamask.')
      }
    }
  }
  return { web3: connection, enableWeb3 };
};

export default useWeb3;
