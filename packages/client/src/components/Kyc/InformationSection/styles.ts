import styled from 'styled-components';
import { Accordion } from 'semantic-ui-react';

interface TitleProps {
  active: boolean;
}

export const Title = styled(Accordion.Title)<TitleProps>`
  &&&& {
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
`;

export const Wrapper = styled.div`
  min-width: 800px;
`;
