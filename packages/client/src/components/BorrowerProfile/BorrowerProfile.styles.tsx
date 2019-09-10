import styled from 'styled-components';
import { Card, Header } from 'semantic-ui-react';
import { device } from '../LayoutV2/breakpoints';

export const Container = styled.div`
  margin-left: 40px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

export const BorrowerCard = styled(Card)`
  &&& {
    box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
    padding: 50px 65px 50px 50px;
    width: 100%;
    height: fit-content;
    min-height: 510px;
    background: none;
    @media screen and ${device.laptop} {
      max-width: 715px;
      background: #ffffff;
    }
  }
`;

export const SideInfo = styled(Card)`
  &&& {
    padding: 50px;
    box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
    margin-top: 30px;
    margin-left: 15px;
    height: fit-content;
    min-height: 407px;
    width: 100%;
    background: none;
    @media screen and ${device.laptop} {
      max-width: 350px;
      background: #ffffff;
    }
  }
`;

export const CompanyName = styled(Header)`
  &&&& {
    color: #3c4251 !important;
    margin-bottom: 0px;
    font-family: Lato;
    font-size: 26px;
    font-weight: bold;
    line-height: 36px;
  }
`;

export const ResourceBox = styled.div`
  display: flex;
  align-items: center;
  & .icon:first-child {
    margin-right: 3px;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ResourcesContainer = styled.div`
  & > ${ResourceBox} {
    margin-top: 30px;
  }
`;

export const KPIBox = styled.div`
  & > div {
    text-align: center;
  }
  & > div:first-child {
    color: #3c4251;
    font-size: 26px;
    font-weight: bold;
  }

  & > div:last-child {
    color: #5a5a5a;
    font-size: 12px;
  }
`;

export const KPIListBox = styled.div`
  display: flex;
  align-items: center;

  & > ${KPIBox} {
    margin-right: 60px;
  }
  & > ${KPIBox}:last-child {
    margin-right: 0px;
  }
`;
