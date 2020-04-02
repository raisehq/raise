import BN from 'bn.js';
import { Loan } from '../../interfaces/Loan';
import { CoinsType } from '../../commons/coins';

export interface InvestModalProps {
  loan: Loan;
  className?: string;
}

export interface InvestStateProps {
  loan: Loan;
  setStage: Function;
  setInvestment: Function;
  setCoin: Function;
  selectedCoin: string;
  ui: any;
  loanCoin: CoinsType;
  setInputTokenAmount: Function;
  inputTokenAmount: BN;
}

export interface ResumeItemProps {
  value: string;
  title: string;
}

export interface RaisedAmountProps {
  value: any;
}

export interface ProcessingStateProps {
  loan: Loan;
  loanCoin: CoinsType;
  investment: any;
  ui: any;
  setStage: Function;
  selectedCoin: string;
  inputTokenAmount: BN;
}

export interface SuccessStateProps {
  setStage: Function;
  closeModal: Function;
  ui: any;
}
