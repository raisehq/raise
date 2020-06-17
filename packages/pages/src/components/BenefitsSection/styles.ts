import styled, { keyframes, css } from 'styled-components';
import { Image as ImageSemantic } from 'semantic-ui-react';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};
export interface ImageProps {
  visible: true;
}

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }
  to{
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 56px;
  text-align: center;
  padding: 70px;

  color: #eb3f93;

  @media (max-width: ${size.mobileL}) {
    font-size: 48px;
    padding-bottom: 40px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  height: 500px;
  width: 50%;
  position: relative;

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    height: 280px;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ControlWrapper = styled.div`
  padding: 0 0 50px 0;
`;

export const SpecialRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
  padding-top: 50px;
  @media (max-width: ${size.mobileL}) {
    width: 100%;
    align-items: center;
  }
`;

export const CheckLoanText = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 10px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #eb3f93;
  &:hover {
    color: #eb3f93;
  }
  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;

export const IconWrapper = styled.span`
  padding-top: 3px;
`;

export const Image = styled(ImageSemantic)<ImageProps>`
  &&&&& {
    position: absolute;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

    animation: ${({ visible }) =>
      visible
        ? css`
            animation: ${fadeIn} 0.1s linear;
          `
        : css`
            animation: ${fadeOut} 0.1s linear;
          `};

    transition: visibility 0.1s linear;

    @media (max-width: ${size.mobileL}) {
      width: 355px;
      left: 5%;
    }
  }
`;
