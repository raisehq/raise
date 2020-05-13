import styled from 'styled-components';
import { Button } from '@raisehq/components';
import { Loader } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';

export const Loading = styled(Loader)``;

export const LoanPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media screen and ${device.laptop} {
    width: 100%;
    padding-bottom: 0px;
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
    width: 100%;
    max-width: 1172px;
    margin: auto;
    padding: 20px;
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
  @media screen and ${device.laptop} {
    max-width: 1172px;
    margin: auto;
    margin-top: 150px;
    padding-left: 20px;
    padding-right: 20px;
  }
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

export const ButterSectionContainer = styled.div`
  margin-top: 50px;
  @media screen and ${device.laptop} {
    max-width: 1172px;
  }
`;

export const ComparatorInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const APRSectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: 'row';
  align-items: center;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    padding: 20px;
    justify-content: space-between;
  }
`;

export const InvestButton = styled(Button)``;

export const ButtonWrapper = styled.div`
  align-self: center;
  margin-top: 59px;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
