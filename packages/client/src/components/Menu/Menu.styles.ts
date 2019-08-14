import styled from 'styled-components';
import { Icon, Menu as SemanticMenu, Button, ButtonProps, ImageProps, Image } from 'semantic-ui-react';
import Logout from '../Logout';
import theme from '../../theme';
import { maxDevice, device } from '../LayoutV2/breakpoints';

export const MenuLogout = styled(Logout)`
&&&& {
  margin: 0 auto;
}
`
export const Credits = styled.div`
  padding: 20px;
`
export const Logo = styled(Image)<ImageProps>`
&&&&& {
  display: block;
  max-width: 90px;
}`;

export const RaiseMenu = styled(SemanticMenu)`
&&&.inverted {
  visibility: hidden;
  background: ${theme.colors.menu};
  color: white;
  position: absolute;
  top: 0px;
  right: 60em;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 0px;
  transition: 0.2s;
  z-index: 1000;
  ${Logo} {
    margin: 11px auto 56px;
  }
}
@media ${maxDevice.laptop} {
  body &&&.inverted.open {
    visibility: visible;
    right: 0
  }
}
@media ${device.laptop} {
  &&&.inverted {
    position: fixed;
    visibility: visible;
    max-width: 280px;
    left: 0px;
    right: unset;
    ${Logo} {
      margin: 34px auto 40px;
      max-width: 127px;
      width: 100%;
    }
  }
}
`;

export const BurgerButton = styled(Button)<ButtonProps>`
&&&& {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 48px;
  margin-right: auto;
  height: 48px;
  border: none;
  background: white;
}`;

export const CloseButton = styled(Button)<ButtonProps>`
&&&& {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 48px;
  height: 48px;
  border: none;
  background: transparent;
  z-index: 1001;
  @media ${device.laptop} {
    display: none;
  }
}`;




export const MobileMenu = styled(SemanticMenu)`
&&&& {
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  margin: 0;
  border: none;
  box-shadow: 0 0 26px 0 rgba(217,217,217,0.61);
  background: white;
  @media ${device.laptop} {
    display: none;
  }
}
`

export const MenuList = styled('div')`
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 40px;
  li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    position: relative;

    a {
      position: relative;
      display: flex;
      justify-content: flex-start;
      font-weight: bold;
      align-items: center;
      color: #fff;
      padding: 15px 20px;

      .icon:last-child {
        display: none;
        position: absolute;
        right: 10px;
        top: 17px;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        .icon:last-child {
          display: block;
        }
      }
    }
  }

  li.active {
    background: #fff;

    a {
      color: #212121;
    }
  }
`;

export const MenuIcon: any = styled(Icon)`
  margin-right: 20px !important;
`;

export const MenuIconActive: any = styled(Icon)`
  position: absolute;
  top: 17px;
  right: 10px;
`;
