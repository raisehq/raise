import styled from 'styled-components';
import { device } from '../../commons/breakpoints';

export const FlexDiv = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and ${device.tablet} {
    justify-content: flex-end;
  }
`;

export default FlexDiv;
