import styled from 'styled-components';
import { device } from '../LayoutV2/breakpoints';
import { Grid } from 'semantic-ui-react';

export const Footer = styled(Grid)`
  margin: 0px 0px 30px 0px !important;
  padding: 0 !important;
  background-color: #ffffff;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
`;

export const GettingReady = styled.div`
  margin: 25px 0px 0px 15px;
  color: #002947;
  font-size: 20px;
  font-weight: bold;
  line-height: 21px;
  @media ${device.mobileL} {
    margin: 25px 0px 0px 50px;
  }
`;

export const Soon = styled.div`
  margin: 15px 0px 10px 15px;
  color: #5c5d5d;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  @media ${device.mobileL} {
    margin: 10px 0px 10px 50px;
  }
`;

export const DaysToGoLive = styled.div`
  margin: 10px 0px 25px 15px;
  color: #3c4251;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px @media ${device.mobileL} {
    margin: 10px 0px 0px 50px;
  }
`;
