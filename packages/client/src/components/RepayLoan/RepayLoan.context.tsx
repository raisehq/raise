import { createContext } from 'react';
import daggy from 'daggy';

export const RepayLoanContext = createContext({});
export const Stages = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  Success: [],
  Error: []
});
