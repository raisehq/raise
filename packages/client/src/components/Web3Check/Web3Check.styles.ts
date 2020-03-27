import styled from 'styled-components';
import { Card, Button } from 'semantic-ui-react';
import Web3Address from '../Web3Address';
import { device } from '../../commons/breakpoints';

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
  justify-content: center;
  align-items: center;
`;

export const SelectYourWalletList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackContainer = styled.div`
  align-self: center;
  margin-top: 20px;
`;

export const SelectWalletOptionItem = styled.div`
  margin-bottom: 24px;
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

export const DescriptionText = styled.div`
  height: 72px;
  width: 321px;
  color: #3c4251;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ActionDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const ButtonGreenSmall = styled(Button)`
  &&& {
    width: 178px;
    ${({ disabled }) => (disabled === 'true' ? 'opacity: 0.4 !important;' : '')}
    background: linear-gradient(134.72deg, #00A76F 0%, #00DA9E 100%);
    color: white;
    height: 44px;
    margin-top: 20px;
  }
  &&&:hover {
    background-color: #ffffff;
    box-sizing: border-box;
    border: 1px solid #00a870;
    border-radius: 4px;
    color: white;
    font-weight: bold;
  }
  &&&:active {
    background-color: #188e9b;
    color: white;
  }
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

export const GoBack = styled.div`
  margin-top: 68.5px;
`;

export const CardTitle = styled.div`
  color: #3c4251;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  text-align: center;
  margin-top: 62px;
  margin-bottom: 10px;
  text-align: center;
`;
export const CardSubTitle = styled.div`
  text-align: center;
  color: #3c4251;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 39.5px;
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

export const LoaderContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
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

export const ActionButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 338px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
`;

export const GreenActionButton = styled(ActionButton)`
  background-color: #00da9e;
`;

export const WhiteActionButton = styled(ActionButton)`
  border: 1px solid #3c4251;
`;

export const GreenActionText = styled.div`
  width: 219px;
  color: #ffffff;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  width: 259px;
`;

export const GreenActionTitleText = styled.div`
  width: 219px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;
`;

export const WhiteActionText = styled.div`
  width: 219px;
  color: #3c4251;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  width: 259px;
`;

export const WhiteActionTitleText = styled.div`
  width: 219px;
  color: #3c4251;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12px;
`;

export const ConnectFormSubtitle = styled.div`
  width: 280px;
  color: #3c4251;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 30px;
`;

export const SetUpSubtitle = styled.div`
  width: 512px;
  color: #3c4251;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 22px;
`;

export const WalletIcon = styled.img`
  height: 76px;
  width: 76px;
  margin-bottom: 16px;
`;

export const OtherWalletsText = styled.div`
  height: 24px;
  width: 374px;
  color: #3c4251;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-top: 39px;
  margin-bottom: 9.5px;
`;
