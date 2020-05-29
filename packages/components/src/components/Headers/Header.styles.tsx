import styled from 'styled-components';
import { TopHeader, SubHeader, SubPageHeader } from './SubHeaders';

export const NavBar = styled.div`
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 5;
  & ${TopHeader}, & ${SubHeader} > *:first-child,
  & ${SubPageHeader} > *:first-child {
    max-width: 1172px;
    width: 100%;
    margin: 0 auto;
  }
`;

export default NavBar;
