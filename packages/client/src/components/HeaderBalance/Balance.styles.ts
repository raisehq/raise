import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import TokenBalanceNotStyled from './TokenBalance';
import { device } from '../../commons/breakpoints';
export const TokenBalance = styled(TokenBalanceNotStyled)``;

export const BalanceDropdown = styled(Dropdown)`
  &&& {
    padding: 12px 18px;
    box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.15) inset;
    border-radius: 3px;
    max-width: 148px;
    font-size: 16px;
    display: flex;
    align-items: center;
    height: 40px;
  }

  &&&& .dropdown.icon {
    font-size: 24px;
  }

  &&&.active {
    border: 1px solid #eb3f93;
    box-shadow: 0px 8px 15px rgba(60, 66, 81, 0.25);

    .dropdown.icon {
      color: #eb3f93;
    }
  }
  &&&:hover {
    border: 1px solid #eb3f93;
    box-shadow: 0px 8px 15px rgba(60, 66, 81, 0.25);

    .dropdown.icon {
      color: #eb3f93;
    }
  }
`;

export const BalanceMenu = styled(Dropdown.Menu)`
  &&&&& {
    margin-top: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 24px;
    margin-left: auto;
    margin-right: auto;
    width: 280px;
    border-radius: 3px;
    box-shadow: 0px 8px 15px rgba(60, 66, 81, 0.25);
    @media screen and ${device.tablet} {
      right: 0px;
      left: unset;
      transform: unset;
    }
  }
  & ${TokenBalance}:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Value = styled.div`
  margin-left: 8px;
`;

export const Title = styled.div`
  font-weight: bold;
`;
