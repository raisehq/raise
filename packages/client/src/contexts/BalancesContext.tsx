import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useMemo,
  useCallback,
  useEffect,
  ReactNode
} from 'react';
import BN from 'bn.js';
import useDebounce from '../hooks/useDebounce';
import { getEtherBalance, getTokenBalance, isAddress } from '../utils/web3-utils';
import { useBlockNumber } from './BlockContext';
import { useRootContext } from './RootContext';

const LOCAL_STORAGE_KEY = 'BALANCES';

interface BalancesState {
  [chainId: number]: {
    [address: string]: {
      [tokenAddress: string]: {
        value?: string | null;
        blockNumber?: number;
        listenerCount: number;
      };
    };
  };
}

function initialize(): BalancesState {
  try {
    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) as string);
  } catch {
    return {};
  }
}

enum Action {
  START_LISTENING,
  STOP_LISTENING,
  UPDATE
}

function reducer(state: BalancesState, { type, payload }: { type: Action; payload: any }) {
  switch (type) {
    case Action.START_LISTENING: {
      const { chainId, address, tokenAddress } = payload;
      // eslint-disable-next-line
      const uninitialized = !!!state?.[chainId]?.[address]?.[tokenAddress];
      // prettier-ignore
      return {
        ...state,
        [chainId]: {
          ...(state?.[chainId] || null),
          [address]: {
            ...(state?.[chainId]?.[address] || null),
            [tokenAddress]: uninitialized
              ? {
                listenerCount: 1
              }
              : {
                ...state[chainId][address][tokenAddress],
                listenerCount: state[chainId][address][tokenAddress].listenerCount + 1
              }
          }
        }
      };
    }
    case Action.STOP_LISTENING: {
      const { chainId, address, tokenAddress } = payload;
      return {
        ...state,
        [chainId]: {
          ...state?.[chainId],
          [address]: {
            ...state?.[chainId]?.[address],
            [tokenAddress]: {
              ...state?.[chainId]?.[address]?.[tokenAddress],
              listenerCount: state[chainId][address][tokenAddress].listenerCount - 1
            }
          }
        }
      };
    }
    case Action.UPDATE: {
      const { chainId, address, tokenAddress, value, blockNumber } = payload;
      return {
        ...state,
        [chainId]: {
          ...state?.[chainId],
          [address]: {
            ...state?.[chainId]?.[address],
            [tokenAddress]: {
              ...state?.[chainId]?.[address]?.[tokenAddress],
              value,
              blockNumber
            }
          }
        }
      };
    }
    default: {
      throw Error(`Unexpected action type in BalancesContext reducer: '${type}'.`);
    }
  }
}
// prettier-ignore
const BalancesContext = createContext<[BalancesState,
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  { [k: string]:(...args: any) => void }]>([
    {},
    {}
  ]);

export function useBalancesContext() {
  return useContext(BalancesContext);
}

export default function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, initialize);

  const startListening = useCallback((chainId, address, tokenAddress) => {
    dispatch({
      type: Action.START_LISTENING,
      payload: { chainId, address, tokenAddress }
    });
  }, []);

  const stopListening = useCallback((chainId, address, tokenAddress) => {
    dispatch({
      type: Action.STOP_LISTENING,
      payload: { chainId, address, tokenAddress }
    });
  }, []);

  const update = useCallback((chainId, address, tokenAddress, value, blockNumber) => {
    dispatch({
      type: Action.UPDATE,
      payload: { chainId, address, tokenAddress, value, blockNumber }
    });
  }, []);

  return (
    <BalancesContext.Provider
      value={useMemo(
        () => [
          state,
          {
            startListening,
            stopListening,
            update
          }
        ],
        [state, startListening, stopListening, update]
      )}
    >
      {children}
    </BalancesContext.Provider>
  );
}

export function Updater() {
  const {
    store: {
      config: { networkId: chainId },
      blockchain: { web3: library }
    }
  }: any = useRootContext();
  const blockNumber = useBlockNumber();
  const [state, { update }] = useBalancesContext();

  // debounce state a little bit to prevent useEffect craziness
  const debouncedState = useDebounce(state, 1000);
  // cache this debounced state in localstorage
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(debouncedState));
  }, [debouncedState]);

  // (slightly janky) balances-wide cache to prevent double/triple/etc. fetching
  const fetchedAsOfCache = useRef<{
    [chainId: number]: {
      [address: string]: {
        [tokenAddress: string]: number;
      };
    };
  }>({});
  // generic balances fetcher abstracting away difference between fetching ETH + token balances
  const fetchBalance = useCallback(
    (address: string, tokenAddress: string) =>
      (tokenAddress === 'ETH'
        ? getEtherBalance(address, library)
        : getTokenBalance(tokenAddress, address, library)
      )
        .then(value => value.toString())
        .catch(() => null),
    [library]
  );

  // ensure that all balances with >=1 listeners are updated every block
  useEffect(() => {
    if (typeof chainId === 'number' && typeof blockNumber === 'number') {
      Object.keys(debouncedState?.[chainId] ?? {}).forEach(address => {
        Object.keys(debouncedState?.[chainId][address]).forEach(tokenAddress => {
          const active = debouncedState[chainId][address][tokenAddress].listenerCount > 0;
          if (active) {
            const cachedFetchedAsOf =
              fetchedAsOfCache.current?.[chainId]?.[address]?.[tokenAddress];
            const fetchedAsOf =
              debouncedState[chainId][address][tokenAddress]?.blockNumber ?? cachedFetchedAsOf;
            if (fetchedAsOf !== blockNumber) {
              // fetch the balance...
              fetchBalance(address, tokenAddress).then(value => {
                update(chainId, address, tokenAddress, value, blockNumber);
              });
              // ...and cache the fetch
              fetchedAsOfCache.current = {
                ...fetchedAsOfCache.current,
                [chainId]: {
                  ...fetchedAsOfCache.current?.[chainId],
                  [address]: {
                    ...fetchedAsOfCache.current?.[chainId]?.[address],
                    [tokenAddress]: blockNumber
                  }
                }
              };
            }
          }
        });
      });
    }
  }, [chainId, blockNumber, debouncedState, fetchBalance, update]);

  // get a state ref for batch updates
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  return null;
}

export function useAddressBalance(address: string, tokenAddress: string): BN {
  const {
    store: {
      config: { networkId: chainId }
    }
  }: any = useRootContext();
  const [state, { startListening, stopListening }] = useBalancesContext();

  useEffect(() => {
    if (!tokenAddress) return undefined;
    if (typeof chainId === 'number' && isAddress(address) && isAddress(tokenAddress)) {
      startListening(chainId, address, tokenAddress);
    }
    return () => {
      if (typeof chainId === 'number' && isAddress(address) && isAddress(tokenAddress)) {
        stopListening(chainId, address, tokenAddress);
      }
    };
  }, [chainId, address, tokenAddress, startListening, stopListening]);

  const value =
    typeof chainId === 'number' ? state?.[chainId]?.[address]?.[tokenAddress]?.value || '0' : '0';

  return useMemo(() => (typeof value === 'string' ? new BN(value) : value), [value]);
}
