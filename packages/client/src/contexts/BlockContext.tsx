import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  useEffect
} from 'react';

import { useAppContext } from '../contexts/AppContext';

import useWeb3 from '../hooks/useWeb3';

import { safeAccess } from '../utils';

const BLOCK_NUMBER = 'BLOCK_NUMBER';

const UPDATE_BLOCK_NUMBER = 'UPDATE_BLOCK_NUMBER';

const BlockContext = createContext({});

function useBlockDataContext() {
  return useContext(BlockContext);
}

function reducer(state, { type, payload }) {
  switch (type) {
    case UPDATE_BLOCK_NUMBER: {
      const { networkId, blockNumber } = payload;
      return {
        ...state,
        [BLOCK_NUMBER]: {
          ...(safeAccess(state, [BLOCK_NUMBER]) || {}),
          [networkId]: blockNumber
        }
      };
    }

    default: {
      throw Error(`Unexpected action type in BlockContext reducer: '${type}'.`);
    }
  }
}

export default function Provider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, {
    [BLOCK_NUMBER]: {}
  });

  const updateBlockNumber = useCallback((networkId, blockNumber) => {
    dispatch({ type: UPDATE_BLOCK_NUMBER, payload: { networkId, blockNumber } });
  }, []);

  return (
    <BlockContext.Provider
      value={useMemo(() => [state, { updateBlockNumber }], [state, updateBlockNumber])}
    >
      {children}
    </BlockContext.Provider>
  );
}

export function Updater() {
  const { web3: library } = useWeb3();
  const [, { updateBlockNumber }]: any = useBlockDataContext();
  const {
    web3Status: { walletNetworkId: chainId }
  }: any = useAppContext();

  // update block number
  const update = (web3Library, stale) => {
    web3Library.eth
      .getBlockNumber()
      .then(blockNumber => {
        if (!stale) {
          updateBlockNumber(chainId, blockNumber);
        }
      })
      .catch(() => {
        if (!stale) {
          updateBlockNumber(chainId, null);
        }
      });
  };

  useEffect(() => {
    let isStale = false;
    let subscription = null;
    if (library) {
      update(library, isStale);
      subscription = library.eth.subscribe('newBlockHeaders', () => update(library, isStale));
    }
    return () => {
      isStale = true;
      if (subscription) {
        // @ts-ignore
        subscription.unsubscribe();
      }
    };
  }, [chainId, library, updateBlockNumber]);

  return null;
}

export function useBlockNumber() {
  const {
    web3Status: { walletNetworkId: chainId }
  }: any = useAppContext();

  const [state]: any = useBlockDataContext();

  return safeAccess(state, [BLOCK_NUMBER, chainId]);
}
