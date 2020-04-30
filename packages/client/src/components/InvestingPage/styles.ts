import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';

interface SectionProps {
  position: number;
}

interface PositionRight {
  right: boolean;
}

export const InvestingContainer = styled.div``;

export const InvestingSignUpContainer = styled.div``;

export const InvestingSectionContainer = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ position }) => {
    if (position === 0) {
      return 'white';
    }
    if (position % 2 !== 0) {
      return '#F9F9F9';
    }
    return 'linear-gradient(180deg, #F9F9F9 0%, rgba(255, 255, 255, 0) 100%)';
  }};
`;

export const SectionSubContainer = styled.div<PositionRight>`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: ${({ right }) => (right ? 'row-reverse' : 'row')};
  align-items: center;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    padding: 20px;
    justify-content: space-between;
  }
`;

export const SubSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 65px;
  @media screen and ${device.laptop} {
    justify-content: flex-start;
  }
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 138px;
  margin-bottom: 35px;
  @media screen and ${device.laptop} {
    margin-right: 50px;
  }
`;

export const SubSectionIcon = styled.img`
  width: 25.8px;
  height: 25.8px;
  margin-bottom: 18px;
`;

export const SubSectionText = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
`;

export const SectionImageContainer = styled.div`
  max-width: 335px;
  @media screen and ${device.laptop} {
    max-width: 552px;
  }
`;

export const SectionImage = styled.img`
  width: 100%;
  justify-content: center;
`;

export const InformationContainer = styled.div<PositionRight>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const InfoTitle = styled.div`
  display: none;
  @media screen and ${device.laptop} {
    display: block;
    text-align: left;
    font-size: 48px;
    line-height: 56px;
    color: #eb3f93;
    margin-bottom: 32px;
    font-weight: bold;
    max-width: 456px;
  }
`;

export const InfoTitleMobile = styled.div`
  font-size: 48px;
  line-height: 56px;
  color: #eb3f93;
  margin-bottom: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  max-width: 456px;
  @media screen and ${device.laptop} {
    display: none;
  }
`;

export const InfoDescription = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  max-width: 330px;
  @media screen and ${device.laptop} {
    text-align: left;
    max-width: 450px;
    margin-left: 0px;
    margin-right: 0px;
    align-self: left;
  }
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
`;

export const LearnMoreIcon = styled(Icon)``;

export const ImportantInfoContainer = styled.div`
  border: 1px solid #eb3f93;
  box-sizing: border-box;
  border-radius: 4px;
  max-width: 333px;
  margin-top: 36px;
  @media screen and ${device.laptop} {
    max-width: 396px;
  }
`;

export const ImportantInfoText = styled.div`
  color: #eb3f93;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-top: 14px;
  margin-bottom: 13px;
  margin-left: 20px;
  margin-right: 13px;
`;

export const NextIcon = styled.div`
  background: #eb3f93;
  transform: rotate(90deg);
`;

export const TriangleRight = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
`;

export const TriangleDown = styled.div`
  width: 10px;
  height: 10px;
  margin-bottom: 41px;
  margin-top: 10px;
`;

export const Triangle = styled.div`
  margin: auto;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  border-right: 2px solid #eb3f93;
  border-bottom: 2px solid #eb3f93;
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

export const WaveSVG = styled.img`
  width: 100%;
  margin-bottom: -2px;
  @media screen and ${device.laptop} {
    margin-bottom: -50px;
  }
`;
