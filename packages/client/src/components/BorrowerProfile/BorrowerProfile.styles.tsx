import styled from 'styled-components';
import { Card, Header } from 'semantic-ui-react';
import { device, maxDevice } from '../LayoutV2/breakpoints';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  @media screen and ${device.laptop} {
    padding: 50px 40px;
  }
`;

export const BorrowerCard = styled(Card)`
  &&& {
    box-shadow: none;
    padding: 32px 10px 32px 10px;
    width: 100%;
    height: fit-content;
    background: none;
    @media screen and ${device.laptop} {
      min-height: 410px;
      box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
      padding: 50px 65px 50px 50px;
      max-width: 715px;
      background: #ffffff;
    }
  }
`;

export const SideInfo = styled(Card)`
  &&& {
    padding: 0px 10px 32px 10px;
    box-shadow: none;
    height: fit-content;
    width: 100%;
    background: none;
    @media screen and ${device.laptop} {
      min-height: 407px;
      margin-left: 15px;
      margin-top: 30px;
      box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
      padding: 50px;
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

export const SocialsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & .icon {
    color: #a6a6a6;
  }
  & .icon:hover {
    color: black;
  }
  & a {
    margin-left: 24px;
  }
  & a:first-child {
    margin-left: 0px;
  }
  @media screen and ${device.mobileM} {
    justify-content: flex-start;
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
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and ${device.mobileM} {
    justify-content: space-between;
  }
`;

export const BorrowerLoansBox = styled.div`
  width: 100%;
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
  @media screen and ${device.mobileM} {
    margin-top: 32px;
  }
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
  margin-top: 30px;
  & > ${KPIBox} {
    margin-right: 60px;
  }
  & > ${KPIBox}:last-child {
    margin-right: 0px;
  }
  @media screen and ${device.mobileS} {
    margin-top: unset;
  }
`;
