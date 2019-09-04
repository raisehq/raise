import styled from 'styled-components';
import { Tab, Header as SemanticHeader } from 'semantic-ui-react';
import { maxDevice } from '../LayoutV2/breakpoints';
import theme from '../../theme';

export const DashboardWrapper = styled.div`
  width: 100%;
  padding: 25px;
  box-sizing: border-box;

  .heroCard {
    margin: 0 15px 15px 0;
  }

  .heroCard {
    @media ${maxDevice.tablet} {
      width: 100%;
      margin: 0 0 10px 0;
    }
  }
`;

export const DashboardContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  padding-top: 25px;
`;

export const DashboardTab: any = styled(Tab) `
  margin-bottom: 25px;

  &&& .ui.secondary.pointing.menu .active.item {
    border-color: ${theme.colors.complementary};
  }

  &&& .ui.secondary.pointing.menu {
    border-bottom: none;
    margin-bottom: 35px;
  }

  &&& .ui.secondary.pointing.menu .item {
    padding: 0 0 15px 0;
    margin-right: 25px;
  }

  &&& .ui.segment {
    background: none;
    padding: 0;
  }

  &&& .ui.attached.segment {
    display: flex;
    flex-wrap: wrap;
    border: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  display: block-inline;
  padding: 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #8c96a9;
  color: #3c4251;
  background: none;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SuggestedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0 15px 0;
`;

export const NoResults = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;

export const AmountComponent = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 22px;
  &&& > div:first-child {
    margin-left: 5px;
  }
  &&& > span:last-child {
    margin-left: 9px;
    color: #5A5A5A;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Header = styled(SemanticHeader) `
  color: #3C4251;
  h1.& {
    font-size: 26px;
    font-weight: bold;
  }
`