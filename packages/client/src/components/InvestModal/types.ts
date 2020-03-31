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
  investment: any;
  ui: any;
  setStage: Function;
  coinName: string;
}

export interface SuccessStateProps {
  setStage: Function;
  closeModal: Function;
  ui: any;
}
