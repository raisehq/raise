import styled from 'styled-components';
import { Card, Button } from 'semantic-ui-react';
import Web3Address from '../Web3Address';
import { maxDevice, device } from '../../commons/breakpoints';

export const StyledAddress = styled(Web3Address)`
  font-size: 14px;
  margin: 0px 0px 0px 10px;
`;

export const Web3CheckWalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectYourWalletContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectYourWalletList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 20px 20px;
`;

export const SelectWalletOptionItem = styled.div`
  margin: 7px 0;
`;

export const SelectWalletOptionListItem = styled.div`
  margin: 11px 0;
`;

export const SelectWalletOptionButton = styled(Button)`
  width: 250px;
`;

export const HelpMessage = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ecedee;
  padding: 0 20px;
  font-size: 16px;
  min-height: 210px;
  text-align: center;

  span.emojis {
    margin: 20px 0px;
    height: 60px;
    font-size: 76px;
    display: block;
  }
`;

export const CardDescription = styled(Card.Description)`
  &&&&&&&&& {
    min-height: 210px;
    padding: 20px;
    background-color: #ecedee;
    border-top: none;
    font-size: 16px;
    h6 {
      font-size: 18px;
      margin: 0px 0px 10px;
    }
    span.emojis {
      margin: 20px 0px;
      height: 60px;
      font-size: 76px;
      display: block;
    }
  }
`;
export const CardContent = styled(Card.Content)`
  &&& {
    border-top: none !important;
    padding: ${({ box }) => {
      return box === 'separated' ? '20px 50px 60px 50px !important' : '50px !important';
    }}
    font-size: 14px;
  }
`;

export const AddressContainer = styled.div`
  margin: 6px;
`;

// prettier-ignore
export const ButtonGreen = styled(Button)`
  &&& {
    width: 100%;
    ${({ disabled }) => (disabled === 'true' ? 'opacity: 0.4 !important;' : '')}
    ${({ double }) => (double === true ? ' height: 90px;' : 'height: 45px;')}
    background: linear-gradient(134.72deg, #00A76F 0%, #00DA9E 100%);
    color: white;
    @media ${device.mobileL} {
      padding: 11px;
    }
  }
  &&&:hover {
    background-color: #ffffff;
    box-sizing: border-box;
    border: 1px solid #00a870;
    border-radius: 4px;
    color: #00a76f;
    font-weight: bold;
  }
  &&&:active {
    background-color: #188e9b;
    color: white;
  }
`;

export const BackButton = styled(Button)`
  &&& {
    box-shadow: none !important;
  }
`;

export const CardHeader = styled(Card.Header)`
  &&&&&& {
    border-bottom: none;
    margin-left: 4px;
  }
`;

export const CardTitle = styled.div`
  color: #3c4251;
  font: 26px bold;
  line-height: 36px;
  text-align: center;
  margin: 20px;
  text-align: center;
`;
export const CardSubTitle = styled.div`
  text-align: center;
`;

export const CardCenteredText = styled.div`
  &&& {
    text-align: center;
  }
`;

export const TextDescription = styled.div`
  text-align: center;
  padding: 10px;
`;

export const SelectYourWalletTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardPadded = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 20px;
  text-align: center;
  &&&&&& {
    .ui.loader.active,
    .ui.loader.visible {
      position: absolute;
      top: 45%;
      left: 60%;
    }

    @media screen and ${maxDevice.mobileL} {
      .ui.loader.active,
      .ui.loader.visible {
        top: 110px;
        left: 73%;
      }
    }
    @media screen and ${maxDevice.mobileM} {
      .ui.loader.active,
      .ui.loader.visible {
        position: absolute;
        top: 52%;
        left: 67%;
      }
    }
  }
  img {
    width: 243px;
  }
`;
export const ImageContainer = styled.div`
  display: block;
`;
export const CardBottom = styled.div`
  position: absolute;
  bottom: 22px;
  text-align: center;
  width: 324px;
`;
