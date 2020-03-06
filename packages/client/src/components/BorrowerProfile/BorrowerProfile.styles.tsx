import styled from 'styled-components';
import { Card, Header, Popup } from 'semantic-ui-react';
import { device, maxDevice, size } from '../../commons/breakpoints';
import theme from '../../theme';

interface ImageCropProps {
  src?: string | null;
}

export const Container = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LoanContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 104px auto;
  max-width: 797px;
  flex-basis: 100%;
`;

export const BorrowerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const BorrowerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and ${device.laptop} {
    padding: 0px 40px;
  }
`;
export const SideTitle = styled.div`
  color: #3c4251;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
`;

export const BorrowerCard = styled(Card)`
  &&& {
    box-shadow: none;
    width: 100%;
    height: fit-content;
    background: none;

    max-width: 797px;
  }
`;

export const Icon = styled.i`
  &&&& {
    height: 21px;
    width: 24.15px;
    color: #5a5a5a;
    font-size: 24px;
    line-height: 21px;
    text-align: center;
    margin-right: 10px;
  }
`;

export const AddressInfo = styled.span`
  color: #5a5a5a;
  font-size: 14px;
  line-height: 21px;
`;

export const SideInfo = styled(Card)`
  &&& {
    padding: 0px 10px 32px 10px;
    height: fit-content;
    width: 100%;
    @media screen and ${device.laptop} {
      min-height: 407px;
      margin-left: 15px;
      margin-top: 0px;
      box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
      padding: 17px;
      max-width: 350px;
      background: #ffffff;
    }
    .borrowerInfo {
      display: flex;
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

export const ResourcesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResourceBox = styled.div`
  display: flex;
  flex-diriection: row;
  align-items: center;
  margin-bottom: 30px;
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

export const CompanyDetails = styled.div`
  padding: 0 10px 0px 10px;
  @media screen and ${device.mobileM} {
    justify-content: space-between;
  }
  @media (max-width: ${size.mobileL}) {
    padding-top: 0;
  }
`;

export const HeaderImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 124px;
  overflow: hidden;
  flex-wrap: wrap;
  position: relative;

  @media screen and ${device.laptop} {
    height: 267px;
  }
`;

export const BorrowerLoansBox = styled.div`
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

  .heroCard {
    margin: 0 15px 15px 0;
  }

  .heroCard {
    @media ${maxDevice.tablet} {
      width: 100%;
      margin: 0 0 10px 0;
    }
  }
  .suggested-card {
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;

export const KPIBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const KPIListBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const KPIItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const KPILabel = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const KPISeparator = styled.div`
  box-sizing: border-box;
  height: 1px;
  border: 1px solid #ececec;
`;
export const KPIItemLabel = styled.div`
  color: #5a5a5a;
  line-height: 49px;
  font-size: 14px;
`;
export const KPIItemValue = styled.div`
  color: #5a5a5a;
  font-size: 14px;
  line-height: 49px;
  font-weight: bold;
`;

export const KPITooltip = styled(Popup)`
  margin-left: 5px !important;
`;

export const KPIIcon = styled.div`
  margin-left: 5px !important;
  margin-top: 15px;
`;

export const Website = styled.a`
  color: #0091ff;
  line-height: 21px;
  font-size: 14px;
`;

export const BorrowerInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
export const BorrowerFounded = styled.div``;

export const CardImageCrop: any = styled.div<ImageCropProps>`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ src }) => `url(${src})`};
`;

export const BorrowerLogo: any = styled.div<ImageCropProps>`
  height: 70px;
  width: 73px;
  background-color: white;
  border-radius: 9.82px;
  border: 1.64px solid #cfd0d4;
  box-sizing: border-box;

  background-position: center;
  background-position-x: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ src }) => `url(${src})`};

  position: absolute;
  top: 88px;
  left: 28px;

  @media screen and ${device.laptop} {
    width: 115px;
    height: 120px;
    top: 207px;
    left: 28px;
  }
`;
