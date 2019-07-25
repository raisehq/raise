import styled from 'styled-components';
import Select from 'react-virtualized-select';
import { Theme } from 'hero-ui';
import { Image, Header, Grid } from 'semantic-ui-react';

export const ButtonContainer = styled.div`
  padding-top: 20px;
`;

export const SelectStyled: any = styled(Select)`
  .Select-control {
    height: 38px !important;
    ${(props: any) => {
      if (props.error) {
        return `background: #fff6f6;
            border-color: #e0b4b4;
            color: #9f3a38;
            border-radius: '';
            box-shadow: none;
      `;
      }
      return '';
    }};
  }
`;

export const HeaderStyled: any = styled(Header)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageStyled: any = styled(Image)`
  margin: 20px;
  height: 80px;
  background: rgba(0, 0, 0, 0.6);
`;

export const FLipperWrapper = styled.div`
  display: flex;
  margin-top: 55px;
  justify-content: center;
  align-items: center;
`;

export const UploadSectionStyled: any = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 22px;
    margin-top: 20px;
  }

  i.icon {
    color: rgba(0, 0, 0, 0.4) !important;
  }
`;

export const ThumbsContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;

  img {
    max-width: auto !important;
    width: auto !important;
    height: 100% !important;
  }
`;

export const ThumbStyled = styled.div`
  display: inline-flex;
  border-radius: 2;
  border: 1px solid #eaeaea;
  margin-bottom: 8;
  margin-right: 8;
  width: 100;
  height: 100;
  padding: 4;
  box-sizing: border-box;
`;

export const ThumbInnerStyled = styled.div`
  display: flex;
  overflow: hidden;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 50px 0;

  .ui.card {
    margin: 0 20px 0 0 !important;
  }
`;

export const WebcamWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .webcam {
    border-radius: 3px;
    background: url(${Theme.static}/default-image.png) center center no-repeat;
    background-color: black;
    background-size: cover;
    margin-bottom: 10px;
  }
`;

export const Sending = styled.div`
  width: 100%;
  height: 400px;
`;

export const CardPlaceholder = styled.div`
  width: 100%;
  height: 240px;
  background: url(${Theme.static}/default-image.png) no-repeat center center;
  position: relative;
`;

export const ImageHolder = styled.div`
  position: absolute;
  width: 100%;
  height: 240px;
  top: 0;
  left: 0;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const ErrorContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export const ErrorGrid = styled(Grid)`
  &&& {
    width: 100%;
    height: 400px;
  }
`;
export const ErrorMessage = styled.div`
  &&& {
    color: black;
    display: block;
  }
`;
