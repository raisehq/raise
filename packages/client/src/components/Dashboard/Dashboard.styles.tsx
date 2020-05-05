import styled from 'styled-components';
import { Card } from '@raisehq/components';
import { Tab, Header as SemanticHeader } from 'semantic-ui-react';
import { maxDevice, device } from '../../commons/breakpoints';
import theme from '../../theme';

export const ExpectedROI = styled(Card.Header)`
  &&& {
    margin-right: 30px;
  }
`;
export const DashboardWrapper = styled.div`
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const DashboardTab: any = styled(Tab)`
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
  &&& .tab {
    justify-content: center;
    @media ${device.tablet} {
      justify-content: flex-start;
    }
  }
`;

export const Button = styled.button`
  width: auto;
  margin: 0 auto;
  background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
  display: block;
  padding: 15px 65px 15px 65px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SuggestedContainer = styled.div`
  width: 100%;
  display: grid;
  margin: 15px 0 15px 0;
  grid-template-columns: 100%;
  grid-template-rows: 600px;
  grid-column-gap: 15px;
  grid-row-gap: 20px;

  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fill, 370px);
    grid-template-rows: 595px;
  }
`;

export const NoResults = styled.div`
  width: 100%;
  height: 336px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 25px;
  box-sizing: border-box;
  font-size: 18px;
  background: url(${theme.resources}/images/img_cactus.svg) center center no-repeat;
`;

export const AmountComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &&& > div:first-child {
    margin-left: 5px;
  }
  &&& > span:last-child {
    margin-left: 9px;
    color: #5a5a5a;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Header = styled(SemanticHeader)`
  color: #3c4251;
  h1.& {
    font-size: 26px;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;
