import { Loan } from '../../interfaces/Loan';

export interface InvestModalProps {
  loan: Loan;
}

export interface InvestStateProps {
  loan: Loan;
  setStage: Function;
  setInvestment: Function;
  ui: any;
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
}

export interface SuccessStateProps {
  setStage: Function;
  closeModal: Function;
  ui: any;
}
