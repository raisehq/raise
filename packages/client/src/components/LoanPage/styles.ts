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
    margin-top: 54px;
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
    padding: 0px 10px;
  }
`;

export const LoanInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 29px;
  @media screen and ${device.laptop} {
    max-width: 648px;
    justify-content: flex-start;
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

export const BorrowerResume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and ${device.laptop} {
    justify-content: flex-start;
  }
`;

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
    padding: 0px 10px;
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
    padding: 0px 10px;
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

export const LoanHeaderWrapper = styled.div`
  margin-bottom: 27px;
`;

export const BorrowerName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  margin-bottom: 30px;
`;

export const BorrowerShortDescription = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  margin-bottom: 20px;
`;

export const LearnMore = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  @media screen and ${device.laptop} {
    justify-content: flex-start;
  }
`;

export const LearnMoreLink = styled.a`
  color: #eb3f93;
  font-size: 16px;
  line-height: 24px;
  :hover {
    color: #00da9e;
  }
`;

export const TriangleRight = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
`;

export const RightTriangle = styled.div`
  margin: auto;
  width: 10px;
  height: 10px;
  transform: rotate(315deg);
  -webkit-transform: rotate(315deg);
  -moz-transform: rotate(315deg);
  -o-transform: rotate(315deg);
  -ms-transform: rotate(315deg);
  border-right: 2px solid #eb3f93;
  border-bottom: 2px solid #eb3f93;
  margin-top: 8px;
  margin-left: 5px;
`;