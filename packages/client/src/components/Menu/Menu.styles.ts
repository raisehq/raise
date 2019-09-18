import styled from 'styled-components';
import {
  Icon,
  Menu as SemanticMenu,
  Button,
  ButtonProps,
  ImageProps,
  Image
} from 'semantic-ui-react';
import { AddressStatus as Web3RawAddress } from '../Web3Address';
import Logout from '../Logout';
import theme from '../../theme';
import { maxDevice, device } from '../LayoutV2/breakpoints';

export const Logo = styled(Image)<ImageProps>`
  &&&&& {
    display: block;
    max-width: 90px;
  }
`;

export const Web3Address = styled(Web3RawAddress)`
  &&&&& {
    background: none;
    width: 240px;
    border-radius: 60px;
    color: #3c4251;
    border: 1px solid #cfd0d4;
  }
`;
export const MenuLogout = styled(Logout)`
  &&&& {
    border: 1px solid #3c4251;
    background: transparent;
    height: 48px;
    width: 240px;
    color: #3c4251;
    border-radius: 4px;
    margin: 0 auto;
  }
`;
export const Credits = styled.div`
  color: #3c4251;
  padding: 30px 20px 30px 20px;
  font-size: 12px;
  width: 100%;
`;

export const RaiseMenu = styled(SemanticMenu)`
  &&&.inverted {
    visibility: hidden;
    background: ${theme.colors.background};
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
      right: 0;
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
  }
`;

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
  }
`;

export const MobileMenu = styled(SemanticMenu)`
&&&& {
  top: 0;
  position: sticky;
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  z-index: 100;
  margin: 0;
  border: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  background: white;

  /* @media ${device.laptop} {
    display: none;
  } */
}
`;

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
      font-weight: 600;
      align-items: center;
      color: #93969e;
      padding: 15px 20px;

      .icon:last-child {
        display: none;
        position: absolute;
        right: 10px;
        top: 17px;
      }
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    .icon:last-child {
      display: block;
    }
  }

  li.active {
    a {
      color: #5a5a5a;
    }
  }
`;

export const MenuSubList = styled('div')`
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
  li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    position: relative;
    font-size: 1em;

    a {
      position: relative;
      display: flex;
      justify-content: flex-start;
      font-weight: 400;
      align-items: center;
      color: #3c4251;
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
    a {
      color: #3c4251;
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
