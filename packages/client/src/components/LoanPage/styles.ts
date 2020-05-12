import styled from 'styled-components';
import { device } from '../../commons/breakpoints';

export const LoanPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    padding: 20px;
    margin: auto;
  }
`;

export const LoanPageInfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media screen and ${device.laptop} {
    justify-content: space-between;
  }
`;

export const LoanInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and ${device.laptop} {
    max-width: 648px;
  }
`;

export const LoanInvestContainer = styled.div`
  max-width: 400px;
`;

export const LoanResumeWrapper = styled.div`
  height: 206px;
`;

export const LoanSubResumeWrapper = styled.div`
  height: 96px;
  margin-top: 24px;
`;

export const BorrowerResume = styled.div``;

export const BorrowerAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  height: 100%;
  width: 100%;
`;

export const BorrowerInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 54px;
`;

export const BorrowerInfoTitle = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #eb3f93;
  text-align: center;
`;

export const BorrowerDescription = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  text-align: left;
  @media screen and ${device.laptop} {
    max-width: 648px;
  }
`;

export const SectionContainer = styled.div`
  margin-top: 50px;
`;
