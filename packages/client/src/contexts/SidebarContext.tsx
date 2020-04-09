import React, { createContext, useContext, useReducer, useMemo, useCallback } from 'react';

const SET_DISPLAY = 'SET_DISPLAY';
const SET_LOAN_ID = 'SET_LOAN_ID';

interface SidebarContextType {
  state: SidebarState;
  actions: { [k: string]: (...args: any) => void };
}

interface SidebarState {
  display: boolean;
  loanId: string | null | undefined;
}

const initialState = (): SidebarState => ({
  display: false,
  loanId: null
});

const SidebarContext = createContext<SidebarContextType>({ state: initialState(), actions: {} });

export function useSidebarContext() {
  return useContext(SidebarContext);
}

// Sidebar Context Reducer
function reducer(state, { type, payload }) {
  switch (type) {
    case SET_DISPLAY: {
      return {
        ...state,
        display: !!payload
      };
    }
    case SET_LOAN_ID: {
      return {
        ...state,
        loanId: payload
      };
    }

    default: {
      throw Error(`Unexpected action type in BlockContext reducer: '${type}'.`);
    }
  }
}

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState());

  const setDisplay = useCallback((boolean: boolean) => {
    dispatch({ type: SET_DISPLAY, payload: boolean });
  }, []);

  const setLoanId = useCallback((loanId: string) => {
    dispatch({ type: SET_DISPLAY, payload: true });
    dispatch({ type: SET_LOAN_ID, payload: loanId });
  }, []);

  return (
    <SidebarContext.Provider
      value={useMemo(() => ({ state, actions: { setDisplay, setLoanId } }), [
        state,
        setDisplay,
        setLoanId
      ])}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// Empty updater
export function Updater() {
  return null;
}
