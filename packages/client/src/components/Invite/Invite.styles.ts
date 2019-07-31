import styled from 'styled-components';
import Web3Address from '../Web3Address';
import { device } from '../LayoutV2/breakpoints';
import { Grid } from 'semantic-ui-react';

export const StyledAddress = styled(Web3Address)`
  float: right;
  padding: 0px;
  @media ${device.mobileL} {
    float: right;
  }
`;
export const AddressRow = styled(Grid.Row)`
height: 36px;

`
export const Raf = styled(Grid)`
  min-height: 519px;
  
  margin: 0 !important;
  padding: 0 !important;
  background-image: linear-gradient(0deg, #F2FAFA 0%, #FFFFFF 100%);
    
  @media ${device.mobileL} {
    float: right;
    padding: 0 !important;
    border-top-left-radius: 0.285714rem;
    border-top-right-radius: 0.285714rem;
    display: flex;
    box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);

  }
`;

export const ContainerGrid = styled(Grid)`
  padding: 0px 0px 0px 0px;
`

export const StartEarningNow = styled.div`
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  color: #002947;
  padding: 0px 0px 15px 0px !important;
  margin: 0px 0px 0px 15px !important;
  @media ${device.mobileL} {
    margin: 20px 5px 10px 50px !important;
    font-size: 48px;
    line-height: 44px;
    padding: 0px 0px 30px 0px !important;
  }
`;

export const InviteYourFriends = styled.div`
  color: #3C4251;
  font-size: 18px;
  line-height: 28px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 15px;
  @media ${device.mobileL} {
    margin: 10px 0px 10px 50px;
    font-size: 27px;
    line-height: 36px;
    padding: 10px 0px 0px 0px;
  }
`;

export const ShareYourUniqueLi = styled.div`
  color: #5c5d5d;
  font-family: Lato;
  font-size: 14px;
  line-height: 21px;
  padding: 0px 0px 10px 0px;
  margin: 0px 0px 0px 15px;
  @media ${device.mobileL} {
    margin-bottom: 10px;
    margin-left: 50px;
    padding: 50px 0px 0px 0px;
  }
`;

export const ShareInput = styled.div`
  input {
    height: 48px;
    border: 1px solid #d4d4d4;
    border-radius: 4px;

    .value {
      height: 21px;
      color: #5c5d5d;
      font-family: Lato;
      font-size: 14px;
      line-height: 21px;
    }
  }
  margin: 0px 0px 0px 15px;
  @media ${device.mobileL} {
    margin: 10px 5px 10px 50px;
  }
`;

export const CopyButton = styled.button`
  height: 48px;
  width: 111px;
  background-color: #EB3F93;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const RafImage = styled.img`
  height: auto;
  width: 90%;
  margin-left: 20px;
`;

export const RafImageContainer = styled.div`
`
export const Social = styled.div`
  margin: 25px 32px 0px 15px;

  @media ${device.mobileL} {
    margin: 10px 5px 10px 50px;
  }
`;

export const LinkColumn = styled(Grid.Column)`
  margin: 20px 0px 0px 0px;
  padding-right: 10px;
`

export const LabelWeb3 = styled.div`
  padding: 0.8em !important;
  min-width: 2em;
  min-height: 2em;
  line-height: 1em;
  text-align: center;
  border-radius: 500rem;
  background: none #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  display: inline-block;
  transition: background 0.1s ease;
  float: right;
`;
