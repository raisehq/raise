import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import theme from '../../../theme';

interface RowContentProps {
  contentColor?: string;
}

interface RowWrapperProps {
  small?: boolean | null;
}

interface GridProps {
  noGraph?: boolean;
  spaceBetween: boolean;
}

export const GraphContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const HeroCard = styled.div`
  width: 350px;
  min-height: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: ${theme.shadow};
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const Grid: any = styled.div<GridProps>`
  display: flex;
  justify-content: ${({ spaceBetween }) => (spaceBetween ? 'space-between' : 'unset')};
  box-sizing: border-box;
  flex-wrap: wrap;
  margin: ${({ noGraph }) => (!noGraph ? '10px 0px' : '30px 0px 10px')};
`;

export const Row = styled.div<RowWrapperProps>`
  flex: ${({ small }) => (small ? '1 0 25%' : '1 0 33%')};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowContent = styled.div<RowContentProps>`
  color: ${({ contentColor }) => (contentColor ? contentColor : '#5a5a5a')};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

export const RowTitle = styled.div`
  color: #5c5d5d;
  font-size: 10px;
  text-align: center;
`;

export const GraphTitle = styled.div`
  font-size: 10px;
  font-weight: bold;
  margin-left: 6px;
`;

export const Header = styled.div`
  margin-top: 20px;
  margin-bottom: 12px;
`;
export const HeaderTitle = styled.h1`
  color: #5a5a5a;
  font-size: 12px;
  font-weight: lighter;
  margin-bottom: 4px;
`;
export const HeaderContent = styled.div`
  color: #3c4251;
  font-size: 26px;
  font-weight: bold;
`;

export const Graph: any = styled.div`
  width: 90%;
  height: 10px;
  background: #ecedee;
  position: relative;
  overflow: hidden;

  &&:before {
    content: '';
    position: absolute;
    width: ${(props: any) => (props.width * 100) / 90}%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${(props: any) => props.color};
  }
`;

export const Badge = styled.div`
  width: 80px;
  height: 20px;
  color: #fff;
  position: absolute;
  top: 15px;
  right: 15px;
  text-align: center;
  padding: 3px 0 3px 0;
  font-weight: bold;
  background: ${({ color }) => color};
  border-radius: 30px;
  font-size: 12px;
  line-height: 15px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #ecedee;
  margin: 0px;
`;

export const InfoIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 105px;
  font-size: 9px;
  background: black;
  width: 18px;
  height: 18px;
  border-radius: 36px;
`;

export const InfoIconCmp = styled(Icon)`
  &&& {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
  }
`;
