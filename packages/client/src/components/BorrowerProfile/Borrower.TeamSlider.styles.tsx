import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

interface SlideProps {
  image?: string;
}

export const Name = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: white;
`;

export const Role = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: white;
`;

export const MemberContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 123px;
  padding: 0px 32px 16px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`;

export const MemberInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SocialIcon = styled(Icon)`
  &&&& {
    color: white;
    width: 44px;
    height: 44px;
    font-size: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const Wrapper: any = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 300px;

  .slick-dots {
    height: 60px;
    position: relative;
    bottom: unset;
    display: block;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .slick-dots li {
    margin: 0 !important;
  }

  .slick-dots li button {
    &:before {
      font-size: 9px !important;
    }
  }
  .slick-dots li.slick-active button {
    &:before {
      color: #eb3f93 !important;
    }
  }
`;

export const Slide = styled.div<SlideProps>`
  color: black;
  &:hover,
  &:focus {
    color: black;
  }
  display: flex !important;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 240px;
  outline: none;
  ${({ image }) => image && `background-image: url(${image});`}
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
`;
