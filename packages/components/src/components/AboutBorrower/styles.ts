import styled from 'styled-components';
import { Card, Popup } from 'semantic-ui-react';
import { device, size } from '../../utils/breakpoints';

interface CompanyDetailsProps {
  extraPadding: boolean;
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

export const SideInfo: any = styled(Card)`
  &&& {
    padding: 0px 10px 32px 10px;
    height: fit-content;
    width: 100%;
    @media screen and ${device.laptop} {
      min-height: 407px;
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

export const CompanyDetails = styled.div<CompanyDetailsProps>`
  padding: 0px 10px 0px 10px;
  padding-top: ${({ extraPadding }) => (extraPadding ? '50px' : '0px')};
  @media screen and ${device.mobileM} {
    justify-content: space-between;
  }
  @media (max-width: ${size.mobileL}) {
    padding-top: ${({ extraPadding }) => (extraPadding ? '20px' : '0px')};
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

export const KPITooltip: any = styled(Popup)`
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
