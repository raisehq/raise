import styled from 'styled-components';
import Logout from '../Logout';
import { maxDevice } from '../LayoutV2/breakpoints';

export const Header = styled.div`
  top: 0;
  position: fixed;
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  z-index: 999;
  margin: 0;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background: white;

  @media ${maxDevice.laptop} {
    display: none;
  }

  a {
    color: #3c4251 !important;
  }
`;

export const HeaderLogout = styled(Logout)`
  &&&& {
    border: 1px solid #3c4251;
    background: transparent;
    height: 42px;
    width: 122px;
    color: #3c4251;
    border-radius: 4px;
    font-size: 18px;
    margin-left: 25px;
    line-height: 24px;
    padding: 0px;
    font-weight: lighter;
    margin-right: 0px !important;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
`;

export const HeaderWrapper = styled.div`
  width: 1172px;
  margin: 0 auto;
  display: flex;
  padding: 25px;
  box-sizing: border-box;

  .right {
    justify-content: flex-end;
  }
`;

export const HeaderGroup = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  &.right > * {
    margin-left: 20px;
  }
`;

export const HeaderLogo = styled.button`
  width: 127px;
  display: flex;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
`;

export const HeaderMenuItem = styled.button`
  margin: 0;
  padding: 0;
  color: #3c4251;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-left: 40px;
  background: none;
  border: none;
  cursor: pointer;
`;
