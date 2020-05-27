import styled from 'styled-components';
import { device } from '../../commons/breakpoints';

export const TeamBox = styled.div`
  width: 100%;
  background: white;
  margin-top: 16px;
  margin-bottom: 32px;
  box-shadow: 0px 8px 25px rgba(60, 66, 81, 0.25);
  border-radius: 4px;
  @media screen and ${device.laptop} {
    max-width: 350px;
    margin-top: unset;
  }
`;

export const TeamHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 20px 30px;
`;

export const Title = styled.h3`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  margin: 0;
`;

export const SliderButtons = styled.div`
  display: flex;
  max-width: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
