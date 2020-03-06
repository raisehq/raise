import styled from 'styled-components';
import { Progress } from 'semantic-ui-react';
import { size } from '../../../commons/breakpoints';
import { InvestModal } from '../../InvestModal';

export const LoanHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ProgressRow = styled(Progress)`
  &&&.ui.progress .bar {
    background: #eb3f93;
  }
  &&&.ui.progress .bar > .progress {
    right: 0.1em;
  }
  &&&.ui.progress:last-child {
    margin-bottom: 0;
  }

  width: 80%;

  @media (max-width: ${size.mobileL}) {
    width: 65%;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 5px 0 0 5px;
`;

export const LoanHeaderList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const LoanTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  border-right: 1px solid #b1b3b9;

  @media (max-width: ${size.mobileL}) {
    flex-direction: row;
    justify-content: flex-end;
    border: none;
  }
`;
export const LoanHeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 15%;
  padding: 1% 0 1% 2%;

  @media (max-width: ${size.mobileL}) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    border: none;
    width: 100%;
  }
`;

export const LastTextWrapper = styled(LoanTextWrapper)`
  border-right: none;
`;

export const LoanDaysLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  font-weight: bold;
`;

export const LoanDaysLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  position: absolute;
  top: 28%;
  right: 2%;
  height: 40px;
  width: 100px;

  @media (max-width: ${size.mobileL}) {
    top: 8%;
    right: 2%;
  }
`;
export const LoanDaysLeftLabel = styled.div`
  font-size: 14px;
  @media (max-width: ${size.mobileL}) {
    font-size: 12px;
  }
`;
export const LoanDaysLeftValue = styled.div`
  font-size: 18px;
  @media (max-width: ${size.mobileL}) {
    font-size: 14px;
  }
`;

export const LoanHeaderLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  padding: 2px;

  @media (max-width: ${size.mobileL}) {
    width: 30%;
    align-items: flex-end;
    padding-right: 10px;
  }
`;

export const LoanHeaderValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  padding: 2px;
  @media (max-width: ${size.mobileL}) {
    width: 20%;
    align-items: flex-end;
    font-size: 14px;
  }
`;
export const LoanButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
`;

export const InvestButton = styled(InvestModal)`
  &&&&&& {
    margin-top: 15px;
    width: 30%;
  }
  @media (max-width: ${size.mobileL}) {
    &&&&&& {
      width: 100%;
    }
  }
`;
