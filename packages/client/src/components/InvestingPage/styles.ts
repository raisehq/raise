import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const InvestingContainer = styled.div``;

export const InvestingSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.img``;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const InfoTitle = styled.div`
  text-align: left;
  font-size: 48px;
  line-height: 56px;
  color: #eb3f93;
  margin-bottom: 32px;
  font-weight: bold;
`;
export const InfoDescription = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  text-align: left;
  max-width: 421px;
`;

export const LearnMore = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

export const LearnMoreLink = styled.a`
  color: #eb3f93;
  font-size: 16px;
  line-height: 24px;
`;

export const LearnMoreIcon = styled(Icon)``;
