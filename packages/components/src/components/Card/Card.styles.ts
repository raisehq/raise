import styled from 'styled-components';
import Coin from '../Coin';
import theme from '../../../theme';

export const HeroCard = styled.div`
  width: 350px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: ${theme.shadow};
  padding: 25px;
  box-sizing: border-box;
  position: relative;
`;

export const Grid: any = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-top: 25px;
`;

export const Row = styled.div`
  flex: 1 0 33%;
  text-align: center;
  margin-bottom: 25px;
`;

export const RowContent = styled.div`
  color: #5a5a5a;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

export const RowTitle = styled.div`
  color: #5c5d5d;
  font-size: 10px;
  text-align: center;
`;

export const Header = styled.div`
  margin-bottom: 25px;
`;
export const HeaderTitle = styled.h1`
  color: #5a5a5a;
  font-size: 12px;
  font-weight: lighter;
`;
export const HeaderContent = styled.div`
  color: #3c4251;
  font-size: 26px;
  font-weight: bold;
`;

export const Graph: any = styled.div`
  width: 100%;
  height: 12px;
  background: #ecedee;
  position: relative;

  &&:before {
    content: '';
    position: absolute;
    width: ${(props: any) => props.width}px;
    height: 100%;
    top: 0;
    left: 0;
    background: #00da9e;
  }
`;

export const Badge = styled.div`
  width: 80px;
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
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #ecedee;
  margin: 10px 0 10px 0;
`;
