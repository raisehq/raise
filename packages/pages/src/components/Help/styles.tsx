import styled from 'styled-components';
// import { Icon } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    padding: 10px;
    margin: auto;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

export const HelpTitlePage = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 58px;
  color: #8a8e97;
  margin-bottom: 10px;
`;

export const HelpSubtitlePage = styled.div`
  font-size: 26px;
  line-height: 34px;
  color: #8a8e97;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  @media screen and ${device.laptop} {
    justify-content: space-between;
  }
`;

export const HelpMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 185px;
  box-shadow: 0 0 26px 0 hsla(0, 0%, 85.1%, 0.61);
  padding: 20px;
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 150px;
  height: 100%;
`;

export const HelpContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and ${device.laptop} {
    width: 80%;
  }
`;

export const HelpSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: fex-start;
  align-content: flex-start;
  width: 100%;
  box-shadow: 0 0 26px 0 hsla(0, 0%, 85.1%, 0.61);
  margin-bottom: 20px;
  padding: 3rem 4rem;

  &&& a {
    color: #00da9e;
  }
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 42px;
  line-height: 50px;
  color: #8a8e97;
  margin-bottom: 20px;
`;

export const SectionInfo = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;

  &&& h4 {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Anchor = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  margin-bottom: 15px;
  height: 100%;
`;
