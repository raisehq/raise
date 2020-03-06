import styled from 'styled-components';
import { Progress } from 'semantic-ui-react';
import { size } from '../../../commons/breakpoints';

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
  width: 70%;

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
  padding: 5px 0 5px;
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
    border: none;
  }
`;
export const LoanHeaderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 15%;
  padding: 2% 0 2% 2%;
  @media (max-width: ${size.mobileL}) {
    flex-direction: row;
    border: none;
    width: 100%;
  }
`;

export const LastTextWrapper = styled(LoanTextWrapper)`
  border-right: none;
`;

export const LoanHeaderLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  padding: 2px;
  @media (max-width: ${size.mobileL}) {
    width: 50%;
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
    width: 50%;
    align-items: flex-start;
    font-size: 14px;
  }
`;
