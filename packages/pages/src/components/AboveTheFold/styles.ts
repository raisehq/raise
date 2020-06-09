import styled from 'styled-components';
import { device } from '../../commons/breakpoints';
import { Button } from '@raisehq/components';

export const FoldBackground = styled.div`
  min-height: 600px;
  height: 90vh;
  background-image: linear-gradient(#3c4251, #7e0348);
  overflow: hidden;
  position: relative;
`;
export const BackgroundImage = styled.div`
  background-image: url('https://static.raise.it/images/hero_bg.svg');
  background-position: 0px 0px; /* Center the image */
  bottom: 0px;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100%;
  position: absolute;
  right: 0px;
  height: 50vh;
  @media screen and ${device.laptop} {
    width: 80%;
    height: 90vh;
    background-position: 215px 0px; /* Center the image */
  }
`;
export const FoldContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    padding: 10px;
    margin: auto;
    height: 90vh;
  }
`;
export const MessageBox = styled.div`
  width: 100%;
  align-items: normal;
  margin: 0;
  position: absolute;
  top: 34%;
  -ms-transform: translateY(-34%);
  transform: translateY(-34%);
  @media screen and ${device.laptop} {
    width: 60%;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;
export const TextContent = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 45px;
  line-height: 71px;
  color: #ffffff;
  @media screen and ${device.laptop} {
    font-size: 72px;
    text-align: left;
  }
`;

export const FoldImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const JoinButton = styled(Button)``;

export const ButtonWrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 50px;
  @media screen and ${device.laptop} {
    width: 290px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 0px;
  }
`;
export const WaveContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -10px;
  svg {
    width: 200%;
    height: auto;
  }
  @media screen and ${device.laptop} {
    svg {
      width: 100%;
      height: auto;
    }
    bottom: -67px;
  }
`;
