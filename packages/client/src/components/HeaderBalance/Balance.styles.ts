import styled from 'styled-components';

import { Dropdown, Divider as DividerRaw, Button, ButtonProps } from 'semantic-ui-react';
import TokenBalanceNotStyled from './TokenBalance';
import TokenLayoutNotStyled from './TokenLayout';
import { device } from '../../commons/breakpoints';
import { AddressStatus as AddressStatusRaw } from '../Web3Address';

export const TokenBalance = styled(TokenBalanceNotStyled)``;
export const TokenLayout = styled(TokenLayoutNotStyled)``;
export const Divider = styled(DividerRaw)`
  &&&&& {
    margin: 0;
  }
`;
export const AddressStatus = styled(AddressStatusRaw)`
  &&&&&& {
    padding: 0 !important;
    display: flex;
    justify-content: flex-start;
    min-height: unset;
  }
`;
export const BalanceDropdown = styled(Dropdown)`
  &&& {
    padding: 12px;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.15) inset;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border: 1px solid transparent;
  }

  &&&& .dropdown.icon {
    font-size: 24px;
    display: none;
  }

  .wallet-icon path {
    fill: #b1b3b9;
  }

  &&&.active {
    border: 1px solid #eb3f93;
    box-shadow: 0px 8px 15px rgba(60, 66, 81, 0.25);

    .dropdown.icon {
      color: #eb3f93;
    }

    .wallet-icon path {
      fill: #eb3f93;
    }
  }
  &&&:hover {
    border: 1px solid #eb3f93;
    box-shadow: 0px 8px 15px rgba(60, 66, 81, 0.25);

    .dropdown.icon {
      color: #eb3f93;
    }
    .wallet-icon path {
      fill: #eb3f93;
    }
  }
`;

export const BalanceMenu = styled(Dropdown.Menu)`
  &&&&& {
    margin-top: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    margin-left: auto;
    margin-right: auto;
    width: 340px;
    border-radius: 3px;
    box-shadow: 0px 8px 15px rgba(60, 66, 81, 0.25);
    border: none;
    @media screen and ${device.tablet} {
      right: 0px;
      left: unset;
      transform: unset;
    }
  }
  & ${TokenBalance}:not(:last-child) {
    margin-bottom: 10px;
  }
  & ${TokenLayout}:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Value = styled.div`
  margin-left: 8px;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Content = styled.div`
  padding: 18px 21px;
`;

export const Header = styled.div`
  padding: 18px 21px;
`;

export const DropdownButton = styled(Button)<ButtonProps>`
  &&&&&&&& {
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.15) inset;
    height: 40px;
    color: rgba(0, 0, 0, 0.6) !important;
  }
  &&&&&&&&:hover,
  &&&&&&&&:focus {
    box-shadow: 0px 8px 15px rgba(60, 66, 81, 0.25);
    color: #eb3f93;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
`;
