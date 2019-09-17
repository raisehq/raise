import styled from 'styled-components';
import { maxDevice } from '../LayoutV2/breakpoints';

export const Footer = styled.div`
  width: 100%;
  height: 355px;
  background: linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%);
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

export const FooterMenu = styled.div`
  width: 33%;
  display: flex;
`;

export const FooterLogo = styled.div`
  width: 33%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

export const FooterImage = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
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
