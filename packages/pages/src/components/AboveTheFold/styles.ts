import styled from 'styled-components';
import { device } from '../../commons/breakpoints';

export const FoldBackground = styled.div`
  min-height: 600px;
  height: calc(100vh - 61px);
  background-image: linear-gradient(#3c4251, #7e0348);
  overflow: hidden;
  position: relative;
`;
export const BackgroundImage = styled.div`
  background-image: url('https://static.raise.it/images/hero_bg.svg');
  background-position: center; /* Center the image */
  bottom: 0px;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100%;
  position: absolute;
  right: 0px;
  height: 50vh;
  @media screen and ${device.laptop} {
    width: 100%;
    height: calc(100vh - 55px);
    background-position: 215px center; /* Center the image */
  }
`;
export const FoldContainer = styled.div`
  position: relative;
  height: calc(100vh - 55px);
  overflow: hidden;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    padding: 10px;
    margin: auto;
    height: calc(100vh - 55px);
  }
`;
export const MessageBox = styled.div`
  width: 100%;
  align-items: normal;
  margin: 0;
  position: absolute;
  top: 34%;
  left: 0px;
  -ms-transform: translateY(-34%);
  transform: translateY(-34%);
  @media screen and ${device.tablet} {
    width: 500px;
    top: 50%;
    left: 50%;
    margin-left: -225px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  @media screen and ${device.laptop} {
    width: 50%;
    top: 50%;
    left: 0px;
    margin: 15px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;
export const TextContent = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  line-height: 71px;
  text-align: left;
  color: #ffffff;
  margin: 15px;
  h1 {
    font-size: 45px;
    line-height: 71px;
  }
  h2 {
    font-size: 15px;
    font-weight: normal;
    line-height: 28px;
  }
  @media screen and ${device.laptop} {
    margin: 0px;
    h1 {
      font-size: 73px;
      line-height: 71px;
    }
    h2 {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
  }
`;

export const FoldImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
  a {
    display: block;
  }
`;
export const WaveContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -7px;
  svg {
    width: 200%;
    height: auto;
  }
  @media screen and ${device.laptop} {
    svg {
      width: 100%;
      height: auto;
    }
  }
`;
