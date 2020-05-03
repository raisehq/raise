import styled from 'styled-components';
import { Accordion } from 'semantic-ui-react';
import { size } from '../../../commons/breakpoints';

interface TitleProps {
  active: boolean;
}

export const Title = styled(Accordion.Title)<TitleProps>`
  &&&& {
    display: flex;
    flex-direction: row;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    color: ${({ active }) => (active ? '#f9bc2e' : '#8A8E97')};
  }
  span {
    color: #f9bc2e;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  padding: 8px 0;
  width: 100%;
  margin: 10px 0;

  @media (max-width: ${size.mobileL}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Wrapper = styled.div`
  min-width: 800px;

  @media (max-width: ${size.mobileL}) {
    min-width: 0;
  }
`;
