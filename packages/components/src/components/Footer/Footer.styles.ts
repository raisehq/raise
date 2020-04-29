import styled from 'styled-components';
import { maxDevice } from '../../utils/breakpoints';

export const FooterContainer = styled.div`
  width: 100%;
  height: 355px;
  background: linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%);

  a {
    color: rgba(0, 0, 0, 0.6) !important;
    border: none;
    background: none;
    text-decoration: none;
  }
`;

export const FooterWrapper = styled.div`
  width: 1172px;
  height: 269px;
  display: flex;
  margin: 0 auto;
  padding: 75px 25px 25px 25px;
  box-sizing: border-box;

  @media ${maxDevice.laptop} {
    width: 100%;
  }
`;

export const FooterFirst = styled.div`
  flex: 0 1 33%;
  position: relative;
`;

export const FooterMenu = styled.div`
  width: 100%;
  display: flex;
`;

export const FooterIcons = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 25px;
  left: 0;

  .icon {
    font-size: 25px !important;
    margin-right: 15px;
  }
`;

export const FooterLogo = styled.div`
  flex: 0 1 33%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

export const FooterDisclaimer = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 10px;
  text-align: center;
  border-top: 1px solid #e3e3e5;
`;

export const FooterList = styled.ul`
  margin: 0 50px 0 0;
  padding: 0;
`;

export const FooterItem = styled.li`
  list-style-type: none;
  color: #5a5a5a;
  font-size: 14px;
  margin-bottom: 20px;
`;
