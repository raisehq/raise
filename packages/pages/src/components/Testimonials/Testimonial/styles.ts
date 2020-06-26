import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

interface ImageProps {
  src?: string | null;
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 360px;
  height: 448px;
  margin: 10px;

  background: #ffffff;
  box-shadow: 0px 8px 25px rgba(60, 66, 81, 0.25);

  @media (max-width: ${size.mobileL}) {
    width: 336px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardTop = styled.div`
  width: 360px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardTopIcon = styled(Icon)`
  color: #d8d9dc;
`;

export const CardDescription = styled.div`
  width: 268px;
  height: 232px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #eb3f93;
`;

export const CardImage = styled.div`
  position: absolute;
  top: 275px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 201px;
  height: 154px;
`;

export const CardPhoto = styled.div<ImageProps>`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  overflow: hidden;

  background-image: ${({ src }) => `url(${src})`};
`;

export const CardName = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  padding: 15px 0;

  text-align: center;

  color: #8a8e97;
`;

export const CardBottom = styled.div`
  width: 360px;
  height: 116px;

  background: #ecedee;
`;
