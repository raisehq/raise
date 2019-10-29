import styled from 'styled-components';
import { device } from '../LayoutV2/breakpoints';

export const Main = styled.div`
  padding: 20px;
  background: white;
  border-radius: 4px;
  margin: 0px 0px;

  @media screen and ${device.laptopS} {
    margin: 0px 20vh;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and ${device.laptopS} {
    justify-content: space-between;
  }
`;

export const Side = styled.div`
  width: 260px;
`;

export const Line = styled.div`
  display: none;
  height: 300px;
  width: 1px;
  margin: 0px 10px;
  background: rgba(209, 210, 214, 1);

  @media screen and ${device.laptopS} {
    display: block;
  }
`;

export const EmailInput = styled.div`
  background: grey;
  width: 100%;
  padding: 2px 0px 2px 2px;
`;
